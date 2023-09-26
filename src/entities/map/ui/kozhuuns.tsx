import { LeafletEventHandlerFnMap, LeafletMouseEvent } from "leaflet";
import { FC } from "react";
import { GeoJSON } from "react-leaflet";
import { useKozhuun } from "../api/useKozhuun";
import { useOksPanel } from "../../oks-item/api/useOksPanel";
import { useOksFilter } from "../../oks-item/api/useOksFilter";
import { useOksData } from "../../oks-item/api/useOksData";

const Kozhuuns: FC<
  Pick<
    GeoJSON.FeatureCollection<GeoJSON.Polygon, GeoJSON.GeoJsonProperties>,
    "features"
  >
> = ({ features }) => {
  const { id, setKozhuun } = useKozhuun((state) => state);
  const { setQueryParams, removeAllQueryParams } = useOksFilter();
  const { setData } = useOksData();

  const { setIsOpen } = useOksPanel();

  const eventHandlers: LeafletEventHandlerFnMap = {
    click: async function (e: LeafletMouseEvent) {
      const { description: kozhuun, id: kozhuunId } =
        e.propagatedFrom.feature.geometry.properties;

      if (e.propagatedFrom.feature.geometry.properties.id != id) {
        setKozhuun(Number(kozhuunId));
        removeAllQueryParams();
        setQueryParams("region", kozhuun);
        await setData();
        setIsOpen(true);
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
      {/* {data?.map((element: any) => {
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
                  setIsOpen(true);
                  setPanelData({ panel: element });
                },
              }}
            ></Marker>
          );
        }
      })} */}
    </>
  );
};

export { Kozhuuns };
