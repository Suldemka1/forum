import { LeafletEventHandlerFnMap, LeafletMouseEvent } from "leaflet";
import { FC } from "react";
import { GeoJSON, Marker, useMap } from "react-leaflet";
import L from "leaflet"
import { useKozhuun } from "../api/useKozhuun";
import { useOksPanel } from "../../oks-item/api/useOksPanel";
import { useOksFilter } from "../../oks-item/api/useOksFilter";
import { useOksData } from "../../oks-item/api/useOksData";

const Kozhuuns: FC<Pick<GeoJSON.FeatureCollection<GeoJSON.Polygon, GeoJSON.GeoJsonProperties>, "features">> = ({ features }) => {
  const map = useMap()
  const { id, setKozhuun } = useKozhuun((state) => state)
  const { setFilter, setFilterToNull } = useOksFilter()
  const { data, setData } = useOksData()

  const { setIsOpen } = useOksPanel()

  const eventHandlers: LeafletEventHandlerFnMap = ({
    click: async function (e: LeafletMouseEvent) {
      const { feature } = e.propagatedFrom
      const { description: kozhuun, id: kozhuunId } = e.propagatedFrom.feature.geometry.properties

      if (e.propagatedFrom.feature.geometry.properties.id != id) {
        setKozhuun(Number(kozhuunId))
        setFilterToNull()
        setFilter("region", kozhuun)
        setData()
        console.log(data)
      }

      map.fitBounds(L.geoJson(feature).getBounds())
    }
  })

  return (
    <>
      {
        features?.map(function (item: GeoJSON.Feature<GeoJSON.Polygon, any>, index) {
          if (Object(item.properties).hasOwnProperty("description"))
            return (
              <GeoJSON key={index} data={item.geometry as GeoJSON.Polygon}
                onEachFeature={(feature, layer) => {
                  feature.properties = { ...item.properties }
                  feature.properties.id = item.id
                }}
                eventHandlers={eventHandlers}
              />
            )
        })
      }
      {
        data?.map((element: any) => {
          return (
            <Marker
              key={element?.id}
              position={[element?.
                location?.coordinates[1],
              element?.location?.coordinates[0]]}
              eventHandlers={{
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