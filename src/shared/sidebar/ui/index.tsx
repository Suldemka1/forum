import { FC, useEffect, useState, useRef } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import { OksFilter, OksList, TDataStatus } from "@/features";
import { useOksData } from "@/entities";

const Sidebar: FC = () => {
  const { data: oksData } = useOksData();
  const [dataVariant, setDataVariant] = useState<TDataStatus>("empty");
  const ref = useRef(null);

  useEffect(() => {
    if (oksData.length > 0) {
      setDataVariant("filled");
    }
    if (oksData.length === 0) {
      setDataVariant("empty");
    }
  }, [oksData]);

  return (
    <>
      <Box
        ref={ref}
        w={"sm"}
        position={"absolute"}
        top={0}
        right={0}
        bottom={0}
        overflow={"scroll"}
        className="overflow__hidden"
      >
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton
                bg={"#040436"}
                _hover={{
                  bg: "#040436",
                }}
              >
                <Box as="span" flex="1" textAlign="left">
                  <Heading color={"white"} fontSize={16}>
                    Фильтр по параметрам
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box zIndex={602} position={"sticky"} top={0}>
                <OksFilter />
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton outline={"none"} border={"none"}>
                <Box as="span" flex="1" textAlign="left">
                <Heading color={"white"} fontSize={16}>
                    Объекты
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box overflow={"scroll"} className="overflow__hidden">
                <OksList data_variant={dataVariant} />
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Box display={"flex"} flexDirection={"column"} gap={4}></Box>
      </Box>
    </>
  );
};

export { Sidebar };
