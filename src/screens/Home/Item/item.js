import React from 'react'
import { useState } from 'react'
import '../home.css'
import { ItemCount } from '../ItemCount/ItemCount'
// import { ItemCount } from '../ItemCount'


const Item = ({id, title, price, pictureUrl}) => {
                  
        return(
            
        <div className="container-stock" id={id}>
            <div className='descripcion'>
            <p className='tituloProducto'>{title}</p>
            <img className='imgProducto'src={pictureUrl}></img>
            <p className='precioProducto'><b>$<span className='precio-span'>{price}</span></b> </p>
            </div>
            <div className='contadorProducto'>
            <ItemCount stock={5} initial={1}/>
            </div>   
        </div>
     
    )

}

export { Item }