import { Polygon } from "leaflet";

export interface IOksData { }

export interface IUseOksData {
  data: Array<IOksItem>;
  setData: () => Promise<void>;
}

export interface IOksItem {
  type: string;
  name: string;
  quantity: number;

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

export interface IOksPanel {
  type: string;
  name: string;
  quantity: number;
  region: string;
  locality: string;
  street: string;
  house: string;
  images: Array<string>;
  customer: string;
  developer: string;
  start: any;
  end: any;
}

export interface IUseOksPanel {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  setPanelData: (data: Pick<IUseOksPanel, "panel">) => void
  panel: IOksPanel;
}

export interface IFilterObject {
  prop_name: string;
  name: string;
}

export interface IUseOksFilter {
  filters: Array<IFilterObject>;
  filter: string;
  setFilter: (prop_name: string, name: string) => void;
  setFilterToNull: () => void;
  removeFilter: (prop_name: string) => void
}
