import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import CartWidget from '../cart-widget/CartWidget.jsx'
import { Link } from "react-router-dom";
import './style.css'

const Nav = () => {
    const { cart } = useContext(CartContext)
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand btn btn-outline-light" href="/#">Unagi-bazar</a>
                <button className="navbar-toggler bg-light navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown" style={{ margin: 3 }}>
                            <Link className="nav-link active btn dropdown-toggle text-light" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li className="nav-item dropdown-item text-secondary">
                                    <Link className="item nav-link" to="/category/kitchen"> Cocina </Link>
                                </li>
                                <li className="nav-item dropdown-item text-secondary">
                                    <Link className="item nav-link" to="/category/bathroom"> Baño </Link>
                                </li>
                                <li className="nav-item dropdown-item text-secondary">
                                    <Link className="item nav-link" to="/category/orden"> Orden </Link>
                                </li>

                            </ul>
                        </li>


                    </ul>
                </div>
            </div>
            <>
                {cart.length !== 0 ? <CartWidget /> : null}

            </>
        </nav>
    )
}
export default Nav;