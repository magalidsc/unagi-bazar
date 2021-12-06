import React from "react";
import "./Item.css";
import ItemCount from "../ItemCount";



const Item = ({ eachProduct }) => {


    return (
        <div className="myCards">
            <img className="img-bazar" src={eachProduct.img} alt="img-productos" />
            <h3>{eachProduct.name}</h3>
            <ItemCount stock={eachProduct.stockProd} initial={1} />
            <button className="btn btn-warning">Ver detalle</button>

        </div>
    )
}

export default Item;