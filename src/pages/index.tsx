import { Box, Heading } from "@chakra-ui/react";
import { Map } from "../entities/map";
import { OksDrawer } from "../entities/oks/ui/oks-drawer";
import { Banner } from "../shared/banner";
import { OksModal } from "../entities/oks/ui/oks-modal";
import { useOksData, useOksModal } from "../entities/oks/api";
import { OksFilter } from "../entities/oks/ui/oks-filter";
import { TDataStatus } from "../entities/oks/api/list/interface";
import { OksList } from "../entities/oks/ui";
import { useEffect, useState } from "react";

const Home = () => {
  const [dataVariant, setDataVariant] = useState<TDataStatus>("empty")
  const { isModalOpen, setIsModalOpen, data: modalData } = useOksModal()
  const { data: oksData } = useOksData()

  useEffect(() => {
    if (oksData.length > 0) {
      setDataVariant("filled")
    }
    if (oksData.length === 0) {
      setDataVariant("empty")
    }
  }, [oksData])
  return (
    <>
      <Map />
      {/* <Banner zIndex={600} placement="top-right" overflow={"scroll"} className="overflow__hidden"> */}

      <Box w={"md"} position={"absolute"} top={0} bottom={0} right={0} overflow={"scroll"} className="overflow__hidden">
        <Box display={"flex"} flexDirection={"column"} gap={4}>
          <Box zIndex={602} position={"sticky"} top={0}>
            <OksFilter />
          </Box>
          <Box overflow={"scroll"} className="overflow__hidden">
            <OksList data_variant={dataVariant} />
          </Box>
        </Box>

      </Box>

      {/* </Banner> */}


      <OksDrawer />
      <OksModal data={modalData} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <Banner zIndex={600} placement="top-left" >
        <Heading color={"white"} textAlign={"left"}>
          <p>Министерство строительства <br /> Республики Тыва</p>
        </Heading>
      </Banner>

      {/* <Banner zIndex={600} placement="bottom-left">
        <Box position={"relative"} bg={"whiteAlpha.800"} w={"md"} borderRadius={5} p={5}>
          <Greetings />
          информация
        </Box>
      </Banner> */}



    </>
  );
};

export default Home;