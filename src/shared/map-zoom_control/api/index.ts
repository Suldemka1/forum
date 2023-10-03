import { create } from "zustand";
import { IUseMapZoomControl } from "./interface";

const useMapZoomControl = create<IUseMapZoomControl>()((set) => ({
  zoom: 7,
  setZoom(zoom) {
    set({ zoom });
  },
}));

export { useMapZoomControl };
