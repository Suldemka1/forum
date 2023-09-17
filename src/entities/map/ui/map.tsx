import { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import polygons from "../../../polygons.json"
import { Kozhuuns } from "./kozhuuns";

const Map: FC = () => {

  return (
    <MapContainer
      className="map"
      center={[51.8, 94.15]}
      // maxBounds={[
      //   [53, 100],
      //   [49.4, 87],
      // ]}
      zoom={7}
      maxZoom={20}
      minZoom={5}
      scrollWheelZoom={true}
      doubleClickZoom={false}
      attributionControl={false}
    >
      <Kozhuuns features={JSON.parse(JSON.stringify(polygons.features))} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        opacity={1}
      />
    </MapContainer>
  );
};

export { Map };
