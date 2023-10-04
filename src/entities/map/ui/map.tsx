import { FC, useEffect } from "react";
import { MapContainer } from "react-leaflet";
import { RussianDistructs, TuvanKozhuuns } from "@/features";
import { useOksData } from "../../oks/api/useOksData";
import { useOksFilter, OksMapMarkers } from "@/features";
import { useMapZoomControl } from "@/shared";
import { MapApiController } from "./map_api_controller";

const Map: FC = () => {
  const { zoom, minZoom, maxZoom } = useMapZoomControl()

  const { setData } = useOksData()
  const { query_params } = useOksFilter()

  useEffect(() => {
    setData()
  }, [query_params])

  return (
    <MapContainer
      className="map"
      center={[51.8, 94.15]}
      maxBounds={[
        [55, 100],
        [48, 87],
      ]}
      zoom={zoom}
      maxZoom={maxZoom}
      minZoom={minZoom}
      scrollWheelZoom={true}
      doubleClickZoom={false}
      attributionControl={false}
      zoomControl={false}

    >
      <RussianDistructs />


      <TuvanKozhuuns />
      <OksMapMarkers />

      <MapApiController />
    </MapContainer >
  );
};

export { Map };
