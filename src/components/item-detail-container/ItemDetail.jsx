import React from 'react'
import "./itemDetail.css";
import ItemCount from '../ItemCount';





const ItemDetail = ({ item }) => {
    return (
        <div className="detail">
            <img className="image-detail" src={item.img} alt="" />
            <h3>{item.name}</h3>
            <p>Precio: {item.price}</p>
            <p>Stock disponible: {item.stockProd}</p>
            <ItemCount stock={item.stockProd} initial={1} />
        </div>
    )
}

export default ItemDetail
