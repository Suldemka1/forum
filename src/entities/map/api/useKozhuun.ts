import { create } from "zustand";
import { IUseKozhuun } from "./interface";

const useKozhuun = create<IUseKozhuun>()((set) => ({
  id: 0,
  data: [],
  setKozhuun: (id) => set({ id: id }),
}));

export { useKozhuun };
