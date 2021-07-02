import React from 'react'
import './navbar.css'
import '../CartWidget/CartWidget'
import { CartWidget } from '../CartWidget/CartWidget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import { NavLink, useParams } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {
    let mainMenu = document.querySelector('.carrito');

    const [info, setInfo] = useState('Esto es un estado')
    const [valor, setValor] = useState('')
    const { categoriaId } = useParams()
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
            <h2><NavLink className ='titulo-marca' to='/'>COMPUCOMPS</NavLink></h2>
            <div className='openMenu' onClick={mostrar}><FontAwesomeIcon icon={faBars} className="fa fa-bars"/></div>
            <div className="carrito">
                <ul className="navbar-container">
                    <li><NavLink activeClassName='categoria-activa' to='/category/gigabyte'>GIGABYTE</NavLink></li>
                    <li><NavLink activeClassName='categoria-activa' to='/category/msi'>MSI</NavLink></li>
                    <li><NavLink activeClassName='categoria-activa' to='/category/sapphire'>SAPPHIRE</NavLink></li>
                    <li><NavLink activeClassName='categoria-activa' to='/category/nvidia'>NVIDIA</NavLink></li>               
                </ul>
               <CartWidget />
               <div className='closeMenu' onClick={cerrar}><FontAwesomeIcon icon={faTimes} className="fa fa-times"/></div>
            </div>
            <div className='div-promo'>
                <h2>🔥 Envío gratis en todos los productos 🔥 {valor}</h2>
               
            </div>
        </nav>
    )
}

export { NavBar }