import { create } from "zustand";
import { IUseGreetings } from "./interface";

const useGreetings = create<IUseGreetings>()((set) => ({
  isOpen: false,
  setGreetingsOpen: () => set({
    isOpen: true
  }),
  setGreetingsClosed: () => set({
    isOpen: false
  })
}))

export { useGreetings }