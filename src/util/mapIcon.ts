import Leaflet from 'leaflet'

import mapMarkerIcon from '../images/map-marker.png'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerIcon,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })

export default mapIcon