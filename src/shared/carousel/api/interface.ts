import React, { SetStateAction } from "react";

export interface ICarouselItem {
  setTrackIsActive: (boolean: boolean) => void;
  setActiveItem: (index: number) => void;
  activeItem: unknown;
  constraint: number;
  itemWidth: number;
  positions: Array<number>;
  children: React.ReactNode;
  index: number;
  gap: number;
}

export interface ICarouselTrack {
  setTrackIsActive: React.Dispatch<SetStateAction<boolean>>;
  trackIsActive: boolean;
  setActiveItem: React.Dispatch<SetStateAction<number>>;
  activeItem: number;

  constraint: number;
  multiplier: number;
  itemWidth: number;
  positions: Array<number>;
  children: React.ReactNode;
}
