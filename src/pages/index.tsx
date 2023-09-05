import { MapContainer, TileLayer, GeoJSON } from "react-leaflet"
import buildings from "../assets/data.json"

const Map = () => {
  
  const data: Array<unknown> = buildings?.features

  return (
    <>
      <MapContainer
        className="map"
        center={[51.8, 94.15]}
        maxBounds={[[54, 99], [49.4, 88]]}

        zoom={7}
        maxZoom={20}
        minZoom={5}
        zoomControl={false}
        scrollWheelZoom={true}
        doubleClickZoom={false}
        attributionControl={false}>
        {
          data.map((item: unknown) => <GeoJSON data={item} />)
        }
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          opacity={1}
        />

      </MapContainer>
    </>


  )
}

export default Map