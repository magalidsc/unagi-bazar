import React, { Fragment, useState } from 'react'

const Form = () => {

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
    }

    return (
        <Fragment>
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

        </Fragment>

    )
}

export default Form;
