import { FC, Component } from "react";
import { ICarouselProps, TAppCarouselDataStatus, IAppCarouselComponent } from "../api/interface";
import { Carousel } from "./carousel";
import { EmptyImageData } from "./images-not-found";

const AppCarousel: FC<IAppCarouselComponent> = ({ data_status }) => {

  const CAROUSEL_VIEW: Record<TAppCarouselDataStatus, FC | Component<ICarouselProps>> = {
    "filled": Carousel,
    "empty": EmptyImageData
  }
  
  const CarouselView: FC = CAROUSEL_VIEW[data_status] as FC

  return (
    <CarouselView />
  )
}

export { AppCarousel }