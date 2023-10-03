import { IDirectusImage } from "../../directus";

export interface IOksObject {
  id?: string;
  type: string;
  name: string;
  quantity: number;
  project_name: string;
  location?: GeoJSON.Point;

  region: string;
  locality: string;
  street: string;
  house: string;

  customer: string;
  developer: string;

  images?: Array<IDirectusImage>;

  start: string;
  end: string;
}
