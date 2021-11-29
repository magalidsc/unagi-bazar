import React, { useState } from 'react'



const ItemCount = () => {

    let stock = 10

    const [count, setCounter] = useState(1)

    const addProduct = () => {
        // Condicional para que solo se pueda sumar productos hasta llegar al límite del stock
        if (count < stock) {
            setCounter(count + 1);
        } else {
            console.log("Se está exediendo el límite del stock")
        }
    }

    const removeProduct = () => {
        // Restar una unidad por cada click. No puede restarse un número menor a 1
        if (count > 1) {
            setCounter(count - 1);
        } else {
            console.log("No se puede seleccionar menos de 1 producto")
        }

    }

    return (
        <div>
            <h3> {count} </h3>
            <button onClick={removeProduct}> - </button>
            <button onClick={addProduct}> + </button>
        </div>
    )
}

export default ItemCount
