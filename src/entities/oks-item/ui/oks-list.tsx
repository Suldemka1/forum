import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading, Icon, Image, Select, SelectField, Stack, Tag, Text, useToast } from "@chakra-ui/react";
import { FC } from "react";
import { useOksPanel } from "../api/useOksPanel";
//@ts-ignore
import ChakraCarousel from "../../../shared/carousel/ui/carousel.jsx"
import { RegionList } from "../../../app/constants/kozhuun.js";
import { CustomerList } from "../../../app/constants/customer.js";

const BuildingsList: FC = () => {
  //@ts-ignore
  const { isOpen, setIsOpen, title, region, locality, street, house, customer, developer, images, start, end } = useOksPanel()
  const toast = useToast()
  return <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
    <DrawerOverlay></DrawerOverlay>

    <DrawerContent maxW={"7xl"} >
      <DrawerCloseButton onClick={() => setIsOpen(false)} />
      <Stack direction={"row"} overflowY={"scroll"} className="overflow__hidden">
        {/* контент */}
        <DrawerBody flex={3} h={"auto"} overflowX={"hidden"} display={"flex"} flexDirection={"column"} gap={4} className="overflow__hidden">

          <Heading>Название проекта может быть длинным как здесь и не только</Heading>

          <Image src="i.webp" h={500} />
          <Box minH={200}>
            <ChakraCarousel gap={12}>
              {
                [0, 1, 2, 3, 4, 5].map((item: number) => <Box key={item}>
                  <Image draggable={false} src="i.webp" maxH={200} minH={200} />
                </Box>)
              }
            </ChakraCarousel>
          </Box>

          <Text fontSize={20}>
            У нас современное пространство , погружение в лес через современные технологии.
            ЛЕС - уникальное новое интерактивное игровое пространство, посвящённое любви к
            природе, площадью 1000 кв. метров. 5 уникальных залов 18 интерактивных
            инсталляций панорамный кинотеатр уютное ЛЕСное кафе Новый мультимедийный
            формат - на территории одного из самых крупных парков Москвы - ВДНХ, в
            котором гости попадают в красочный мир природы.
          </Text>

          <Stack direction={"row"}>
            <Tag><Heading fontSize={20} px={4} py={2}>{customer}</Heading></Tag>
            <Tag><Heading fontSize={20} px={4} py={2}>{developer}</Heading></Tag>
          </Stack>


          <Stack direction={"row"} py={2}>
            <Image src="/icons/location.png" w={6} />
            <Text>{region},</Text>
            <Text>город</Text>
            <Text>{locality},</Text>
            <Text>{ }улица</Text>
            <Text>{street},</Text>
            <Text>дом {house}</Text>
          </Stack>


          <Stack w={"full"} direction={"row"} gap={10}>
            <Text>Дата начала: {start}</Text>
            <Text>Дата окончания: {end}</Text>
          </Stack>
        </DrawerBody>

        {/* фильтр */}
        <DrawerBody py={7} h={"auto"} overflowX={"hidden"} flex={1} display={"flex"} flexDirection={"column"} gap={4}>
          <Heading fontSize={24}>Поиск по параметрам</Heading>
          <Select onChange={(e) => {
            toast({
              title: 'Выбран регион',
              description: e.target.value,
              status: 'info',
              duration: 3000,
              position: "top-left",
              isClosable: true,
            })
          }}>
            <option>Не выбрано</option>
            {
              RegionList.map((item: { name: string }) => {
                return (
                  <option
                    key={item.name}
                    value={item.name}>
                    {item.name}
                  </option>
                )
              })
            }
          </Select>

          <Select onChange={(e) => {
            toast({
              title: 'Выбран тип ОКС',
              description: e.target.value,
              status: 'info',
              duration: 3000,
              position: "top-left",
              isClosable: true,
            })
          }}>
            <option>Не выбрано</option>
            <option>Строительство</option>
            <option>Ремонт</option>
          </Select>

          <Select onChange={(e) => {
            toast({
              title: 'Выбран заказчик',
              description: e.target.value,
              status: 'info',
              duration: 3000,
              position: "top-left",
              isClosable: true,
            })
          }}>
            <option>Не выбрано</option>
            {
              CustomerList.map((item: { name: string }) => {
                return (
                  <option
                    key={item.name}
                    value={item.name}
                  >
                    {item.name}
                  </option>
                )
              })
            }
          </Select>

          <Select onChange={(e) => {
            toast({
              title: 'Выбран подрядчик',
              description: e.target.value,
              status: 'info',
              duration: 3000,
              position: "top-left",
              isClosable: true,
            })
          }}>
            <option>Не выбрано</option>
            <option>ООО рога и копыта</option>
            <option>ООО санки и лыжи</option>
          </Select>

          <Heading fontSize={24}>Другие проекты в регионе</Heading>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={5}
            overflowY={"scroll"}
            className="overflow__hidden"
            zIndex={600}
          >
            {
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                return (
                  <Box
                    bgColor={"blue.500"}
                    color={"whiteAlpha.900"}
                    borderRadius={8}
                    p={4}
                    cursor={"pointer"}
                    zIndex={600}
                    key={item}
                  >
                    <Heading
                      as={"p"}
                      fontSize={20}
                      textOverflow={"ellipsis"}
                      lineHeight={"5"}
                    >
                      Название проекта может быть длинным как здесь и не только</Heading>
                    <Text>Минздрав</Text>
                  </Box>
                )
              })
            }
          </Box>

        </DrawerBody>
      </Stack>
    </DrawerContent >
  </Drawer >;
};

export { BuildingsList };
