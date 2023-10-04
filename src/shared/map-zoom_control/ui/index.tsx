import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Heading, Icon, Stack, Image } from "@chakra-ui/react"
import { FC } from "react"
import { useMapZoomControl } from ".."
import { Greetings } from "@/shared/greetings"
import { GreetingsControl } from "@/shared/greetings/ui/open-button"
import { InfoIcon } from "@chakra-ui/icons"

const MapZoomControl: FC = () => {
  const { zoom, setZoom } = useMapZoomControl()
  return (
    <Box w={"full"} display={"flex"} justifyContent={"space-between"}>
      <Box zIndex={600}>
        {/* <GreetingsControl /> */}
      </Box>
      <Box w={"md"}>
        <Slider>
          <label htmlFor="map-zoom-slider" style={{
            userSelect: "none"
          }}>
            <Heading color={"white"} fontSize={20}>масштаб карты</Heading></label>
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
      <Box></Box>
    </Box>

  )
}

export { MapZoomControl }