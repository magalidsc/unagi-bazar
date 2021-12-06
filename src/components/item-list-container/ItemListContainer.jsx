import React, { useState } from "react";
import { useEffect } from "react"
import ItemList from "../items/ItemList"
import "./style.css";
import { getProductsAvailable } from "../../products";


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
        <div className="container-list container-lg">
            <h1>{greeting}</h1>
            <ItemList productsAvailable={productsAvailable} />
        </div>
    )
}

export default ItemListContainer;