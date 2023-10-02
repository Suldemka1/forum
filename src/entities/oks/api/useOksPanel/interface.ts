export interface IOksPanel {
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

export interface IUseOksPanel {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  setPanelData: (data: Pick<IUseOksPanel, "panel">) => void;
  panel: IOksPanel;
}
