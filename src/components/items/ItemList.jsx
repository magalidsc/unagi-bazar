import React from 'react';
import Item from "../items/Item";
import "./itemList.css";

const ItemList = ({ productsAvailable }) => {
    return (
        <div className="containerItem">
            {productsAvailable.map(eachProduct => <Item key={eachProduct.id} eachProduct={eachProduct} />)}
        </div>
    )
}

export default ItemList;
