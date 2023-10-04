import { FC, useEffect, useState, useRef } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Image,
  Stack
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
    <Box
      ref={ref}
      w={"sm"}
      position={"absolute"}
      top={0}
      right={0}
      bottom={0}
      py={10}
      px={10}
      overflow={"hidden"}
    // className="overflow__hidden"
    >
      <Accordion
        display={"flex"}
        flex={"1 1"}
        gap={3}
        flexDirection={"column"}
        h={"full"}
        defaultIndex={[1]}
        allowMultiple
        borderBottomWidth={0}
      >

        <AccordionItem flex={0} border={"none"}>
          <AccordionButton
            bg={"#040436"}
            _hover={{
              bg: "#040436",
            }} outline={"none"}
            border={"none"}
          >
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Image src={"/icons/filter.png"} h={7} />
              <Heading color={"white"} fontSize={16}>
                Фильтр по параметрам
              </Heading>
            </Stack>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} px={0}>
            <OksFilter />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem position={"relative"} flex={"auto"} border={"none"}>
          <AccordionButton
            bg={"#040436"}
            _hover={{
              bg: "#040436",
            }} outline={"none"}
            border={"none"}
          >
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Image src={"/icons/database.png"} h={7} />
              <Heading color={"white"} fontSize={16}>
                Объекты
              </Heading>
            </Stack>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel
            position={"absolute"}
            top={10}
            bottom={0}
            display={"flex"}
            overflow={"hidden"}
            px={0}
            py={5}
          >
            <OksList data_variant={dataVariant} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

    </Box>
  );
};

export { Sidebar };
