import React from "react";
import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";
//componentes externos
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";


const Item = (props) => {
const {picture, flavor, price, stock} = props
const buy = () => {
    
    alert("Vas a agregar items al carrito")
};
    return(
        <div className="container-prod">
            <div className="prod-img">
                <img src= {picture} alt="imagen del prod"/>
            </div>
            <div className="product-info">
                <h5> {flavor}</h5>
                <p>${price}</p>
                <ItemCount stock={stock} buy={buy}/>
                <Button> <NavLink to="/DetalleProd">Detalle </NavLink></Button>
            </div>
        </div>
    );
};
export default Item;