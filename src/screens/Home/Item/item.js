import React from 'react'
import { useState } from 'react'
import '../home.css'
import { BuyItem } from '../buyItem/buyItem'


const Item = ({id, title, price, pictureUrl, stock}) => {
                  
        return(
            
        <div className="container-stock" id={id}>
            <div className='descripcion'>
            <p className='tituloProducto'>{title}</p>
            <img className='imgProducto'src={pictureUrl}></img>
            
            </div>
            <div className='contadorProducto'>
            <p className='precioProducto'><b>$<span className='precio-span'>{price}</span></b> </p>
            <p className='stock-oculto'>{stock}</p>
           
            {/* <ItemCount stock={5} initial={1} id={id}/> */}
            <BuyItem id={id}/>
            </div>   
        </div>
     
    )

}

export { Item }