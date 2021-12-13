import React from 'react'
import "./itemDetail.css";
import ItemCount from '../ItemCount';
import { Link } from "react-router-dom"





const ItemDetail = ({ item }) => {
    return (
        <div className="detail">
            <img className="image-detail" src={item.img} alt="" />
            <h3>{item.name}</h3>
            <p>Precio: {item.price}</p>
            <p>Stock disponible: {item.stockProd}</p>
            <ItemCount stock={item.stockProd} initial={1} />
            <Link className="btn btn-warning" to="/">Volver</Link>
        </div>
    )
}

export default ItemDetail
