export interface IUseMapZoomControl {
  zoom: number;
  minZoom: number,
  maxZoom: number,
  setZoom: (zoom: number) => void;
}
