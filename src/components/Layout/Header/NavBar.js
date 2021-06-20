import React from 'react'
import './navbar.css'
import '../CartWidget/CartWidget'
import { CartWidget } from '../CartWidget/CartWidget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
    let mainMenu = document.querySelector('.carrito');
    let abrirMenu = document.querySelector('.openMenu');
    let closeMenu = document.querySelector('.closeMenu');

    const mostrar = () =>{
        // mainMenu.style.display = 'flex'
        // mainMenu.style.top = '0'
        mainMenu.className = 'carritoAbierto';
    }
    const cerrar = () =>{
        mainMenu.className = 'carrito'
    }
    // Creamos nuestro nav para usarlo en el Layout. Por ahora solo tiene un menu de navegacion,
    // pero podriamos crear tambien un banner con alguna imagen o presentacion, por ejemplo.

    return(
        <nav className="navbar stroke">
            <h2>COMPUCOMPS</h2>
            <div className='openMenu' onClick={mostrar}><FontAwesomeIcon icon={faBars} className="fa fa-bars"/></div>
            <div className="carrito">
                <ul className="navbar-container">
                    <li><a>GIGABYTE</a></li>
                    <li><a>MSI</a></li>
                    <li><a>SAPPHIRE</a></li>
                    <li><a>NVIDIA</a></li>               
                </ul>
               <CartWidget />
               <div className='closeMenu' onClick={cerrar}><FontAwesomeIcon icon={faTimes} className="fa fa-times"/></div>
            </div>
        </nav>
    )
}

export { NavBar }