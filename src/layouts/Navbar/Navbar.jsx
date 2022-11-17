import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Btn from '../../components/btn/Btn'
import "./Navbar.scss"


const Navbar = () => {
  return (
    <nav>
        <div className="container d-flex justify-content-between align-items-center">
            <Link to="/"><img src={Logo} alt="" /></Link>
            <div className="Navlinks">
                <NavLink to="/Fonctionnalit">Fonctionnalités</NavLink>
                <NavLink to="/tarifs">Tarifs</NavLink>
                <NavLink to="/App_iOS">App iOS</NavLink>
                <NavLink to="/Me_connecter">Me connecter</NavLink>
                <Btn sctyle="purple" text="S'inscrire"/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar