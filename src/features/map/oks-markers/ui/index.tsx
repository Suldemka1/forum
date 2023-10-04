import { FC } from "react";
import { useOksModal } from "@/features";
import { IOksObject, useOksData } from "@/entities";
import { Marker } from "react-leaflet";
import { constructionIcon, createClusterCustomIcon, repairIcon } from "@/app/constants/marker";
import MarkerClusterGroup from "react-leaflet-cluster"

const OksMapMarkers: FC = () => {
  const { setModalData, setIsModalOpen } = useOksModal()
  const { data } = useOksData()

  return (
    <MarkerClusterGroup
      iconCreateFunction={createClusterCustomIcon}
      showCoverageOnHover={true}
      spiderfyDistanceMultiplier={1}
      maxClusterRadius={40}
      spiderfyOnMaxZoom={false}
      // zoomToBoundsOnClick={false}

      polygonOptions={{
        fillColor: '#ffffff',
        color: '#f00800',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
      }}
    >
      {
        data?.map((element: IOksObject) => {
          if (element && element.location)
            return (
              <Marker
                key={element?.id}
                icon={
                  element?.type === "Строительство"
                    ? constructionIcon
                    : repairIcon
                }
                position={[
                  element?.location?.coordinates[1],
                  element?.location?.coordinates[0],
                ]}
                eventHandlers={{
                  click: () => {
                    setModalData(element);
                    setIsModalOpen(true)
                  },
                }}
              ></Marker>
            );
        })
      }
    </MarkerClusterGroup>
  )
}

export { OksMapMarkers }