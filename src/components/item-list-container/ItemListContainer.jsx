import React from "react";
import ItemCount from "../ItemCount.jsx";

const styleGreeting = {
    margin: '2rem',
    fontSize: '60px'
}

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1 style={styleGreeting}>{greeting}</h1>
            <ItemCount />
        </div>
    )
}

export default ItemListContainer;