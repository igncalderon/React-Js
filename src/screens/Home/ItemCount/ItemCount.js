import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { buyItem } from '../buyItem/buyItem'
import '../home.css'



const ItemCount = ({stock, initial, id}) => {
    
    
    const [count, setCount] = useState(initial)
    
    // const[inicial, setInicial] = useState(initial)

    const onAdd = () =>{
        alert(`Compraste ${count} unidades`)
    }
        const itemCarrito = (operacion) => {
                switch(operacion){
                    case "+":
                        if(count < stock){
                           
                            setCount(count + 1)
                            break
                        }else{
                            break
                        }
                     case "-":
                         if(count > initial){
                            setCount(count - 1)
                            break
                         }else{
                             break
                         } 
                     } 
           
        }
            
      
        return(
            
        
            <div className="flex-container-stock">
                        <label class='product-name'htmlFor=""></label>
                    <div className='flex-botones-stock'>   
                        <button className='botonStock' onClick={() => itemCarrito('-')}>-</button>
                        <input type="text" className='cantidad' value={count} readOnly="readonly"/>
                        <button className='botonStock' onClick={() => itemCarrito('+')}>+</button>
                    </div>
                    <div className='flex-botones-compra'>
                        <button className='btn-cart' onClick={ () => onAdd()}><NavLink  className='NavLink' to={`/item/:${id}`}>Comprar</NavLink></button>
                        <button className="btn-icon"><FontAwesomeIcon icon={faCartPlus} className=""/></button>
                    </div>
                    
            </div>
       
    )

}

export { ItemCount }
