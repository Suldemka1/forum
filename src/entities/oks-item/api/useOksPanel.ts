import { create } from "zustand";

const useOksPanel = create()((set) => ({
  isOpen: true,
  setIsOpen: (isOpen: boolean) => set({ isOpen: isOpen }),

  title: "Название проекта, обычно длинное, примерно столько",
  quantity: 2,
  region: "Тоджинский кожуун",
  locality: "Какое-то село",
  street: "Ленина",
  house: "14",
  images: [
    "https://gisoks.ru/cms/assets/d7cd7df1-e17b-493f-9d2b-0b2598620ff2.jpg",
    "https://gisoks.ru/cms/assets/d7cd7df1-e17b-493f-9d2b-0b2598620ff2.jpg",
    "https://gisoks.ru/cms/assets/d7cd7df1-e17b-493f-9d2b-0b2598620ff2.jpg",
    "https://gisoks.ru/cms/assets/d7cd7df1-e17b-493f-9d2b-0b2598620ff2.jpg",
    "https://gisoks.ru/cms/assets/d7cd7df1-e17b-493f-9d2b-0b2598620ff2.jpg",
    "https://gisoks.ru/cms/assets/d7cd7df1-e17b-493f-9d2b-0b2598620ff2.jpg",
    "https://gisoks.ru/cms/assets/d7cd7df1-e17b-493f-9d2b-0b2598620ff2.jpg",
    "https://gisoks.ru/cms/assets/d7cd7df1-e17b-493f-9d2b-0b2598620ff2.jpg",
    "https://gisoks.ru/cms/assets/d7cd7df1-e17b-493f-9d2b-0b2598620ff2.jpg",
    "https://gisoks.ru/cms/assets/d7cd7df1-e17b-493f-9d2b-0b2598620ff2.jpg",
    "https://gisoks.ru/cms/assets/d7cd7df1-e17b-493f-9d2b-0b2598620ff2.jpg",
    "https://gisoks.ru/cms/assets/d7cd7df1-e17b-493f-9d2b-0b2598620ff2.jpg",
    "https://gisoks.ru/cms/assets/d7cd7df1-e17b-493f-9d2b-0b2598620ff2.jpg",
    "https://gisoks.ru/cms/assets/d7cd7df1-e17b-493f-9d2b-0b2598620ff2.jpg",
    "https://gisoks.ru/cms/assets/d7cd7df1-e17b-493f-9d2b-0b2598620ff2.jpg",
    "https://gisoks.ru/cms/assets/d7cd7df1-e17b-493f-9d2b-0b2598620ff2.jpg",
    "https://gisoks.ru/cms/assets/d7cd7df1-e17b-493f-9d2b-0b2598620ff2.jpg",
    "https://gisoks.ru/cms/assets/d7cd7df1-e17b-493f-9d2b-0b2598620ff2.jpg",
  ],
  customer: "Министерство здравоохранения Республики Тыва",
  developer: "ООО 'Рога и Копыта'",
  start: "12.05.2021",
  end: "31.12.2023",
}));

export { useOksPanel };
