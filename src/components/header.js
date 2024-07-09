import "../sass/main.css";
import logo from "../logo.svg";
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header id="header">
            <img src={logo} alt="logo" />
            <nav>
                <NavLink to="/"   className={({ isActive  }) => isActive ? "nav-item active" : "nav-item"} >Accueil</NavLink>
                
                <NavLink to="/a-propos" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>A propos</NavLink>
            </nav>
        </header>
    )
};

export default Header;
