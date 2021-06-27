import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import '../home.css'

let cantidad = 1;

const ItemCount = ({stock, initial}) => {
    
    console.log(cantidad)
    
    const[resultado, nuevoResultado] = useState(cantidad)
    const[stockCatalogo, nuevoStock] = useState(stock)


    const onAdd = () =>{
        alert(`Compraste ${cantidad} unidades`)
    }
        const itemCarrito = (operacion) => {
                switch(operacion){
                    case "+":
                        if(cantidad < stock){
                            cantidad = cantidad + 1
                            stock = stock - cantidad
                            console.log(cantidad)
                            break
                        }else{
                            break
                        }
                     case "-":
                         if(cantidad > initial){
                            cantidad = cantidad - 1
                            stock = stock + cantidad
                            console.log(cantidad)
                            break
                         }else{
                             break
                         }
                        
                     } 
                nuevoResultado(cantidad);
                nuevoStock(stock)
            
           
        }
            
      
        return(
            
        
            <div className="flex-container-stock">
                        <label class='product-name'htmlFor=""></label>
                    <div className='flex-botones-stock'>   
                        <button className='botonStock' onClick={() => itemCarrito('-')}>-</button>
                        <input type="text" className='cantidad' value={resultado} readOnly="readonly"/>
                        <button className='botonStock' onClick={() => itemCarrito('+')}>+</button>
                    </div>
                    <div className='flex-botones-compra'>
                        <button className='btn-cart' onClick={ () => onAdd()}><NavLink to='/item/1'>Comprar</NavLink></button>
                        <button className="btn-icon"><FontAwesomeIcon icon={faCartPlus} className=""/></button>
                        
                    </div>
                    
            </div>
       
    )

}

export { ItemCount }
