import React, { useState } from 'react'
import { Layout } from '../../components' // Si no existiera mi index.js exportando Layout, aca tendria que haber escrito '../../components/Layout'
import { catalogo } from '../Home/itemList'
import { useParams } from 'react-router-dom'
import { Btn } from '../../components/button/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { ItemCount } from '../Home/ItemCount/ItemCount'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
//   import 'bootstrap/dist/css/bootstrap.min.css'
  import './itemDetailContainer.css'

const ItemDetailContainer = () => {
    const { itemId } = useParams()
    
  
    console.log(itemId)
    console.log(catalogo)
    return(
        <Layout>
            {
                catalogo.filter((producto) => (`:${producto.id}` == itemId))
                .map((valor) => {
                    
                    console.log(valor.id)
                    return(
                        <div className='description-product'>
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
                                <ItemCount stock={5} initial={1}></ItemCount>
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