import { FC } from "react"
import { GeoJSON } from "react-leaflet"

const Boudary: FC<any> = (item) => {
  return <GeoJSON data={item} />
}

export { Boudary }