import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { db } from '../../services/firebase/firebase'
import { addDoc, collection, writeBatch, getDoc, doc } from 'firebase/firestore'
import './style.css'

const Form = () => {

    const { cart, clearCart, getTotal, setOrderSucceed, setProcessOrder } = useContext(CartContext);
    const [data, setData] = useState({
        clientName: '',
        phone: '',
        mail: ''
    })

    const inputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const submitOrder = (e) => {
        e.preventDefault();
        console.log(data.clientName + ' ' + data.phone + ' ' + data.mail)
        setProcessOrder(true)

        const newObjectOrder = {
            buyer: data,
            items: cart,
            total: getTotal()
        }

        const batch = writeBatch(db)
        const outOfStock = []

        newObjectOrder.items.forEach((prod) => {

            getDoc(doc(db, "item", prod.item.id)).then((docSnapshot) => {
                if (docSnapshot.data().stockProd >= prod.quantity) {
                    batch.update(doc(db, "item", docSnapshot.id), {
                        stockProd: docSnapshot.data().stockProd - prod.quantity,
                    })
                } else {
                    outOfStock.push({ id: docSnapshot.id, ...docSnapshot.data() })
                }
            })
        })

        if (outOfStock.length === 0) {

            addDoc(collection(db, "orders"), newObjectOrder).then(({ id }) => {
                batch.commit().then(() => {
                    setOrderSucceed(id);
                })
            }).catch((error) => {
                console.log(`error ejecutando la orden: ${error}`);
            }).finally(() => {
                clearCart();
            })
        }


    }


    return (
        <div className="containerForm">
            <h2>Completa tus datos para continuar con la compra</h2>

            <form className="form" onSubmit={submitOrder} >
                <input
                    type="text"
                    placeholder="Nombre"
                    className="form-control input"
                    name="clientName"
                    onChange={inputChange}
                />

                <input
                    type="number"
                    placeholder="Teléfono"
                    className="form-control input"
                    name="phone"
                    onChange={inputChange}
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="form-control input"
                    name="mail"
                    onChange={inputChange}
                />


                <button className="btn btn-warning btn-form" type="submit">Enviar</button>
            </form>
            <div>
                <button className="btn btn-info btn-form" onClick={() => setProcessOrder(false)}> Volver </button>
            </div>

        </div>
    )
}

export default Form
