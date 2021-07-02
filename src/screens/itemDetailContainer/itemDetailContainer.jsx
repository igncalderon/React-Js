import React, { useState, useEffect } from 'react'
import { Layout } from '../../components' // Si no existiera mi index.js exportando Layout, aca tendria que haber escrito '../../components/Layout'
import { catalogo } from '../Home/itemList'
import { useParams } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { ItemCount } from '../Home/ItemCount/ItemCount'

  import './itemDetailContainer.css'

const ItemDetailContainer = () => {
    const { itemId } = useParams()
    
    
    // const [item, setItem] = useState()

    // const getItem = async () => {
    // catalogo.filter((producto) => (`:${producto.id}` == itemId))
    // .map((valor) => {
    //         return [
    //             {
    //                 id: valor.id,
    //                 title: valor.title,
    //                 price: valor.price,
    //                 pictureUrl: valor.pictureUrl,
    //                 description: valor.description,
    //                 stock: valor.stock
    //             }]
    //     })
    //  }

    // useEffect(() => {
        
    //     const item = getItem();
    //     setItem(item)
    
    // }, [])

    return(
       
        <Layout>
            {
                catalogo.filter((producto) => (`:${producto.id}` == itemId))
                .map((valor) => {
                    
                  
                    return(
                        <div className='description-product'>
                            <div className='card'>
                                <div className=''>
                                    <img className='img-product'src={valor.pictureUrl}/>
                                    
                                </div>
                                <div className="info-product">
                                    <h1 className='name-product'>
                                        {valor.title}
                                    </h1>
                                    <p>{valor.description}</p>
                                    <div className='envio'>
                                    <FontAwesomeIcon icon={faTruck} className="icon-truck"/>
                                    <h3>Envío Gratis</h3>
                                    
                                    </div>
                                    <div className='cantidad-detail'>
                                        <ItemCount stock={valor.stock} initial={1}></ItemCount>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                        
                    )
                })
               
            }
            
        </Layout>
    )
    
    
    
}

export { ItemDetailContainer }