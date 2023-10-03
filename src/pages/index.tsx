import { useOksData } from "@/entities/oks";
import { Map } from "../entities/map";
import { OksFilter, OksList, TDataStatus, useOksModal } from "@/features";
import { OksModal } from "@/features/index"
import { MinistryBanner } from "@/shared";
import { MapZoomControl } from "@/shared/map-zoom_control";
import { As, Box, BoxProps, HTMLChakraComponents, HTMLChakraProps } from "@chakra-ui/react";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { Banner } from "@/shared/banner";

const Home = () => {
  const [isBottomMax, setIsBottomMax] = useState<boolean>(true)
  const { isModalOpen, setIsModalOpen, data: modalData } = useOksModal()

  const { data: oksData } = useOksData()
  const [dataVariant, setDataVariant] = useState<TDataStatus>("empty")

  useEffect(() => {
    if (oksData.length > 0) {
      setDataVariant("filled")
    }
    if (oksData.length === 0) {
      setDataVariant("empty")
    }
  }, [oksData])
  const ref = useRef(null)

  useLayoutEffect(() => {
    // @ts-ignore
    if (ref?.current.scrollHeight > 1080) {

      setIsBottomMax(true)

    }
    else {
      setIsBottomMax(false)
    }
  }, [ref]);

  return (
    <>

      <Map />
      {/* @ts-ignore */}
      <Box ref={ref} w={"md"} position={"absolute"} top={0} right={0} bottom={0} overflow={"scroll"} className="overflow__hidden">
        <Box display={"flex"} flexDirection={"column"} gap={4}>
          <Box zIndex={602} position={"sticky"} top={0}>
            <OksFilter />
          </Box>
          <Box overflow={"scroll"} className="overflow__hidden" onWheel={(e) => console.log(e)}>
            <OksList data_variant={dataVariant} />
          </Box>
        </Box>
      </Box>
      <OksModal data={modalData} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <Banner placement="bottom" zIndex={600} margin={"auto"} w={"full"}  >
        
            <MapZoomControl />
      </Banner>
      <MinistryBanner />
    </>
  );
};

export default Home;