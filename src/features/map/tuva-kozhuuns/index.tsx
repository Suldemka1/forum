import { LeafletEventHandlerFnMap, LeafletMouseEvent } from "leaflet";
import { FC, useId } from "react";
import { GeoJSON, useMap } from "react-leaflet";
import { useKozhuun } from "@/entities/map/api/useKozhuun";
import { useOksFilter } from "@/features";
import { useOksData } from "@/entities";
import L from "leaflet"
import kozhuuns from "@/assets/polygons.json"

const TuvanKozhuuns: FC = () => {
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
      {(kozhuuns as GeoJSON.FeatureCollection).features?.map((
        kozhuun,
        index: number
      ) => {
        if (Object(kozhuun.properties).hasOwnProperty("description"))
          return (
            <GeoJSON
              key={`${generatedId}__${index}`}
              data={kozhuun.geometry as GeoJSON.Polygon}
              onEachFeature={(feature) => {
                feature.properties = { ...kozhuun.properties };
                feature.properties.id = kozhuun.id;
              }}
              style={{
                weight: 2,
                color: "#fff",
                fillColor: "#060029",
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

export { TuvanKozhuuns };