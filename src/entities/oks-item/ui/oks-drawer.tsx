import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Image, Stack, Tag, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useOksPanel } from "../api/useOksPanel.js";
//@ts-ignore
import ChakraCarousel from "../../../shared/carousel/ui/carousel.js"
import { OksFilter } from "./oks-filter.js";
import { OksList } from "./oks-list.js";
import { ImageViewer } from "../../../shared/image-viewer/index.js";

const OksDrawer: FC = () => {
  const { isOpen, setIsOpen, panel } = useOksPanel()
  return (
    <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <DrawerOverlay></DrawerOverlay>

      <DrawerContent maxW={"7xl"} >
        <DrawerHeader pt={10}><Heading fontSize={28}>{panel.name}</Heading></DrawerHeader>
        <DrawerCloseButton onClick={() => setIsOpen(false)} />

        <Stack direction={"row"} overflowY={"scroll"} className="overflow__hidden">
          <DrawerBody flex={3} h={"auto"} overflowX={"hidden"} display={"flex"} flexDirection={"column"} gap={4} className="overflow__hidden">
            <ImageViewer images={panel.images} />

            <Text fontSize={20}>
              У нас современное пространство , погружение в лес через современные технологии.
              ЛЕС - уникальное новое интерактивное игровое пространство, посвящённое любви к
              природе, площадью 1000 кв. метров. 5 уникальных залов 18 интерактивных
              инсталляций панорамный кинотеатр уютное ЛЕСное кафе Новый мультимедийный
              формат - на территории одного из самых крупных парков Москвы - ВДНХ, в
              котором гости попадают в красочный мир природы.
            </Text>

            <Stack direction={"row"}>
              <Tag><Heading fontSize={20} px={4} py={2}>{panel.customer}</Heading></Tag>
              <Tag><Heading fontSize={20} px={4} py={2}>{panel.developer}</Heading></Tag>
            </Stack>


            <Stack direction={"row"} py={2}>
              <Image src="/icons/location.png" w={6} />
              <Text>{panel.region},</Text>
              <Text>город</Text>
              <Text>{panel.locality},</Text>
              <Text>улица</Text>
              <Text>{panel.street},</Text>
              <Text>дом</Text>
              <Text>{panel.house}</Text>
            </Stack>


            <Stack w={"full"} direction={"row"} gap={10}>
              <Text>Дата начала: {panel.start}</Text>
              <Text>Дата окончания: {panel.end}</Text>
            </Stack>
          </DrawerBody>

          <DrawerBody h={"auto"} overflowX={"hidden"} flex={1} display={"flex"} flexDirection={"column"} gap={4}>
            <OksFilter />
            <OksList />
          </DrawerBody>
        </Stack>
      </DrawerContent >
    </Drawer >
  );
}

export { OksDrawer }