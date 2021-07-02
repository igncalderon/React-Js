import React from 'react'
import { NavLink } from 'react-router-dom'
import { BtnPrincipal } from '../../../components/button/button'

import './buyItem.css'
const BuyItem = ({id, stock}) => {
   

    return(
        <div>
            <button className='btnBuy'><NavLink className='navlink' to={`/item/:${id}`}>Comprar</NavLink></button>
            {/* <BtnPrincipal texto={'Comprar'}><NavLink className='navlink' to={`/item/:${id}`}></NavLink></BtnPrincipal> */}
        </div>
        
    )
}

export { BuyItem }