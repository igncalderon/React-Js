import React from 'react'
import { Layout } from '../../components' // Si no existiera mi index.js exportando Layout, aca tendria que haber escrito '../../components/Layout'

const Laptops = () => {

    // My page principal utilizando mi layout, con nav y footer. "Laptops" esta en el medio, este es el children
    // que declaramos en el Layout.
    // Podria ser otro componente o simplemente todo lo que querramos que sea de contenido.
    // Pueden poner la cantidad de elementos que quieran dentro de nuestro Layout.

    return(
        <Layout title={'Categoria Laptops'}>
            <div>
                Laptops
            </div>
        </Layout>
    )
}

export { Laptops }