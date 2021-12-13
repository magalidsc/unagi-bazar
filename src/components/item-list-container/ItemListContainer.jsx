import React, { useState } from "react";
import { useEffect } from "react"
import ItemList from "../items/ItemList"
import "./style.css";
import { getProductsAvailable } from "../../products";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../../products"

const ItemListContainer = () => {

    const { categoryId } = useParams()
    const [productsAvailable, setProductsAvailable] = useState([])

    useEffect(() => {

        (async () => {
            // Si la categoría está definada, traer los producto por el id de la categoría, sino traer todos los productos
            if (categoryId !== undefined) {
                const productsAvailable = await getProductsByCategory(categoryId);
                setProductsAvailable(productsAvailable);

            } else {
                const productsAvailable = await getProductsAvailable();
                setProductsAvailable(productsAvailable);

            }
        })()
    }, [categoryId])

    return (
        <div className="container-list container-lg">
            {productsAvailable.length !== 0 ? <ItemList productsAvailable={productsAvailable} /> : <p> Cargando productos</p>}

        </div>
    )
}



export default ItemListContainer;