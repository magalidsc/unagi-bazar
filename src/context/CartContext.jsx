import React, { useState } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const addItem = (newProduct, newQuantity) => {
        const repeatedProduct = cart.find(e => e.item.id === newProduct.id)
        const auxiliaryCart = [...cart];
        (repeatedProduct === undefined) ?
            pushItem(newProduct, newQuantity, auxiliaryCart)
            :
            changeQuantity(auxiliaryCart, repeatedProduct, newQuantity)
        console.log(auxiliaryCart)
    }

    const removeItem = (itemId) => {
        const choosenItem = cart.filter(e => e.item.id === itemId);
        const auxQuanity = totalQuantity - choosenItem[0].quantity;
        const newCart = cart.filter(e => e.item.id !== itemId);
        setCart(newCart);
        setTotalQuantity(auxQuanity);
    }

    const pushItem = (newProduct, newQuantity, auxiliaryCart) => {
        auxiliaryCart.push({ item: newProduct, quantity: newQuantity })
        setTotalQuantity(newQuantity + totalQuantity);
        setCart(auxiliaryCart)
    }

    const changeQuantity = (auxiliaryCart, currentElement, newQuantity) => {
        const index = cart.indexOf(currentElement);
        auxiliaryCart[index].quantity += newQuantity;
        setTotalQuantity(newQuantity + totalQuantity);
        setCart(auxiliaryCart);
    }

    const isInCart = (id) => {
        const itemInCart = cart.find(element => element.item.id === id)

        return itemInCart ? true : false
    }

    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0);
    }

    const getTotal = () => {
        let total = 0;
        cart.forEach(element => {
            total += element.item.price * element.quantity;
        })
        return total;
    }

    return <CartContext.Provider value={{ cart, addItem, removeItem, getTotal, clearCart, isInCart, totalQuantity }}>{children}</CartContext.Provider>
}