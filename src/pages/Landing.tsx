import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import '../styles/pages/landing.css'
import logoImg from '../images/logo.png'

function Landing() {
    return (
<div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="logo"/>

        <main>
          <h1>Encontre uma atividade física para você</h1>
          <p>Conheça os lugares para você começar :)</p>
        </main>

        <div className="location">
          <strong>Palmas</strong>
          <span>Tocantins</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
        </Link>
      </div>
    </div>
    )
}

export default Landing