import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

const Layout = ({children}) => {

    // En este caso usamos title para pasarlo como prop desde nuestras screens, sin embargo,
    // lo mejor seria crear un componente title para darle los estilos que uno quiera, y reutilizarlo aqui
    // como un componente mas.

    return(
        <>
            <Header />
          
            {children}
            <Footer />
        </>
    )
}

export { Layout }