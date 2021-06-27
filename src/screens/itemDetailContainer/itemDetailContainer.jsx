import React from 'react'
import { Layout } from '../../components' // Si no existiera mi index.js exportando Layout, aca tendria que haber escrito '../../components/Layout'
import { catalogo } from '../Home/index'
const itemDetailContainer = (catalogo) => {
    console.log(catalogo)
    // My page principal utilizando mi layout, con nav y footer. "Laptops" esta en el medio, este es el children
    // que declaramos en el Layout.
    // Podria ser otro componente o simplemente todo lo que querramos que sea de contenido.
    // Pueden poner la cantidad de elementos que quieran dentro de nuestro Layout.

    return(
        <Layout>
            <h1>ITEM DETAIL CONTAINER</h1>
        </Layout>
    )
}

export { itemDetailContainer }