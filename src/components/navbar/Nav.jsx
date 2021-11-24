import React from 'react';
import CartWidget from '../cart-widget/CartWidget.jsx'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand btn btn-outline-light" href="/#">Unagi-bazar</a>
                <button className="navbar-toggler bg-light navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown" style={{ margin: 3 }}>
                            <a className="nav-link active btn dropdown-toggle text-light" text-light href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
          </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="nav-link dropdown-item text-secondary" href="/#">Cocina</a></li>
                                <li><a className="nav-link dropdown-item text-secondary" href="/#">Baño</a></li>
                                <li><a className="nav-link dropdown-item text-secondary" href="/#">Organización</a></li>
                                <li><a className="nav-link dropdown-item text-secondary" href="/#">Decoración</a></li>
                            </ul>
                        </li>
                        <li className="nav-item" style={{ margin: 2 }}>
                            <a className="nav-link active btn text-light" aria-current="page" href="/#">Cómo comprar</a>
                        </li>
                        <li className="nav-item" style={{ margin: 2 }}>
                            <a className="nav-link active btn text-light" aria-current="page" href="/#">Contacto</a>
                        </li>

                    </ul>
                </div>
            </div>
            <CartWidget />
        </nav>
    )
}
export default Nav;