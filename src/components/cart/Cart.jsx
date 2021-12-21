import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext);
    const { getTotal } = useContext(CartContext);

    const renderCart = () => {
        return (
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
                <div>
                    <h3>Total Compra: ${getTotal()}</h3>
                </div>
                <Link to={"/form"} className='btn btn-success'>Finalizar compra</Link><br />
                <Link className='btn btn-primary' to="/">Seguir comprando</Link>
            </div>
        )

    }

    const emptyCart = () => {
        return (
            <div className='cartDiv'>
                <h2>Tu Carrito está vacío!</h2>
                <Link className='btn btn-primary myButton' to="/">Volver al Home</Link>
            </div>
        )

    }


    return (
        <>
            {cart.length !== 0 ? renderCart() : emptyCart()}
        </>
    )
}

export default Cart