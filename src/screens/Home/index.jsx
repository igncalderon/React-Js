import React from 'react'
import { Layout } from '../../components'


const Home = () => {

    // My page principal utilizando mi layout, con nav y footer. "Home" esta en el medio, este es el children
    // que declaramos en el Layout.
    // Podria ser otro componente o simplemente todo lo que querramos que sea de contenido.
    // Pueden poner la cantidad de elementos que quieran dentro de nuestro Layout.

    return(
        <Layout>
            CATALOGO
        </Layout>
    )
}

export { Home }