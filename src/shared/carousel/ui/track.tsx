import React, { FC, useState, useEffect, useRef, useCallback } from "react"
import { PanInfo, useAnimation, useMotionValue } from "framer-motion";
import { ICarouselTrack } from "../api/interface";
import { VStack, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion"

const MotionFlex = motion(Flex);

const transitionProps = {
  stiffness: 400,
  type: "spring",
  damping: 60,
  mass: 3
};

const CarouselTrack: FC<ICarouselTrack> = ({
  setTrackIsActive,
  trackIsActive,
  setActiveItem,
  activeItem,
  constraint,
  multiplier,
  itemWidth,
  positions,
  children
}) => {
  const [dragStartPosition, setDragStartPosition] = useState<number>(0);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const node = useRef<HTMLDivElement>(null);

  const handleDragStart = () => setDragStartPosition(positions[activeItem]);

  const handleDragEnd = (_: React.DragEvent<HTMLDivElement>, info: PanInfo) => {
    const distance = info.offset.x;
    const velocity = info.velocity.x * multiplier;
    const direction = velocity < 0 || distance < 0 ? 1 : -1;

    const extrapolatedPosition =
      dragStartPosition +
      (direction === 1
        ? Math.min(velocity, distance)
        : Math.max(velocity, distance));

    const closestPosition = positions.reduce((prev, curr) => {
      return Math.abs(curr - extrapolatedPosition) <
        Math.abs(prev - extrapolatedPosition)
        ? curr
        : prev;
    }, 0);

    if (!(closestPosition < positions[positions.length - constraint])) {
      setActiveItem(positions.indexOf(closestPosition));
      controls.start({
        x: closestPosition,
        transition: {
          velocity: info.velocity.x,
          ...transitionProps
        }
      });
    } else {
      setActiveItem(positions.length - constraint);
      controls.start({
        x: positions[positions.length - constraint],
        transition: {
          velocity: info.velocity.x,
          ...transitionProps
        }
      });
    }
  };

  const handleResize = useCallback(() => {
    return controls.start({
      x: positions[activeItem],
      transition: {
        ...transitionProps
      }
    })
  },[activeItem, controls, positions]
  );

  const handleClick = useCallback((event: MouseEvent) => {
    if (node.current != null && Object(event).hasOwnProperty("target")) {
      //@ts-ignore
      return node.current.contains(event.target)
        ? setTrackIsActive(true)
        : setTrackIsActive(false)
    }
  },

    [setTrackIsActive]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (trackIsActive) {
        if (activeItem < positions.length - constraint) {
          if (event.key === "ArrowRight" || event.key === "ArrowUp") {
            event.preventDefault();
            setActiveItem((prev: number) => prev + 1);
          }
        }
        if (activeItem > positions.length - positions.length) {
          if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
            event.preventDefault();
            setActiveItem((prev: number) => prev - 1);
          }
        }
      }
    },
    [trackIsActive, setActiveItem, activeItem, constraint, positions.length]
  );

  useEffect(() => {
    handleResize();

    document.addEventListener<"keydown">("keydown", handleKeyDown);
    document.addEventListener<"mousedown">("mousedown", handleClick);
    return () => {
      document.removeEventListener<"keydown">("keydown", handleKeyDown);
      document.removeEventListener<"mousedown">("mousedown", handleClick);
    };
  }, [handleClick, handleResize, handleKeyDown, positions]);

  return (
    <>
      {itemWidth && (
        <VStack
          ref={node}
          spacing={5}
          alignItems="stretch"
        >
          <MotionFlex
            dragConstraints={node}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={controls}
            style={{ x }}
            drag="x"
            _active={{ cursor: "grabbing" }}
            minWidth="min-content"
            flexWrap="nowrap"
            cursor="grab"
          >
            {children}
          </MotionFlex>
        </VStack>
      )}
    </>
  );
};

export { CarouselTrack }