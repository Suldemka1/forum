import React, { FC, useState, TouchEventHandler, useEffect} from "react";
import Carousel from "react-spring-3d-carousel";
import { IAppCarousel, ISlide } from "../api/interface";
import { Box, Image } from "@chakra-ui/react";


const getTouches = (evt: React.TouchEvent<HTMLDivElement>) => {
  return (
    evt.touches // browser API
  );
};

const AppCarousel: FC<IAppCarousel<any>> = ({ slides: data }) => {

  const [slides, setSlides] = useState<Array<ISlide>>([])
  //@ts-ignore
  const [enableSwipe, setEnableSwipe] = useState<boolean>(true)
  //@ts-ignore
  const [offsetRadius, setOffsetRadius] = useState<number>(2);
  //@ts-ignore
  const [showArrows, setShowArrows] = useState<boolean>(false);
  const [goToSlide, setGoToSlide] = useState<number | undefined>(0)
  const [yDown, setYDown] = useState<number | undefined>(undefined)
  const [xDown, setXDown] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (data) {
      setSlides(data.map((item: any, index) => {
        return {
          key: index,
          content: (
            <Image h={500} src={`https://gisoks.ru/cms/assets/${item.directus_files_id}`} fit={"contain"} />
          ),
          onClick: () => setGoToSlide(index)
        }
      }))
    }
  }, [data])


  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (evt) => {
    if (enableSwipe) {
      console.log(evt)
      const firstTouch = getTouches(evt)[0];
      setYDown(firstTouch.clientY)
      setXDown(firstTouch.clientX)
    }
    return;
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (evt) => {
    if (enableSwipe && xDown && yDown) {
      console.log(evt)
      let xUp = evt.touches[0].clientX;
      let yUp = evt.touches[0].clientY;

      let xDiff = xDown - xUp;
      let yDiff = yDown - yUp;

      console.log(Math.abs(xDiff) > Math.abs(yDiff))
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          /* left swipe */
          setGoToSlide((prev) => {
            if (prev) {
              return prev + 1
            }
            else {
              return slides[1].key
            }
          })
          setYDown(undefined)
          setXDown(undefined)
        } else {
          /* right swipe */

          setGoToSlide((prev) => {
            if (prev) {
              return prev - 1
            }
            else {
              return slides.slice(-1)[0].key
            }

          })
          setYDown(undefined)
          setXDown(undefined)
        }
      }

    }
    return;

  };

  return (
    <Box
      w={"100%"}
      h={500}
      m={[0, "auto"]}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    // onDragStart={handleDragStart}
    >
      <Carousel
        slides={slides}
        showNavigation={showArrows}
        offsetRadius={offsetRadius}
        goToSlide={goToSlide}
      />
    </Box>
  )
}

export { AppCarousel as Carousel }