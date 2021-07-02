
import React from 'react'
import './button.css'

const BtnPrincipal = ({texto}) => { 
    return(
        <button className='btnBuy'>{texto}</button>
    )
}

export { BtnPrincipal }