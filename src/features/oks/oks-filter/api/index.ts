import { create } from "zustand";
import { IUseOksFilter, IUseOksFilterOpenState } from "./interface";
import { immer } from "zustand/middleware/immer";

const useOksFilter = create(
  immer<IUseOksFilter>((set, get) => ({
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
      const index = get().filters.findIndex(
        (item) => item.filter_name === filter_name
      );

      if (index != undefined) {
        set((state) => {
          state.filters[index].selectedValue = selected_value;
        });
      }
    },

    setQueryParams: (prop_name, name) => {
      let new_query_string = "";
      if (
        get().query_params.filter((item) => item.prop_name === prop_name)
          .length > 0
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
    removeAllQueryParams: () => {
      const newArr = get().filters.map((item) => {
        return {
          filter_name: item.filter_name,
          selectedValue: "Не выбрано",
          values: item.values,
        };
      });

      set({
        query_params: [],
        filters: newArr,
      });
    },
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
  }))
);

const useOksFilterOpenState = create<IUseOksFilterOpenState>()((set, get) => ({
  isOpen: false,
  setIsOpen: (status: boolean) => {
    if (get().isOpen != status) {
      set({ isOpen: status });
    }
  },
}));

export { useOksFilter, useOksFilterOpenState };
