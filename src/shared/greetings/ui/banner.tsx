import { FC } from "react";
import "./styles.css";
import { useGreetings } from "../api/store";
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Box,
  Image,
  Stack,
  Heading,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const GreetingsBanner: FC = () => {
  const { isOpen, setGreetingsClosed } = useGreetings();

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={() => setGreetingsClosed()}
    >
      <DrawerOverlay onClick={setGreetingsClosed} />
      <DrawerContent w={"50%"} maxW={"3xl"} pt={12}>
        <DrawerCloseButton onClick={setGreetingsClosed} />
        <DrawerHeader>
          <Heading as={"h2"} fontSize={28}>
            Уважаемые гости Строительного форума 2023
          </Heading>
        </DrawerHeader>

        <DrawerBody maxH={"700px"} overflowY={"hidden"} h={"full"}>
          <Grid gridTemplateColumns={"1fr"}>
            <GridItem h={"full"}>
              <Stack
                direction={"column"}
                gap={7}
                justifyContent={"space-between"}
                h={"full"}
              >
                <Stack direction={"row"}>
                  <Image src="/boss.png" h={"24"} w={"24"} borderRadius={"6"} />
                  <Box>
                    <Heading fontWeight={"medium"} fontSize={26}>
                      В.Т. Ховалыг
                    </Heading>
                    <Heading
                      fontWeight={"semibold"}
                      fontSize={22}
                      color={"blue.500"}
                    >
                      <Link to={"https://rtyva.ru"}>Председатель Главы Республики Тыва</Link>
                    </Heading>
                  </Box>
                </Stack>

                <Text fontSize={18}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse.
                </Text>

                <Text fontSize={18}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse.
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </DrawerBody>

        <DrawerFooter
          bgColor={"#0A0C4A"}
          color={"white"}
          justifyContent={"start"}
          position={"absolute"}
          bottom={0}
          w={"full"}
        >
          <Stack direction={"column"} gap={4}>
            <Heading fontSize={20}>
              Министерство строительства Республики Тыва
            </Heading>

            <Text>телефон: +7 (39422) 2-45-45</Text>
            <Text>email: someemail@mail.ru</Text>

            <Heading fontSize={16}>Все права защищены</Heading>
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export { GreetingsBanner };
