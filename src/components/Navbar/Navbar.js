import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import './styles/Navbar-tablet.css';
import './styles/Navbar-desktop.css';

import logo1 from '../img/logo.png';
import logo2 from '../img/logo2.png';

class Navbar extends React.Component {

    handleBackgroundColor = () => {
        let nav = document.getElementById("container-navbar");
        let foot = document.getElementById("footer");

        if(nav.classList[1] === "purple"){
            nav.classList.remove("purple");
            nav.classList.add("orange");
            foot.classList.remove("purple-footer");
            foot.classList.add("orange-footer");
        }else{
            nav.classList.remove("orange");
            nav.classList.add("purple");
            foot.classList.remove("orange-footer");
            foot.classList.add("purple-footer");
        }
    }

    render() {
        return(
            <div id="container-navbar" className="navbar-container purple">
                <picture className="logo1-box">
                    {/* <source media="(min-width: )" srcset=""/> */}
                    <img className="logo1" src={logo1} alt="Game logo"/>
                </picture>
                {/* <img className="logo1" src={logo1} alt="Logo del juego"/> */}
                <picture className="logo2-box">
                    <img onClick={this.handleBackgroundColor} className="logo2" src={logo2} alt="Game icon"/>
                </picture>
                {/* <img onClick={this.handleBackgroundColor} className="logo2" src={logo2} alt="Icono del juego"/> */}
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="Blog">Blog</Link></li>
                    <li><Link to="#">Contact</Link></li>
                </ul>
            </div>
        )        
    }    
}

export default Navbar;