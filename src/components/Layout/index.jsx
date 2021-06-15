import React from 'react'
import { NavBar } from './Header/NavBar'
import { Footer } from './Footer'
import { CartWidget } from './CartWidget/CartWidget'

const Layout = ({children}) => {

    // En este caso usamos title para pasarlo como prop desde nuestras screens, sin embargo,
    // lo mejor seria crear un componente title para darle los estilos que uno quiera, y reutilizarlo aqui
    // como un componente mas.

    return(
        <>
            <NavBar />
            <CartWidget />
            {children}
            <Footer />
        </>
    )
}

export { Layout }