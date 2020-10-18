import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


import mapMarkerImg from '../images/mapmarker.png'

import '../styles/pages/academys-map.css'
import mapIcon from '../util/mapIcon'
import api from '../services/api'

interface Academy {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function AcademysMap(){
    const [academys, setAcademys] = useState<Academy[]>([])

    useEffect(() => {
        api.get('academys').then(response => {
            setAcademys(response.data)
        })
    }, [])

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

                {academys.map(academy => {
                    return (
                        <Marker
                            key={academy.id}
                            icon={mapIcon}
                            position={[academy.latitude, academy.longitude]}
                            >
                                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                    {academy.name}
                                    <Link to={`/academys/${academy.id}`}>
                                        <FiArrowRight size={20} color="#FFF"/>
                                    </Link>
                            </Popup>
                        </Marker>
                    )
                })}
            </Map>            

            <Link to="/academys/create" className="create-academy">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </div>
    )
}

export default AcademysMap