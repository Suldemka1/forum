import { create } from "zustand";
import { IUseKozhuun } from "./interface";

const useKozhuun = create<IUseKozhuun>()((set) => ({
  id: 0,
  data: [],
  setKozhuun: (id) => set((state) => ({ id: id })),
  setKozhuunDataToNull: () => set({ data: [] }),
  getKozhuunData: async (region?) => {
    let data;
    if (region != undefined) {
      data = await fetch(
        `https://gisoks.ru/cms/items/projects?filter[region][_eq]=${region}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
          }
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => res.data)
        .catch((e) => {
          console.log(e);
        });
    } else {
      data = await fetch(
        `https://gisoks.ru/cms/items/projects?filter[status][_eq]=published`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
          }
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => res.data)
        .catch((e) => {
          console.log(e);
        });
    }

    set({
      data: await data,
    });
  },
}));

export { useKozhuun };
