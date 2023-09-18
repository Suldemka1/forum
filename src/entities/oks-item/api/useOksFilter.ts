import { create } from "zustand";
import { IUseOksFilter } from "./interface";

const useOksFilter = create<IUseOksFilter>()((set, get) => ({
  filters: [],
  filter: "",
  setFilter: (prop_name, name) => {
    let newFilterString = "";
    if (
      get().filters.filter((item) => item.prop_name === prop_name).length > 0
    ) {
      set({
        filters: [
          ...get().filters.filter((item) => item.prop_name != prop_name),
          { prop_name, name },
        ],
      });
    } else {
      set({
        filters: [
          ...get().filters.filter((item) => item.prop_name),
          { prop_name, name },
        ],
      });
    }

    get().filters.forEach((item) => {
      newFilterString =
        newFilterString + `filter[${item.prop_name}][_eq]=${item.name}&`;
    });

    set({
      filter: newFilterString,
    });
  },
  setFilterToNull: () =>
    set({
      filters: [],
    }),
  removeFilter: (prop_name) => {
    let newFilterString = "";
    const arr = get().filters.filter((item) => item.prop_name != prop_name)
    set({ filters: [...arr] })
    get().filters.forEach((item) => {
      newFilterString =
        newFilterString + `filter[${item.prop_name}][_eq]=${item.name}&`;
    });
    set({
      filter: newFilterString,
    });
    console.log(get().filters)
  }
}));

export { useOksFilter };
