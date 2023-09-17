import { FC, useLayoutEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useBoundingRect } from "../hooks";

const Slider: FC<any> = ({
  setTrackIsActive,
  initSliderWidth,
  setActiveItem,
  activeItem,
  constraint,
  itemWidth,
  positions,
  children,
  gap
}) => {
  //@ts-ignore
  const [ref, { width }, node] = useBoundingRect();
  const { } = useBoundingRect()

  useLayoutEffect(() => {

    initSliderWidth(Math.round(width))

  }, [width, initSliderWidth]);

  const handleFocus = () => setTrackIsActive(true);

  const handleDecrementClick = () => {
    setTrackIsActive(true);
    !(activeItem === positions.length - positions.length) &&
      setActiveItem((prev: number) => prev - 1);
  };

  const handleIncrementClick = () => {
    setTrackIsActive(true);
    !(activeItem === positions.length - constraint) &&
      setActiveItem((prev: number) => prev + 1);
  };

  return (
    <>
      <Box
        // @ts-ignore
        ref={ref}
        w={{ base: "100%", md: `calc(100% + ${gap}px)` }}
        ml={{ base: 0, md: `-${gap / 2}px` }}
        px={`${gap / 2}px`}
        position="relative"
        overflow="hidden"
        _before={{
          bgGradient: "linear(to-r, base.d400, transparent)",
          position: "absolute",
          w: `${gap / 2}px`,
          content: "''",
          zIndex: 1,
          h: "100%",
          left: 0,
          top: 0
        }}
        _after={{
          bgGradient: "linear(to-l, base.d400, transparent)",
          position: "absolute",
          w: `${gap / 2}px`,
          content: "''",
          zIndex: 1,
          h: "100%",
          right: 0,
          top: 0
        }}
      >
        {children}
      </Box>
    </>

  );
};

export { Slider as CarouselSlider }