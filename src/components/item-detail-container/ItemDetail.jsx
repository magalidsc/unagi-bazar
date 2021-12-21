import React from 'react'
import "./itemDetail.css";
import ItemCount from '../ItemCount';
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(0);
    const { addItem } = useContext(CartContext);

    const onAdd = (counter) => {
        addItem(item, counter)
        console.log("agregaste nuevo producto al carrito")
        setCount(counter)
    }

    return (
        <div className="detail">
            <img className="image-detail" src={item.img} alt="" />
            <h3>{item.name}</h3>
            <p>Precio: {item.price}</p>
            <p>Stock disponible: {item.stockProd}</p>
            {count === 0 ? <ItemCount stock={item.stockProd} initial={1} addItem={onAdd} /> : <Link className="btn btn-primary" to="/cart">Ir al carrito</Link>}
            <Link className="btn btn-warning" to="/">Volver</Link>
        </div>
    )
}

export default ItemDetail;
