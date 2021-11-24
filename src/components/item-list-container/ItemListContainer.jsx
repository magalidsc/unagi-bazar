import React from "react";

const styleGreeting = {
    margin: '2rem',
    fontSize: '60px'
}

const ItemListContainer = ({ greeting }) => {
    return (
        <h1 style={styleGreeting}>{greeting}</h1>
    )
}

export default ItemListContainer;