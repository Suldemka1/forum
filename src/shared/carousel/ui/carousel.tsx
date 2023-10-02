import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
  FC
} from "react";
import {
  useMediaQuery,
  useTheme,
} from "@chakra-ui/react";
import { CarouselItem } from "./item";
import { CarouselSlider } from "./slider";
import { CarouselTrack } from "./track";

const ChakraCarousel: FC<any>
  = ({ children, gap }) => {
    const [trackIsActive, setTrackIsActive] = useState<boolean>(false);
    const [multiplier, setMultiplier] = useState<number>(1);
    const [sliderWidth, setSliderWidth] = useState<number>(0);
    const [activeItem, setActiveItem] = useState<number>(0);
    const [constraint, setConstraint] = useState<number>(0);
    const [itemWidth, setItemWidth] = useState<number>(0);

    const initSliderWidth = useCallback((width: number) => setSliderWidth(width), []);

    const positions = useMemo(
      () => children.map((_: any, index: number) => -Math.abs((itemWidth + gap) * index)),
      [children, itemWidth, gap]
    );

    const { breakpoints } = useTheme();

    const [isBetweenBaseAndMd] = useMediaQuery(
      `(min-width: ${breakpoints.base}) and (max-width: ${breakpoints.md})`
    );

    const [isBetweenMdAndXl] = useMediaQuery(
      `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.xl})`
    );

    const [isGreaterThanXL] = useMediaQuery(`(min-width: ${breakpoints.xl})`);

    useEffect(() => {
      if (isBetweenBaseAndMd) {
        setItemWidth(sliderWidth - gap);
        setMultiplier(0.65);
        setConstraint(1);
      }
      if (isBetweenMdAndXl) {
        setItemWidth(sliderWidth / 2 - gap);
        setMultiplier(0.5);
        setConstraint(1); // 2
      }
      if (isGreaterThanXL) {
        setItemWidth(sliderWidth / 1 - gap);
        setMultiplier(0.5); // 35
        setConstraint(1); //3
      }
    }, [isBetweenBaseAndMd, isBetweenMdAndXl, isGreaterThanXL, sliderWidth, gap]);

    const sliderProps = {
      setTrackIsActive,
      initSliderWidth,
      setActiveItem,
      activeItem,
      constraint,
      itemWidth,
      positions,
      gap
    };

    const trackProps = {
      setTrackIsActive,
      trackIsActive,
      setActiveItem,
      sliderWidth,
      activeItem,
      constraint,
      multiplier,
      itemWidth,
      positions,
      gap
    };

    const itemProps = {
      setTrackIsActive,
      trackIsActive,
      setActiveItem,
      activeItem,
      constraint,
      itemWidth,
      positions,
      gap
    };

    return (
      <CarouselSlider {...sliderProps}>
        <CarouselTrack {...trackProps}>
          {children.map((child: React.ReactNode, index: number) => (
            <CarouselItem {...itemProps} index={index} key={index}>
              {child}
            </CarouselItem>
          ))}
        </CarouselTrack>
      </CarouselSlider>
    );
  };

export default ChakraCarousel;