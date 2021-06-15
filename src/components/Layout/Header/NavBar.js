import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart, faSignInAlt} from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {

    // Creamos nuestro nav para usarlo en el Layout. Por ahora solo tiene un menu de navegacion,
    // pero podriamos crear tambien un banner con alguna imagen o presentacion, por ejemplo.

    return(
        <nav className="navbar stroke">
            <h2>COMPUCOMPS</h2>
            <div className="carrito">
            <ul className="navbar-container">
                <li><a>GIGABYTE</a></li>
                <li><a>MSI</a></li>
                <li><a>SAPPHIRE</a></li>
                <li><a>NVIDIA</a></li>               
            </ul>
                <div className="iconos">
                    <FontAwesomeIcon icon={faShoppingCart} className="icon-font"/>
                    <FontAwesomeIcon icon={faSignInAlt} className="icon-font"/>
                    {/* <p>Log In</p>
                    <p>Carrito</p>
                    <p>Registro</p> */}
               </div>
            </div>
        </nav>
    )
}

export { NavBar }