import React, {useState, useEffect, useContext} from "react"
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../../context/CartContext";
//import Item from "./Components/Item/Item"
//Componentes externos
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";
//import {NavLink} from "react-router-dom";

export default function ItemDetail (props) {

//Llamo al contexto del carro de compras
const contextData = useContext(CartContext)

const {Id, category, flavor, price, picture, stock} = props
const [items, setItems] = useState(1)

const buy = () => {
    
    alert("Vas a agregar items al carrito")
};

const productocompra ={
    category:"loaf cake",
    flavor:"vainilla",
    price:100,
    quantity: 2

    
}

const onAdd = () => {
        if (items < stock){
            setItems (items +1);
        } 
}
const delItem = () => {
        if (items !== 0){
            setItems (items -1);
        }
}

return (
        <div className="product-detail">
            <h2>{category}</h2>
                <div>
                    <img src={picture} alt="imagen producto"/>
                </div>
                <div>
                    <h3>{flavor}</h3>
                    <p> precio: ${price}</p>
                    <div className="button-container">
                        <ItemCount onAdd={onAdd} delItem={delItem} stock={stock} quantity={items} buy={buy}/>
                        <Button onClick={buy}>Comprar</Button>
                        <Button> <NavLink to={`/DetalleProd/${Id}`}>Detalle </NavLink></Button>
                        <Button> Volver</Button>
                    </div>
                </div>
        </div>

    )
}