import React, { FC, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import polygons from "../../../assets/polygons.json";
import water from "../../../assets/admin_level_4.json"
import { Kozhuuns } from "./kozhuuns";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import { useOksData } from "../../oks-item/api/useOksData";
import { useOksFilter } from "../../oks-item/api/useOksFilter";

const createClusterCustomIcon = function (cluster: any) {
  return L.divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: L.point(33, 33, true),
  });
};

const Map: FC = () => {
  const { setData } = useOksData()
  const { query_params } = useOksFilter()

  useEffect(() => {
    setData()
  }, [query_params])

  return (
    <MapContainer
      className="map"
      center={[51.8, 94.15]}
      // maxBounds={[
      //   [59, 100],
      //   [47, 87],
      // ]}
      zoom={7}
      maxZoom={20}
      minZoom={5}
      scrollWheelZoom={true}
      doubleClickZoom={false}
      attributionControl={false}
    >
      {
        // @ts-ignore
        JSON.parse(JSON.stringify(water.features as GeoJSON.FeatureCollection)).map((item: GeoJSON.Feature<GeoJSON.Polygon, any>) => {
          return <GeoJSON data={item.geometry} style={{
            weight: 1,
            fillColor: "#CC6600",
            color: "#CC6600",
            className: "shadow-blue"
          }} />
        })
      }
      <MarkerClusterGroup
        // onClick={(e: React.MouseEvent) => console.log('onClick', e)}
        iconCreateFunction={createClusterCustomIcon}
        maxClusterRadius={40}
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

      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        opacity={0}
        
      /> */}
    </MapContainer>
  );
};

export { Map };
