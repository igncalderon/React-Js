import React from 'react'
import './navbar.css'

const Header = () => {

    // Creamos nuestro nav para usarlo en el Layout. Por ahora solo tiene un menu de navegacion,
    // pero podriamos crear tambien un banner con alguna imagen o presentacion, por ejemplo.

    return(
        <nav className="navbar">
            <ul className="navbar-container">
                <li>Home</li>
                <li>Laptops</li>
                <li>Accesorios</li>
            </ul>
        </nav>
    )
}

export { Header }