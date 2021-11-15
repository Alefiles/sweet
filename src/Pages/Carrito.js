import React, {useContext} from "react"
import {CartContext} from "../context/CartContext"


export default function Carrito () {
    const [cart, setCart] = useContext(CartContext);

return (
    <div>
        <h1>Bienvenidos al carrito </h1>
          <span> cantidad de items en el carrito: {cart.length}</span>
          <br/>
          <span> Total $: </span>
    </div>

)};