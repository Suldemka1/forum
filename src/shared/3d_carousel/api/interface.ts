import { MouseEventHandler, ReactNode } from "react";

export interface ISlide {
  key: number;
  content: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export declare type OffsetFn = (
  offsetFromCenter: number,
  index: number
) => {
  transform?: string;
  left?: string | number;
  opacity?: number;
};

export interface IState {
  index: number;
  goToSlide: number | null;
  prevPropsGoToSlide: number;
  newSlide: boolean;
  enableSwipe: boolean;

  xDown: number | null;
  yDown: number | null;
}

export interface ICarouselProps {
  slides: Array<ISlide>;
  goToSlide?: number;
  showNavigation: boolean;
  offsetRadius: number;
  animationConfig: object;
  goToSlideDelay: number;
  offsetFn?: OffsetFn;
}

export interface IAppCarousel<T> {
  slides: Array<T>;
}
