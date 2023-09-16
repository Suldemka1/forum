export interface IUseKozhuun {
  id: number;
  data: any;
  setKozhuun: (id: number) => void;
  setKozhuunDataToNull: () => void;
  getKozhuunData: (region?: string | undefined) => Promise<void>;
}
