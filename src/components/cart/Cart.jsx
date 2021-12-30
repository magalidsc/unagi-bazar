import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import { db } from "../../services/firebase/firebase";
import { addDoc, collection, doc, getDoct, getFirestore } from "firebase/firestore";

const Cart = () => {

    const [processingOrder, setProcessingOrder] = useState(false);
    const { cart, clearCart, getTotal, removeItem } = useContext(CartContext);
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
        setProcessingOrder(true)

        const newObjectOrder = {
            buyer: data,
            items: cart,
            total: getTotal()
        }

        addDoc(collection(db, "orders"), newObjectOrder).then(({ id }) => {
            console.log(id)
            alert("El código de su pedido es: " + (id))
        })

        setTimeout(() => {
            clearCart()
            setProcessingOrder(false)
        })
    }

            <div className='cartDiv'>
                <h2>Estos son los productos seleccionados: </h2>
                {cart.map(product =>
                    <div key={product.item.id}>

                        <div>
                            <h6>Producto: {product.item.name}</h6>
                        </div>

                        <div>
                            <h6>Precio: ${product.item.price}</h6>
                        </div>

                        <div>
                            <h6>Cantidad: {product.quantity} unidades</h6>
                        </div>

                        <div>
                            <button className='btn btn-danger' onClick={() => removeItem(product.item.id)}>X</button>
                        </div>
                    </div>
                )}
    //             <div>
    //                 <h3>Total Compra: ${getTotal()}</h3>
    //             </div>
    //             <Link to={"/form"} className='btn btn-success'>Finalizar compra</Link><br />
    //             <Link className='btn btn-primary' to="/">Seguir comprando</Link>
    //         </div>
   

    return (
        <>
            {cart.length === 0 ? (
                <div className='emptyCart'>
                    <h2>Tu Carrito está vacío!</h2>
                    <Link className='btn btn-primary myButton' to="/">Volver al Home</Link>
                </div>
            ) : (
                    <>
                        <div className='cartDiv'>
                            <h2>Este es tu Carrito</h2>
                            {cart.map((product) => (
                                <div className='cartDiv'>

                        <div>
                            <h6>Producto: {product.item.name}</h6>
                        </div>

                        <div>
                            <h6>Precio: ${product.item.price}</h6>
                        </div>

                        <div>
                            <h6>Cantidad: {product.quantity} unidades</h6>
                        </div>

                        <div>
                            <button className='btn btn-danger' onClick={() => removeItem(product.item.id)}>X</button>
                        </div>
                    </div>
                            ))}
                            <div className='divTotal'>
                                <h3 className='text-dark'>Total Compra: ${getTotal()}</h3>
                            </div>
                            <Link className='btn btn-primary myButton' to="/">Volver al Home</Link>
                        </div>
                        {!processingOrder ? (
                            <div>
                              <h1>Datos de compra</h1>

<form onSubmit={submitOrder} >
    <input
        type="text"
        placeholder="Nombre"
        className="form-control"
        name="clientName"
        onChange={inputChange}
    />

    <input
        type="number"
        placeholder="Teléfono"
        className="form-control"
        name="phone"
        onChange={inputChange}
    />

    <input
        type="email"
        placeholder="Email"
        className="form-control"
        name="mail"
        onChange={inputChange}
    />


    <button className="btn btn-warning" type="submit">Enviar</button>





</form>
                            </div>
                        ) : (
                                <h1>Estamos Generando su orden</h1>
                            )}
                    </>
                )}
        </>
    )
}

export default Cart