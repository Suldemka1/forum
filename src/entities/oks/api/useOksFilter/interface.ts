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

  readonly filters: Array<IFilterGroup>;
  addFilterGroup: (filter_name: string, values: Set<string>) => void;
  addValueToFilterGroup: (filter_name: string, value: string) => void;
  setSelectedValueOnFilter: (
    filter_name: string,
    selected_value: string
  ) => void;

  setQueryParams: (prop_name: string, name: string) => void;
  removeAllQueryParams: () => void;
  removeQueryParamByName: (prop_name: string) => void;
}

export interface IUseOksFilterOpenState {
  isOpen: boolean;
  setIsOpen: (status: boolean) => void;
}

export interface IOksFilterComponent {}
