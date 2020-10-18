import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useParams } from 'react-router-dom'

import api from "../services/api";

import '../styles/pages/academy.css';
import Sidebar from "../components/Sidebar";
import mapIcon from "../util/mapIcon";

interface Academy {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: number;
    url: string;
  }>
}

interface AcademyParams {
  id: string;
}

export default function Academy() {
  const params = useParams<AcademyParams>()
  const [academy, setAcademy] = useState<Academy>()
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
      api.get(`academys/${params.id}`).then(response => {
          setAcademy(response.data)
      })
  }, [params.id])

  if(!academy) {
    return <p>Carregando ...</p>
  }

  return (
    <div id="page-academy">
      <Sidebar />

      <main>
        <div className="academy-details">
          <img src={academy.images[activeImageIndex].url} alt={academy.name} />

          <div className="images">
            {academy.images.map((image, index) => {
              return (
                <button 
                key={image.id} 
                className={ activeImageIndex === index ? 'active' : ''}
                type="button"
                onClick={() => {
                  setActiveImageIndex(index)
                }}
                >
                  <img src={image.url} alt={academy.name}/>
                </button>
              )
            })}
          </div>
          
          <div className="academy-details-content">
            <h1>{academy.name}</h1>
            <p>
              {academy.about}
            </p>

            <div className="map-container">
              <Map 
                center={[academy.latitude, academy.longitude]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker interactive={false} icon={mapIcon} position={[academy.latitude, academy.longitude]} />
              </Map>

              <footer>
                <a target="_blank" rel="noopener no referrer" href={`https://www.google.com/maps/dir/?api=1&destination=${academy.latitude},${academy.longitude}`}>Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{academy.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {academy.opening_hours}
              </div>
             { academy.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
             ) : (
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#FF669D" />
                  Não atendemos <br />
                  fim de semana
                </div>
             )}
            </div>

           {/* <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
             </button>*/}
          </div>
        </div>
      </main>
    </div>
  );
}