import React from 'react'
import { NavLink } from 'react-router-dom'
import './buyItem.css'
const BuyItem = ({id}) => {
    
    return(
        <div>
            <button className='btnBuy'><NavLink className='navlink' to={`/item/:${id}`}>Comprar</NavLink></button>
            
        </div>
        
    )
}

export { BuyItem }