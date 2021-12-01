import React from 'react';
import Item from "../items/Item";

const ItemList = ({ productsAvailable }) => {
    return (
        <div>
            {productsAvailable.map(eachProduct => <Item key={eachProduct.id} eachProduct={eachProduct} />)}
        </div>
    )
}

export default ItemList;
