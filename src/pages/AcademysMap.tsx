import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'

import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../images/mapmarker.png'
import mapMarkerIcon from '../images/map-marker.png'

import '../styles/pages/academys-map.css'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerIcon,
    iconSize: [58,68],
    iconAnchor:[29, 68],
    popupAnchor: [170, 0] 
})

function AcademysMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="academy"/>

                    <h2>Encontre uma academia no mapa</h2>
                    <p></p>
                </header>

                <footer>
                    <strong>Palmas</strong>
                    <span>Tocantins</span>
                </footer>
            </aside>

            <Map 
                center={[-10.3353032,-48.2976922]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                <Marker
                icon={mapIcon}
                position={[-10.3353032,-48.2976922]}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Casa do Felipe
                        <Link to="/academys/1">
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                   </Popup>
                </Marker>
            </Map>            

            <Link to="/academys/create" className="create-academy">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </div>
    )
}

export default AcademysMap