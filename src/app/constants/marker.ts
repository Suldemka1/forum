import repair from "/const_icons/bricks_2.svg";
import construction from "/const_icons/bricks_2.svg";
import L from "leaflet";

const constructionIcon = new L.Icon({
  iconUrl: construction,
  iconSize: new L.Point(40, 47),
  className: "marker-icon",
});

const repairIcon = new L.Icon({
  iconUrl: repair,
  iconSize: new L.Point(40, 47),
});

const createClusterCustomIcon = function (cluster: any) {
  return L.divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: L.point(33, 33, true),
  });
};

export { constructionIcon, repairIcon, createClusterCustomIcon };
