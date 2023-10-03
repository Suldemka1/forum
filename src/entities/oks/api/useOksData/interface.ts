import { IOksObject } from "../interface";

export interface IUseOksData {
  data: Array<IOksObject>;
  setData: () => Promise<void>;
}
