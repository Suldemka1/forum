import React, { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import polygons from "../../../polygons.json";
import { Kozhuuns } from "./kozhuuns";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";

const createClusterCustomIcon = function (cluster: any) {
  return L.divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: L.point(33, 33, true),
  });
};

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
      <MarkerClusterGroup
        // onClick={(e: React.MouseEvent) => console.log('onClick', e)}
        iconCreateFunction={createClusterCustomIcon}
        maxClusterRadius={200}
        spiderfyOnMaxZoom={true}
        polygonOptions={{
          fillColor: '#ffffff',
          color: '#f00800',
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        }}
        showCoverageOnHover={true}
      >
        <Kozhuuns features={JSON.parse(JSON.stringify(polygons.features))} />
      </MarkerClusterGroup>

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        opacity={1}
      />
    </MapContainer>
  );
};

export { Map };
