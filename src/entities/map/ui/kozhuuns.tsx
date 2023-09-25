import { LeafletEventHandlerFnMap, LeafletMouseEvent } from "leaflet";
import { FC } from "react";
import { GeoJSON, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import { useKozhuun } from "../api/useKozhuun";
import { useOksPanel } from "../../oks-item/api/useOksPanel";
import { useOksFilter } from "../../oks-item/api/useOksFilter";
import { useOksData } from "../../oks-item/api/useOksData";
import { constructionIcon, repairIcon } from "../../../app/constants/marker";

const Kozhuuns: FC<
  Pick<
    GeoJSON.FeatureCollection<GeoJSON.Polygon, GeoJSON.GeoJsonProperties>,
    "features"
  >
> = ({ features }) => {
  const map = useMap();
  const { id, setKozhuun } = useKozhuun((state) => state);
  const { setPanelData } = useOksPanel();
  const { setQueryParams, setSelectedValueOnFilter, removeAllQueryParams } = useOksFilter();
  const { data, setData } = useOksData();

  const { setIsOpen } = useOksPanel();

  const eventHandlers: LeafletEventHandlerFnMap = {
    click: async function (e: LeafletMouseEvent) {
      const { feature } = e.propagatedFrom;
      const { description: kozhuun, id: kozhuunId } =
        e.propagatedFrom.feature.geometry.properties;

      if (e.propagatedFrom.feature.geometry.properties.id != id) {
        setKozhuun(Number(kozhuunId));
        removeAllQueryParams();
        setQueryParams("region", kozhuun);
        setSelectedValueOnFilter("region", kozhuun)
        setData();
      }

      map.fitBounds(L.geoJson(feature).getBounds());
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
                color: "#000000",
                fillColor: "#e78912"
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
                  setIsOpen(true);
                  setPanelData({ panel: element });
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
