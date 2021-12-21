import React, { useContext } from "react";
import { BsCartPlus } from 'react-icons/bs';
import { CartContext } from "../../context/CartContext"
import { NavLink } from "react-router-dom";

const styleCart = {
    marginRight: '3rem'
}

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <NavLink to="/cart">
            <button style={styleCart}>
                <BsCartPlus />
                <span>{totalQuantity}</span>
            </button>

        </NavLink>
    )
}

export default CartWidget;
