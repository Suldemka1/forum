import { FC } from "react"
import { GeoJSON } from "react-leaflet"

const Boundary: FC<any> = (item) => {
  return <GeoJSON data={item} />
}

export { Boundary }