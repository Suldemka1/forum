import { FC, useState, TouchEventHandler, useEffect, WheelEventHandler, KeyboardEventHandler } from "react";
import { ISlide } from "../api/interface";
import { Box, Image } from "@chakra-ui/react";
import SpringCarousel from "react-spring-3d-carousel";
import { useOksModal } from "@/features/oks-modal";
import { IDirectusImage } from "@/entities/directus";

const AppCarousel: FC = () => {
  const enableSwipe = true
  const offsetRadius = 2

  const { data } = useOksModal()
  const [slides, setSlides] = useState<Array<ISlide>>([])
  const [goToSlide, setGoToSlide] = useState<number | undefined>(0)

  const [yDown, setYDown] = useState<number | undefined>(undefined)
  const [xDown, setXDown] = useState<number | undefined>(undefined)

  const leftSwipe = () => setGoToSlide((prev) => {
    if (prev) {
      return prev - 1
    }
    else {
      return slides.slice(-1)[0].key
    }
  })

  const rightSwipe = () => setGoToSlide((prev) => {
    if (prev) {
      return prev + 1
    }
    else {
      return slides[1].key
    }
  })

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (tvt) => {
    if (!enableSwipe) {
      return;
    }

    const firstTouch = tvt.touches[0];
    setYDown(firstTouch.clientY)
    setXDown(firstTouch.clientX)
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (tvt) => {
    if (!enableSwipe) {
      return;
    }
    else {
      if (xDown && yDown) {
        let xUp = tvt.touches[0].clientX;
        let yUp = tvt.touches[0].clientY;

        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          if (xDiff > 0) {
            rightSwipe()
            setYDown(undefined)
            setXDown(undefined)
          } else {
            leftSwipe()
            setYDown(undefined)
            setXDown(undefined)
          }
        }
      }
    }
  };

  const handleWheel: WheelEventHandler<HTMLDivElement> = (wvt) => {
    if (slides.length > 1) {
      if (wvt.deltaY > 0) {
        rightSwipe()
      }
      else {
        leftSwipe()
      }
    }
  }

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (kbvt) => {
    if (slides.length > 1) {
      if (kbvt.key == "ArrowRight") {
        rightSwipe()
      }
      if (kbvt.key == "ArrowLeft") {
        leftSwipe()
      }
    }
  }

  useEffect(() => {
    console.log(data)
    if (data && data.images) {
      setSlides(data.images.map((item: IDirectusImage, index: number) => {
        return {
          key: index,
          content: (
            <Image h={500} src={`https://gisoks.ru/cms/assets/${item.directus_files_id}`} fit={"contain"} _focus={{
              border: "none"
            }} />
          ),
          onClick: () => setGoToSlide(index)
        }
      }))
    }
  }, [data])

  return (
    <Box
      w={"100%"}
      h={500}
      m={[0, "auto"]}
      tabIndex={0}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onWheel={handleWheel}
      onKeyDown={handleKeyDown}
      outline={"none"}
    >
      <SpringCarousel
        slides={slides}
        showNavigation={false}
        offsetRadius={offsetRadius}
        goToSlide={goToSlide}
      />
    </Box>
  )
}

export { AppCarousel as Carousel }