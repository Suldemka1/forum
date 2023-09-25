import { create } from "zustand";
import { IUseOksFilter } from "./interface";

const useOksFilter = create<IUseOksFilter>()((set, get) => ({
  query_params: [],
  query: "",

  isFiltersConstructed: false,
  setFiltersConstructed: (state) => set({ isFiltersConstructed: state }),

  filters: [],
  addFilterGroup: (filter_name, values) => {
    set({
      filters: [
        ...get().filters,
        {
          filter_name: filter_name,
          values: values,
          selectedValue: undefined,
        },
      ],
    });
  },
  addValueToFilterGroup: (filter_name, value) => {
    if (
      get().filters.find((item) => item.filter_name === filter_name) !=
      undefined
    ) {
      const newValue = {
        filter_name: filter_name,
        values: get()
          .filters.find((item) => item.filter_name === filter_name)!
          .values.add(value),
        selectedValue: get().filters.find(
          (item) => item.filter_name === filter_name
        )?.selectedValue,
      };

      set({
        filters: [
          ...get().filters.filter((item) => item.filter_name != filter_name),
          newValue,
        ],
      });
    }
  },
  setSelectedValueOnFilter: (filter_name, selected_value) => {
    const value = get().filters.find(
      (item) => item.filter_name === filter_name
    );
    if (value) {
      set({
        filters: [
          ...get().filters.filter((item) => item.filter_name != filter_name),
          {
            filter_name: value?.filter_name,
            values: value?.values,
            selectedValue: selected_value,
          },
        ],
      });
    }
  },

  setQueryParams: (prop_name, name) => {
    let new_query_string = "";
    if (
      get().query_params.filter((item) => item.prop_name === prop_name).length >
      0
    ) {
      set({
        query_params: [
          ...get().query_params.filter((item) => item.prop_name != prop_name),
          { prop_name, name },
        ],
      });
    } else {
      set({
        query_params: [
          ...get().query_params.filter((item) => item.prop_name),
          { prop_name, name },
        ],
      });
    }

    new_query_string = get().query_params.reduce<string>((acc, item) => {
      return acc + `filter[${item.prop_name}][_eq]=${item.name}&`;
    }, "");

    set({
      query: new_query_string,
    });
  },
  removeAllQueryParams: () =>
    set({
      query_params: [],
    }),
  removeQueryParamByName: (prop_name) => {
    let new_query_string = "";
    const arr = get().query_params.filter(
      (item) => item.prop_name != prop_name
    );
    set({ query_params: [...arr] });

    new_query_string = get().query_params.reduce<string>((acc, item) => {
      return acc + `filter[${item.prop_name}][_eq]=${item.name}&`;
    }, "");

    set({
      query: new_query_string,
    });
  },
}));

export { useOksFilter };
