import { FC, useEffect, useId } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import polygons from "../../../assets/polygons.json";
import water from "../../../assets/admin_level_4.json"
import { Kozhuuns } from "./kozhuuns";
// import L from "leaflet";
import { useOksData } from "../../oks/api/useOksData";
import { useOksFilter } from "../../oks/api/useOksFilter";

// const createClusterCustomIcon = function (cluster: any) {
//   return L.divIcon({
//     html: `<span>${cluster.getChildCount()}</span>`,
//     className: "custom-marker-cluster",
//     iconSize: L.point(33, 33, true),
//   });
// };

const Map: FC = () => {
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
      // dragging={false}
    >
      {
        // @ts-ignore
        JSON.parse(JSON.stringify(water.features as GeoJSON.FeatureCollection)).map((item: GeoJSON.Feature<GeoJSON.Polygon, any>, index) => {
          return <GeoJSON key={String(id).concat("" + String(index))} data={item.geometry} style={{
            weight: 1,
            fillColor: "#CC6600",
            color: "#CC6600",
            className: "shadow-blue"
          }} />
        })
      }
      {/* <MarkerClusterGroup
        iconCreateFunction={createClusterCustomIcon}
        showCoverageOnHover={true}
        spiderfyDistanceMultiplier={1}
        maxClusterRadius={40}
        spiderfyOnMaxZoom={false}
        zoomToBoundsOnClick={false}

        polygonOptions={{
          fillColor: '#ffffff',
          color: '#f00800',
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        }}
      > */}
        <Kozhuuns features={JSON.parse(JSON.stringify(polygons.features))} />

      {/* </MarkerClusterGroup> */}

      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        opacity={0}
        
      /> */}
    </MapContainer >
  );
};

export { Map };
