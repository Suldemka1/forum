import { IOksObject } from "@/entities/oks/api/interface";

export interface IUseOksModal {
  isModalOpen: boolean;
  setIsModalOpen: (status: boolean) => void;

  data: IOksObject | undefined;
  setModalData: (data: IOksObject) => void;
}

export interface IOksModalComponent extends Pick<IUseOksModal, "data"> {
  isOpen: boolean;
  onClose: () => void;
}
