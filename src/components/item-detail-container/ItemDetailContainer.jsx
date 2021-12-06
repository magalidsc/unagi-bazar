import React from 'react';
import { getProductDetail } from '../../products';
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";





const ItemDetailContainer = () => {

    const [productsAvailable, setProductsAvailable] = useState(null)
    useEffect(() => {
        const list = getProductDetail()
        list.then(list => {
            setProductsAvailable(list)
        })
        return (() => {
            setProductsAvailable([])
        })
    }, [])

    return (
        <div>
            {productsAvailable ? <ItemDetail item={productsAvailable} /> : <p>Cargando productos</p>}
        </div>
    )
}

export default ItemDetailContainer
