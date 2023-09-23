import repair from "/icons/repair-tools.png"
import construction from "/icons/construction.png"
import L from "leaflet"

const constructionIcon = new L.Icon({
  iconUrl: construction,
  iconSize: new L.Point(40, 47),
})

const repairIcon = new L.Icon({
  iconUrl: repair,
  iconSize: new L.Point(40, 47)
})

export { constructionIcon, repairIcon }