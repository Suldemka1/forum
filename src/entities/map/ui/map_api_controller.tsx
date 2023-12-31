import { FC, useEffect } from "react"
import { useMap, useMapEvents } from "react-leaflet"
import { useMapZoomControl } from "@/shared"
import { useOksFilter } from "@/features"
import L from "leaflet"
import kozhuuns from "@/assets/polygons.json"

const MapApiController: FC = () => {
  const map = useMap()
  const { zoom, setZoom } = useMapZoomControl()
  const { filters } = useOksFilter()
  useMapEvents({
    zoom: () => {
      setZoom(map.getZoom())
    },
    click: () => {

    }
  })

  useEffect(() => {
    const kozhuun: GeoJSON.Feature<GeoJSON.Polygon, GeoJSON.GeoJsonProperties> | undefined = (kozhuuns as GeoJSON.FeatureCollection<GeoJSON.Polygon, GeoJSON.GeoJsonProperties>)
      .features.find((kozhuun) => {
        if (kozhuun.properties && kozhuun.properties.description) {
          return kozhuun.properties.description === filters[0]?.selectedValue
        }
      })
    if (kozhuun) {
      map.fitBounds(L.geoJson(kozhuun.geometry).getBounds())
    }
    else {
      
      map.flyTo([51.8, 94.15])
      map.setView([51.8, 94.15])
      map.setZoom(7)
    }
  }, [filters])

  useEffect(() => {
    map.setZoom(zoom)
  }, [zoom])

  return null
}

export { MapApiController }