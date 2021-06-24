import React from 'react'
import { Layout } from '../../components'
import { useState, useEffect } from 'react'
import { Item } from './Item/item'
import './home.css'
let catalogo = [
    {
    id: '1',
    title: 'Nvidia Gigabyte GeForce GTX 1050 Ti',
    price: 72000,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_878641-MLA40006752150_122019-O.webp'
},
{
    id: '2',
    title: 'Nvidia Gigabyte GeForce GTX 750 Ti',
    price: 45000,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_944810-MLA44420686852_122020-W.jpg'
},
{
    id: '3',
    title: 'Nvidia MSI GeForce 700 Series GT 710',
    price: 15000,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_797945-MLA32007295753_082019-O.webp'
},
{
    id: '4',
    title: 'Nvidia Gigabyte GeForce RTX 20 Series RTX 2060 6GB',
    price: 260000,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_920504-MLA32095352421_092019-O.webp'
},
{
    id: '5',
    title: 'Nvidia Gigabyte GeForce GTX 750 Ti',
    price: 45000,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_944810-MLA44420686852_122020-W.jpg'
}
] 

const ItemList = () => {
  
   const [productos, setProductos] = useState(undefined)
   
   const [error, setError] = useState('')
    useEffect(() => {
        const getDatos = async () => {
            try {
               
               await setProductos(catalogo)
                console.log(productos)
            } catch(e){
                await setError(e)
            }
            }
    getDatos()
       
 }, [])
    
    
    return(
        <Layout>
            <h1>CATALOGO</h1>
            <div className='generalHome'>
                <div className="catalogo">
                    { productos ? (   
                      productos.map((valor) =>{
                          if(valor.price < 50000){
                            //   ACA PUEDO IR FILTRANDO POR EJEMPLO POR MONTO.
                          }
                          return(
                            <Item id={valor.id} title={valor.title} pictureUrl={valor.pictureUrl} price={valor.price}/>
                          )
                      })
                    ) : 
                     <p>Error</p>
                    }

                </div>
            </div>
        </Layout>
    )
}

export { ItemList }