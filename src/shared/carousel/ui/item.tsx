import React, { FC, useState } from "react";
import { ICarouselItem } from "../api/interface";
import { Flex } from "@chakra-ui/react";

const CarouselItem: FC<ICarouselItem> = ({
  setTrackIsActive,
  setActiveItem,
  activeItem,
  constraint,
  itemWidth,
  positions,
  children,
  index,
  gap
}) => {
  const [userDidTab, setUserDidTab] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLDivElement>) => {
    setTrackIsActive(true);
  }

  const handleBlur = () => {
    userDidTab && index + 1 === positions.length && setTrackIsActive(false);
    setUserDidTab(false);
  };

  const handleKeyUp = (event: React.KeyboardEvent) =>
    event.key === "Tab" &&
    !(activeItem === positions.length - constraint) &&
    setActiveItem(index);

  const handleKeyDown = (event: React.KeyboardEvent) => event.key === "Tab" && setUserDidTab(true);

  return (
    <Flex
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      w={`${itemWidth}px`}
      _notLast={{
        mr: `${gap}px`
      }}
      py="4px"
    >
      {children}
    </Flex>
  );
};

export { CarouselItem }