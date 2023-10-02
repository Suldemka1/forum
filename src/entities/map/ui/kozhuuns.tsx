import { LeafletEventHandlerFnMap, LeafletMouseEvent } from "leaflet";
import { FC } from "react";
import { GeoJSON, Marker } from "react-leaflet";
import { useKozhuun } from "../api/useKozhuun";
import { useOksFilter, useOksFilterOpenState } from "../../oks/api/useOksFilter";
import { useOksData } from "../../oks/api/useOksData";
import { useOksModal } from "../../oks/api";
import { constructionIcon, repairIcon } from "../../../app/constants/marker";


const Kozhuuns: FC<
  Pick<
    GeoJSON.FeatureCollection<GeoJSON.Polygon, GeoJSON.GeoJsonProperties>,
    "features"
  >
> = ({ features }) => {
  const { id, setKozhuun } = useKozhuun((state) => state);
  const { setQueryParams, removeAllQueryParams, setSelectedValueOnFilter } = useOksFilter();
  const { setData, data } = useOksData();
  const { setModalData, setIsModalOpen } = useOksModal()

  const eventHandlers: LeafletEventHandlerFnMap = {
    click: async function (e: LeafletMouseEvent) {
      const { description: kozhuun, id: kozhuunId } =
        e.propagatedFrom.feature.geometry.properties;

      if (e.propagatedFrom.feature.geometry.properties.id != id) {
        setKozhuun(Number(kozhuunId));
        removeAllQueryParams();
        setQueryParams("region", kozhuun);
        setSelectedValueOnFilter("region", kozhuun)
        await setData();
      }
    },
  };

  return (
    <>
      {features?.map(function (
        item: GeoJSON.Feature<GeoJSON.Polygon, any>,
        index
      ) {
        if (Object(item.properties).hasOwnProperty("description"))
          return (
            <GeoJSON
              key={index}
              data={item.geometry as GeoJSON.Polygon}
              onEachFeature={(feature) => {
                feature.properties = { ...item.properties };
                feature.properties.id = item.id;
              }}
              style={{
                weight: 2,
                color: "#FFFFFF",
                fillColor: "#040436",
                className: "shadow",
                fillOpacity: 1,
              }}

              eventHandlers={eventHandlers}
            />
          );
      })}
      {data?.map((element: any) => {
        if (Object(element?.location).hasOwnProperty("coordinates")) {
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
        }
      })}
    </>
  );
};

export { Kozhuuns };
