import React from "react";
import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";


const Item = (props) => {
const {picture, flavor, price, stock} = props
const buy = () => {alert("Vas a agregar items al carrito")};
    return(
        <div className="container-prod">
            <div className="prod-img">
            <img src= {picture} alt="imagen del prod"/>
            </div>
            <div className="product-info">
                <h3>Sabor: {flavor}</h3>
                <p>${price}</p>
                
                <ItemCount stock={stock} buy={buy}/>
            </div>
        </div>
    )
};
export default Item;