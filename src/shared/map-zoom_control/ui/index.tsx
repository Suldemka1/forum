import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Heading } from "@chakra-ui/react"
import { FC } from "react"
import { useMapZoomControl } from ".."

const MapZoomControl: FC = () => {
  const { zoom, setZoom } = useMapZoomControl()
  return (
    <Box w={"full"} display={"flex"} justifyContent={"center"}>
      <Box w={"md"}>
        <Slider>
          <label htmlFor="map-zoom-slider" style={{
            userSelect: "none"
          }}>
            <Heading color={"white"} fontSize={20}>Масштаб карты</Heading></label>
          <Slider id="map-zoom-slider" defaultValue={zoom} max={20} min={5} step={1} value={zoom} onChange={(e) => {
            setZoom(e)
          }}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Slider>
      </Box>
    </Box>

  )
}

export { MapZoomControl }