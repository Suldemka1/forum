import { create } from "zustand";
import { IOksItem, IUseOksData } from "./interface";
import { useOksFilter } from "../useOksFilter";
import { GET_OPTIONS } from "../../../../app/constants/http";
import { FILTER_OPTIONS } from "../../../../app/constants/filter";

const useOksData = create<IUseOksData>()((set) => ({
  data: [],
  setData: async () => {
    const data = await fetch(
      `https://gisoks.ru/cms/items/projects?fields=*.*&${
        useOksFilter.getState().query
      }filter[status]=published`,
      GET_OPTIONS
    )
      .then((res) => res.json())
      .then((res: { data: Array<IOksItem> }) => {
        const filters: Array<{ name: string; values: Set<string> }> = [];

        FILTER_OPTIONS.forEach((item) => {
          filters.push({
            name: item.name,
            values: new Set<string>(["Не выбрано"]),
          });
        });

        res.data?.forEach((item: IOksItem) => {
          for (let i = 0; i < filters.length; i++) {
            const value = filters[i].name;

            filters[i]?.values.add(item[value as keyof IOksItem] as string);
          }
        });

        if (!useOksFilter.getState().isFiltersConstructed) {
          for (let i = 0; i < filters.length; i++) {
            console.log(filters[i].name)
            useOksFilter
              .getState()
              .addFilterGroup(filters[i].name, filters[i].values);
          }

          useOksFilter.getState().setFiltersConstructed(true);
        }

        return res.data;
      })
      .catch((e) => {
        console.log(e);
        return [];
      });

    set({
      data: data,
    });
  },
}));

export { useOksData };
