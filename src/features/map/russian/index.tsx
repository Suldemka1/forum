import { FC, useId } from "react";
import { GeoJSON } from "react-leaflet";
//@ts-ignore
const water = await import(`@/assets/${admin_level}.json`)
// import water from '@/assets/admin_level_4.json'

const RussianDistructs: FC = () => {
  const id = useId()
  return <>
    {
      (water as GeoJSON.FeatureCollection).features.map((feature, index: number) => {
        return <GeoJSON key={String(id).concat("" + String(index))} data={feature.geometry} style={{
          weight: 1,
          fillColor: "#CC6600",
          color: "#CC6600",
          className: "shadow-blue"
        }} ></GeoJSON>
      })
    }</>
}

export { RussianDistructs }