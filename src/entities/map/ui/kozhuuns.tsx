import { LeafletEventHandlerFnMap, LeafletMouseEvent } from "leaflet";
import { FC, useId } from "react";
import { GeoJSON, useMap } from "react-leaflet";
import { useKozhuun } from "../api/useKozhuun";
import { useOksFilter } from "@/features/oks-filter/api";
import { useOksData } from "../../oks/api/useOksData";
import L from "leaflet"

const Kozhuuns: FC<
  Pick<
    GeoJSON.FeatureCollection<GeoJSON.Polygon, GeoJSON.GeoJsonProperties>,
    "features"
  >
> = ({ features }) => {
  const map = useMap()
  const generatedId = useId()
  const { id, setKozhuun } = useKozhuun((state) => state);
  const { setQueryParams, removeAllQueryParams, setSelectedValueOnFilter } = useOksFilter();
  const { setData } = useOksData();

  const eventHandlers: LeafletEventHandlerFnMap = {
    click: async function (e: LeafletMouseEvent) {
      const { description: kozhuun, id: kozhuunId } =
        e.propagatedFrom.feature.geometry.properties;

      map.fitBounds(L.geoJson(e.propagatedFrom.feature).getBounds())
      removeAllQueryParams();
      setSelectedValueOnFilter("region", kozhuun)
      setQueryParams("region", kozhuun);

      if (e.propagatedFrom.feature.geometry.properties.id != id) {
        setKozhuun(Number(kozhuunId));
        
        await setData();
      }
    },
  };

  return (
    <>
      {features?.map(function (
        item: GeoJSON.Feature<GeoJSON.Polygon, GeoJSON.GeoJsonProperties>,
        index: number
      ) {
        if (Object(item.properties).hasOwnProperty("description"))
          return (
            <GeoJSON
              key={`${generatedId}__${index}`}
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
    </>
  );
};

export { Kozhuuns };
