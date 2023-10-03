import { FC, useEffect, useId, useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import polygons from "@/assets/polygons.json";
import water from "@/assets/admin_level_4.json"
import { Kozhuuns } from "./kozhuuns";
import { useOksData } from "../../oks/api/useOksData";
import { useOksFilter } from "@/features/oks-filter/api";
import { TDataStatus } from "@/features/oks-list/api/interface";
import { OksMapMarkers } from "@/features/oks-markers/ui";
import { useMapZoomControl } from "@/shared/map-zoom_control";
import { MapApiController } from "./map_api_controller";

const Map: FC = () => {
  const { zoom } = useMapZoomControl()
  const { data: oksData } = useOksData()
  // @ts-ignore
  const [dataVariant, setDataVariant] = useState<TDataStatus>("empty")

  useEffect(() => {
    if (oksData.length > 0) {
      setDataVariant("filled")
    }
    if (oksData.length === 0) {
      setDataVariant("empty")
    }
  }, [oksData])

  const { setData } = useOksData()
  const { query_params } = useOksFilter()
  const id = useId()

  useEffect(() => {
    setData()
  }, [query_params])

  return (
    <MapContainer
      className="map"
      center={[51.8, 94.15]}
      maxBounds={[
        [59, 100],
        [48, 87],
      ]}
      zoom={zoom}
      maxZoom={20}
      minZoom={5}
      scrollWheelZoom={true}
      doubleClickZoom={false}
      attributionControl={false}
      zoomControl={false}

    >
      {
        (water as GeoJSON.FeatureCollection).features.map((feature, index: number) => {
          return <GeoJSON key={String(id).concat("" + String(index))} data={feature.geometry} style={{
            weight: 1,
            fillColor: "#CC6600",
            color: "#CC6600",
            className: "shadow-blue"
          }} ></GeoJSON>
        })
      }

      <OksMapMarkers />

      <Kozhuuns features={JSON.parse(JSON.stringify(polygons.features))} />
      <MapApiController />
    </MapContainer >
  );
};

export { Map };
