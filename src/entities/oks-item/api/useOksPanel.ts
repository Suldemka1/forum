import { create } from "zustand";
import { IUseOksPanel } from "./interface";

const useOksPanel = create<IUseOksPanel>()((set) => ({
  isOpen: true,
  setIsOpen: (isOpen: boolean) => set({ isOpen: isOpen }),
  setPanelData: (data: Pick<IUseOksPanel, "panel">) =>
    set({ panel: data.panel }),
  panel: {
    type: "Строительство",
    name: "Название проекта, обычно длинное, примерно столько",
    quantity: 2,
    region: "Тоджинский кожуун",
    locality: "Какое-то село",
    street: "Ленина",
    house: "14",
    images: ["/i.webp", "/boss.png", "/vite.svg", "/icons/location.png"],
    customer: "Министерство здравоохранения Республики Тыва",
    developer: "ООО 'Рога и Копыта'",
    start: "12.05.2021",
    end: "31.12.2023",
  },
}));

export { useOksPanel };
