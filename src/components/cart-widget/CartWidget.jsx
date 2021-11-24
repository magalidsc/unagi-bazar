import React from "react";
import { BsCartPlus } from 'react-icons/bs';

const styleCart = {
    marginRight: '3rem'
}

const CartWidget = () => {
    return (
        <button style={styleCart}>
            <BsCartPlus />0
        </button>
    )
}

export default CartWidget;
