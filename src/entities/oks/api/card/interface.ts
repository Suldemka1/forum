import { BoxProps } from "@chakra-ui/react";
import { IOksObject } from "../interface";

export interface IOksCardComponent
  extends Pick<IOksObject, "name" | "customer">,
    BoxProps {}
