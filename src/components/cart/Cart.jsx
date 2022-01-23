import React, { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import Form from '../form/Form'
import './style.css'


const Cart = () => {


    const { cart, clearCart, getTotal, removeItem, setOrderSucceed, setProcessOrder, orderSucceed, processOrder } = useContext(CartContext);

    const finalHandle = () => {
        setProcessOrder(false);
        setOrderSucceed("");
    }

    if (cart.length === 0 && processOrder === false) {
        return (
            <div>
                <h2 className="cartTitle">Tu Carrito está vacío!</h2>
                <Link className="btn btn-info" to="/">Volver al inicio</Link>
            </div>
        )
    }

    return (
        <>
            <>

                <div>
                    <h2 className="cartTitle" >Resumen de compra:</h2>
                </div>
                {(!processOrder && cart.length > 0) &&
                    cart.map((product) => (

                        <div className="cartContainer">

                            <div className='elementContainer'>

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
                                    <button className="btn btn-danger" onClick={() => removeItem(product.item.id)}>X</button>
                                </div>
                            </div>
                        </div>
                    ))

                }

                {(cart.length > 0 && !processOrder) &&
                    <div><h3>Total: ${getTotal()}</h3></div>}

                {(!processOrder && cart.length > 0) &&
                    <button onClick={() => clearCart()} className="btn btn-danger">Vaciar Carrito</button>}

                {(!processOrder && cart.length > 0) &&
                    <button onClick={() => setProcessOrder(true)} className="btn btn-success">Confirmar Compra</button>}

                {(!processOrder && cart.length > 0) &&
                    <NavLink to="/" className="btn btn-info">Seguir comprando</NavLink>}

                {(processOrder && cart.length > 0) &&
                    <div>
                        <Form />
                    </div>
                }
                {(orderSucceed !== "" && processOrder === true) &&
                    <div>
                        <h3>Muchas gracias por su compra! Próximamente te estaremos contactando para coordinar el envio</h3>
                        <h4>El número de su orden es: <strong>{orderSucceed}</strong></h4>
                        <button onClick={finalHandle} className='btn btn-primary'>Volver</button>
                    </div>
                }
            </>

        </>
    )
}

export default Cart