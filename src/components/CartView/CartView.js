import React, {useState} from "react";
import {CartContext} from "../context/CartContext"

export default function CartView () {

const {cart, addItem } =useState

const contextData = useContext(CartContext)

    return (

        <div className="containerGeneral">
            <h1> Carrito de compras</h1>
            

        </div>
    )
}