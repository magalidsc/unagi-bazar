import React, { useState } from 'react'
import "../components/itemCount.css"


const ItemCount = ({ stock, initial }) => {


    const [count, setCounter] = useState(initial)

    const addProduct = () => {
        // Condicional para que solo se pueda sumar productos hasta llegar al límite del stock
        if (count < stock) {
            setCounter(count + 1);
        } else {
            console.log("Se está excediendo el límite del stock")
        }
    }

    const removeProduct = () => {
        // Restar una unidad por cada click. No puede restarse un número menor a 1
        if (count > 0) {
            setCounter(count - 1);
        } else {
            console.log("No se puede seleccionar menos de 1 producto")
        }

    }

    const onAdd = () => {
        if (count > 0) {
            alert("Fueron agregados tus productos al carrito");
        } else {
            alert("Debes seleccionar al menos un producto")
        }
    }

    return (
        <div className="cardItem">
            <h5> Cantidad seleccionada: {count} </h5>
            <button onClick={removeProduct} className="btn btn-secondary"> - </button>
            <button onClick={addProduct} className="btn btn-secondary"> + </button>
            <button onClick={onAdd} className="btn btn-outline-warning">Agregar al carrito</button>

        </div>
    )
}

export default ItemCount
