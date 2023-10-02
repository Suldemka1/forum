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

export interface IOksData {}

export interface IUseOksData {
  data: Array<IOksItem>;
  setData: () => Promise<void>;
}
