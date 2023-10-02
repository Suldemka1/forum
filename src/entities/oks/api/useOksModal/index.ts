import { create } from "zustand";
import { IUseOksModal } from "./interface";

const useOksModal = create<IUseOksModal>()((set) => ({
  isModalOpen: false,
  setIsModalOpen(status) {
    set({ isModalOpen: status });
  },

  data: undefined,
  setModalData(data) {
    if (data != undefined) {
      set({ data: data });
    }
  },
}));

export { useOksModal };
