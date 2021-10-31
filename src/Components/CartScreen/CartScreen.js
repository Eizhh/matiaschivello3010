import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import {BsFillTrashFill} from 'react-icons/bs'
import { Link, Redirect } from 'react-router-dom'

export const CartScreen = () => {

    const {carrito, vaciarCarrito, removeItem, calcularTotal} = useContext (CartContext)
    return (
        <div className="container">
            {
                carrito.lenght === 0 // true - false
                ? <>
                    <Redirect to="/"/>
                </>
                :
                    <>
                        <h2>Resumen de compra</h2>
                        <hr/>
                        
                        {
                            carrito.map( (prod) => (
                                <div>
                                    <h4>{prod.name}</h4>
                                    <p>Cantidad:{prod.cantidad}</p>
                                    <p>Precio:{prod.price * prod.cantidad}</p>
                                    <button className="btn btn-danger" onClick={() => removeItem(prod.id)}>
                                        <BsFillTrashFill/>
                                    </button>
                                </div>
                            ))
                        }
                        <hr/>
                        <h3 className="my-3">Precio total :${calcularTotal()}</h3>
                        <button 
                        className="btn btn danger"
                        onClick={vaciarCarrito}
                        >
                            Vaciar carrito
                        </button>
                    </>
            }
      </div>
    )
}
