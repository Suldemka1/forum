import { create } from "zustand";
import { IUseFade } from "./interface";

const useFade = create<IUseFade>((set) => ({
  isOpen: false,
  setFadeOpen: () => set({
    isOpen: true
  }),
  setFadeClosed: () => set({
    isOpen: false
  })
}))

export { useFade }