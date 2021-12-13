import React from 'react';
import { getProductsById } from '../../products';
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const [productsAvailable, setProductsAvailable] = useState()
    const { paramId } = useParams();

    useEffect(() => {
        const list = getProductsById(paramId)
        list.then(list => {
            setProductsAvailable(list)
        })
        return (() => {
            setProductsAvailable()
        })
    }, [paramId])

    return (
        <div>
            {productsAvailable ? <ItemDetail item={productsAvailable} /> : <p>Cargando productos</p>}
        </div>
    )
}

export default ItemDetailContainer
