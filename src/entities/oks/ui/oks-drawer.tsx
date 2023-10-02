import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Stack,
} from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { OksFilter } from "./oks-filter";
import { OksList } from ".";
import { useOksData } from "../api/useOksData";
import { useOksFilterOpenState } from "../api";

const OksDrawer: FC = () => {
  const { isOpen, setIsOpen } = useOksFilterOpenState();
  const { setData } = useOksData();

  useEffect(() => {
    setData();
  }, []);

  return (
    <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} >
      <DrawerOverlay />
      <DrawerContent maxW={"sm"} bg={"transparent"}>
        <DrawerCloseButton onClick={() => setIsOpen(false)} />
        <Stack
          direction={"row"}
          overflowY={"scroll"}
          className="overflow__hidden"
        >
          <DrawerBody
            w={"md"}
            h={"auto"}
            overflowX={"hidden"}
            flex={1}
            display={"flex"}
            flexDirection={"column"}
            gap={4}
          >
            <OksFilter />
            <OksList data_variant="empty" />
          </DrawerBody>
        </Stack>
      </DrawerContent>
    </Drawer>
  );
};

export { OksDrawer };
