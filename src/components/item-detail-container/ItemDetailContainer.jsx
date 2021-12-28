import React from 'react';
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebase/firebase'
import { getDoc, doc, QuerySnapshot } from 'firebase/firestore';


const ItemDetailContainer = () => {

    const [productsAvailable, setProductsAvailable] = useState()
    const { paramId } = useParams();

    useEffect(() => {
        const list = getDoc(doc(db, 'items', paramId))
        list.then(QuerySnapshot => {
            const product = { id: QuerySnapshot.id, ...QuerySnapshot.data() }
            setProductsAvailable(product)
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
