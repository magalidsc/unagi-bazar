import React from "react";
import "./Item.css";

const Item = ({ eachProduct }) => {
    return (
        <div className="myCards">
            <img className="img-bazar" src={eachProduct.img} alt="img-productos" />
            <h3>{eachProduct.name}</h3>
            <button className="btn btn-warning">Ver detalle</button>
            <button className="btn btn-warning">Agregar al carrito</button>
        </div>
    )
}

export default Item;