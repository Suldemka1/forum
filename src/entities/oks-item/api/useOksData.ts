import { create } from "zustand";
import { IOksItem, IUseOksData } from "./interface";
import { useOksFilter } from "./useOksFilter";
import { GET_OPTIONS } from "../../../app/constants/http";
import { useOksPanel } from "./useOksPanel";

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
        const regions = new Set<string>([]);
        const customers = new Set<string>([]);
        const developers = new Set<string>([]);
        const programs = new Set<string>([]);

        res.data.forEach((item: IOksItem) => {
          regions.add(item.region);
          customers.add(item.customer);
          developers.add(item.developer);
          programs.add(item.project_name);
        });

        if (!useOksFilter.getState().isFiltersConstructed) {
          useOksFilter.getState().addFilterGroup("region", regions);
          useOksFilter.getState().addFilterGroup("customer", customers);
          useOksFilter.getState().addFilterGroup("project_name", programs);
          useOksFilter.getState().addFilterGroup("developer", developers);
          useOksFilter.getState().setFiltersConstructed(true);
        }
        if (res.data.length > 0) {
          useOksPanel.getState().setPanelData({ panel: res.data[0] });
        }

        return res.data;
      })
      .catch((e) => {
        console.log(e);
        return [];
      });

    set({
      data: await data,
    });
  },
}));

export { useOksData };
