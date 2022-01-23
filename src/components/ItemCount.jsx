import React, { useState } from 'react'
import "../components/itemCount.css"


const ItemCount = (props) => {


    const [count, setCounter] = useState(parseInt(props.initial));

    const addProduct = () => {
        if (count < props.stock) {
            setCounter(count + 1);
        } else {
            console.log("Se está excediendo el límite del stock")
        }
    }

    const removeProduct = () => {
        if (count > 0) {
            setCounter(count - 1);
        } else {
            console.log("No se puede seleccionar menos de 1 producto")
        }

    }

    const onAdd = () => {
        props.addItem(count)
    }

    return (
        <div className="cardItem">
            <h5> Cantidad seleccionada: {count} </h5>
            <button onClick={removeProduct} className="btn btn-secondary"> - </button>
            <button onClick={addProduct} className="btn btn-secondary"> + </button>
            {count > 0 ? <button onClick={onAdd} className="btn btn-success">Agregar al carrito</button> : null}

        </div>
    )
}

export default ItemCount
