import React from 'react'
import './navbar.css'
import '../CartWidget/CartWidget'
import { CartWidget } from '../CartWidget/CartWidget'
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
               <CartWidget />
            </div>
        </nav>
    )
}

export { NavBar }