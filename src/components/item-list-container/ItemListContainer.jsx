import React from "react";
import ItemCount from "../ItemCount.jsx";
import "./style.css";

const styleGreeting = {
    display: 'block',
    margin: '8rem',
    fontSize: '80px'

}

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container">
            <h1 style={styleGreeting}>{greeting}</h1>
            <ItemCount stock={10} initial={1} />
            <ItemCount stock={8} initial={1} />
            <ItemCount stock={6} initial={1} />
            <ItemCount stock={8} initial={1} />
        </div>
    )
}

export default ItemListContainer;