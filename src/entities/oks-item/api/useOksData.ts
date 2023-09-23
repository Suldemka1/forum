import { create } from "zustand";
import { IUseOksData } from "./interface";
import { useOksFilter } from "./useOksFilter";

const useOksData = create<IUseOksData>()((set) => ({
  data: [],
  setData: async () => {
    const data = await fetch(
      `https://gisoks.ru/cms/items/projects?fields=*.*&${useOksFilter.getState().filter}filter[status]=published`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => res.data)
      .catch((e) => {
        console.log(e);
      });

    set({
      data: await data,
    });
  },
}));

export { useOksData };
