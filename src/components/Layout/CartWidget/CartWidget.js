import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart, faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'
const CartWidget = () => {
    return(
        <div className="iconos">
                    <FontAwesomeIcon icon={faShoppingCart} className="icon-font"/>
                    <FontAwesomeIcon icon={faSignInAlt}  className="icon-font"/>
        </div>
        
    )
}

export { CartWidget }