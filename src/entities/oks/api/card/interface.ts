import { BoxProps } from "@chakra-ui/react";
import { Polygon } from "leaflet";

export interface IOksItem {
  type: string;
  name: string;
  quantity: number;
  project_name: string;
  location: Polygon;

  region: string;
  locality: string;
  street: string;
  house: string;

  customer: string;
  developer: string;

  images: Array<string>;

  start: Date;
  end: Date;
}

export interface IOksCardComponent
  extends Pick<IOksItem, "name" | "customer">,
    BoxProps {}
