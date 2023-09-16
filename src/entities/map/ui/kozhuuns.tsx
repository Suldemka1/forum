import { LeafletEventHandlerFnMap, LeafletMouseEvent } from "leaflet";
import { FC, useMemo } from "react";
import { GeoJSON, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet"
import { useKozhuun } from "../api/useKozhuun";
import { useOksPanel } from "../../oks-item/api/useOksPanel";

const Kozhuuns: FC<Pick<GeoJSON.FeatureCollection<GeoJSON.Polygon, GeoJSON.GeoJsonProperties>, "features">> = ({ features }) => {
  const map = useMap()
  const { data, getKozhuunData, setKozhuunDataToNull } = useKozhuun((state) => state)
  //@ts-ignore
  const { setIsOpen } = useOksPanel()

  const eventHandlers: LeafletEventHandlerFnMap = useMemo(() => ({
    click: async function (e: LeafletMouseEvent) {
      const geo = L.geoJson(e.propagatedFrom.feature)
      await getKozhuunData(e.propagatedFrom.feature.geometry.properties.description)
      map.fitBounds(geo.getBounds())
    }
  }), [])

  return (
    <>
      {
        features?.map(function (item: GeoJSON.Feature<GeoJSON.Polygon, any>, index) {
          if (Object(item.properties).hasOwnProperty("description"))
            return (
              <GeoJSON key={index} data={item.geometry as GeoJSON.Polygon}
                onEachFeature={(feature, layer) => {
                  feature.properties = { ...item.properties }
                }}
                eventHandlers={eventHandlers}
              >
                <Popup>{data}</Popup>
              </GeoJSON>
            )
        })
      }
      {
        data?.map((element: any) => {
          return (
            <Marker key={element?.id} position={[element?.location?.coordinates[1], element?.location?.coordinates[0]]} eventHandlers={{
              click: () => {
                setIsOpen(true)
              }
            }}></Marker>

          )
        })
      }
    </>
  )
}

export { Kozhuuns }