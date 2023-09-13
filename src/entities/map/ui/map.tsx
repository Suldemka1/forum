import { FC } from "react";
import { MapContainer, TileLayer, GeoJSON, Tooltip } from "react-leaflet";
import polygons from "../../../polygons.json"


const Map: FC = () => {
  
  const data: GeoJSON.FeatureCollection<GeoJSON.Polygon, any> | any = polygons

  return (
    <MapContainer
      className="map"
      center={[51.8, 94.15]}
      maxBounds={[
        [53, 100],
        [49.4, 87],
      ]}
      zoom={7}
      maxZoom={20}
      minZoom={5}
      // zoomControl={false}
      scrollWheelZoom={true}
      doubleClickZoom={false}
      attributionControl={false}
    >

      {
        data.features.map((item : GeoJSON.Feature<GeoJSON.Polygon, any>) => {
          if (item.properties)
            return (
              <GeoJSON data={item.geometry as GeoJSON.Polygon}>
                <Tooltip>{item.properties.description}</Tooltip>
              </GeoJSON>
            )
        })
      }
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        opacity={1}
      />
    </MapContainer>
  );
};

export { Map };
