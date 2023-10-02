import { BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface IBanner extends BoxProps {
  children: ReactNode;
  placement:
    | "top"
    | "top-left"
    | "top-right"
    | "bottom"
    | "bottom-left"
    | "bottom-right";
  zIndex: number;
}

export interface IBannerPosition {
  top: number | undefined;
  right: number | undefined;
  bottom: number | undefined;
  left: number | undefined;
}
