import { create } from "zustand";
import { IUseMapZoomControl } from "./interface";

const useMapZoomControl = create<IUseMapZoomControl>()((set) => ({
  zoom: 7,
  minZoom: 6,
  maxZoom: 15,
  setZoom(zoom) {
    set({ zoom });
  },
}));

export { useMapZoomControl };
