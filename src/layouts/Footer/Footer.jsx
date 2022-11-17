import React from 'react'
import "./Footer.scss"
import Logo from '../../assets/logo.png'
import socials from '../../assets/Footer/socials.png'
import {  Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
      <div className="container d-flex justify-content-between">
        <div className="column">
        <img src={Logo} alt="" />
        <Link to="Gagnez du temps,">Gagnez du temps,</Link>
        <Link to="faites ce que vous aimez !">faites ce que vous aimez !</Link>
        <Link to="social"><img src={socials} alt="" /></Link>
        </div>
        <div className="column">
          <h5>Fonctionnalités</h5>
          <Link to="Suivi et analyse de l'activité">Suivi et analyse de l'activité</Link>
          <Link to="Devis & facturation">Devis & facturation</Link>
          <Link to="Gestion des projets et clients">Gestion des projets et clients</Link>
        </div>
        <div className="column">
          <h5>À propos</h5>
          <Link to="Tarifs">Tarifs</Link>
          <Link to="Centre d'aide">Centre d'aide</Link>
          <Link to="CGV">CGV</Link>
          <Link to="Politique de confidentialité">Politique de confidentialité</Link>
        </div>
        <div className="column">
          <h5>Ressources</h5>
          <Link to="Deals">Deals</Link>
          <Link to="Outils">Outils</Link>
          <Link to="Blog">Blog</Link>
          <Link to="Simulateur TJM">Simulateur TJM</Link>
        </div>  
      </div>
    </footer>
  )
}

export default Footer