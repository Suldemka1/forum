import { Polygon } from "leaflet";

export interface IOksData {}

export interface IUseOksData {
  data: Array<IOksItem>;
  setData: () => Promise<void>;
}

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

export interface IOksPanel {
  type: string;
  name: string;
  project_name: string;
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
  setPanelData: (data: Pick<IUseOksPanel, "panel">) => void;
  panel: IOksPanel;
}

export interface IParamsObject {
  prop_name: string;
  name: string;
}

export interface IFilterGroup {
  filter_name: string;
  values: Set<string>;
  selectedValue: string | undefined;
}

export interface IUseOksFilter {
  query_params: Array<IParamsObject>;
  query: string;

  isFiltersConstructed: boolean;
  setFiltersConstructed: (state: boolean) => void;

  filters: Array<IFilterGroup>;
  addFilterGroup: (filter_name: string, values: Set<string>) => void;
  addValueToFilterGroup: (filter_name: string, value: string) => void;
  setSelectedValueOnFilter: (filter_name: string, selected_value: string) => void;

  setQueryParams: (prop_name: string, name: string) => void;
  removeAllQueryParams: () => void;
  removeQueryParamByName: (prop_name: string) => void;
}
