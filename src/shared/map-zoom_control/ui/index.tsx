import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Image } from "@chakra-ui/react"
import { FC } from "react"
import { useMapZoomControl } from ".."


const MapZoomControl: FC = () => {
  const { zoom, setZoom, minZoom, maxZoom } = useMapZoomControl()
  return (
    <Box w={"full"} display={"flex"} justifyContent={"center"}>


      <Box w={"md"}>
        <Slider>
          <Slider id="map-zoom-slider" defaultValue={zoom} max={maxZoom} min={minZoom} step={1} value={zoom} onChange={(e) => {
            setZoom(e)
          }}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={7} >
              <Image src="/icons/zoom.png" h={5} w={5} />
            </SliderThumb>
          </Slider>
        </Slider>
      </Box>

    </Box>

  )
}

export { MapZoomControl }