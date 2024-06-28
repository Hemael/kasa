import "../sass/main.css";
import logoW from "../logoW.svg";
import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <img src={logoW} alt= "logo" className="footerImg"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
};



export default Footer;