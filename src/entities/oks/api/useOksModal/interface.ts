export interface IUseOksModal {
  isModalOpen: boolean;
  setIsModalOpen: (status: boolean) => void;

  data: IOksModal | undefined;
  setModalData: (data: IOksModal) => void;
}

export interface IOksModal {
  type: string;
  name: string;
  project_name: string;
  quantity: number;
  region: string;
  locality: string;
  street: string;
  house: string;
  images: Array<string>;
  customer: string;
  developer: string;
  start: any;
  end: any;
}

export interface IOksModalComponent extends Pick<IUseOksModal, "data"> {
  isOpen: boolean;
  onClose: () => void;
}
