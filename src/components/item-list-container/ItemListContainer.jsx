import React, { useState } from "react";
import { useEffect } from "react"
import ItemCount from "../ItemCount.jsx";
import ItemList from "../items/ItemList"
import "./style.css";
import { getProductsAvailable } from "../../products";

const styleGreeting = {
    display: 'block',
    margin: '4rem',
    fontSize: '60px'

}

const ItemListContainer = ({ greeting }) => {
    const [productsAvailable, setProductsAvailable] = useState([])
    useEffect(() => {
        const list = getProductsAvailable()
        list.then(list => {
            setProductsAvailable(list)
        })
        return (() => {
            setProductsAvailable([])
        })
    }, [])

    return (
        <div className="container">
            <h1 style={styleGreeting}>{greeting}</h1>
            <h2 style={styleGreeting}>Cards "Desafío: Catálogo con MAPS y Promises"</h2>
            <ItemList productsAvailable={productsAvailable} />
            <h2 style={styleGreeting}>Cards "Desafío: Contador con botón"</h2>
            <ItemCount stock={10} initial={1} />
            <ItemCount stock={8} initial={1} />
            <ItemCount stock={6} initial={1} />
            <ItemCount stock={8} initial={1} />
        </div>
    )
}

export default ItemListContainer;