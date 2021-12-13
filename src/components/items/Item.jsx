import React from "react";
import "./Item.css";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom"


const Item = ({ eachProduct }) => {


    return (
        <div className="myCards">
            <img className="img-bazar" src={eachProduct.img} alt="img-productos" />
            <h3>{eachProduct.name}</h3>
            <ItemCount stock={eachProduct.stockProd} initial={1} />
            <Link className="btn btn-warning" to={`/item/${eachProduct.id}`}>Ver detalle</Link>


        </div>
    )
}

export default Item;