import { FC } from "react";
import { OksListEmpty } from "./list-empty";
import { OksListFilled } from "./list-filled";
import { TDataStatus, TOksListProps } from "../api/interface";

const DATA_VIEW: Record<TDataStatus, FC> = {
  empty: OksListEmpty,
  filled: OksListFilled
}

const OksList: FC<TOksListProps> = ({ data_variant }) => {
  const DataView = DATA_VIEW[data_variant]

  return <DataView />
};

export { OksList };
