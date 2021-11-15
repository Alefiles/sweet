import React from "react";
import "./CartWidget.css"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";
//import {CartContext} from "../context/CartContext"

export default function CartWidget (){
    return(
        <div className="shoppingCartNav">
                <span>0</span>
                <NavLink to="/Carrito"><Button variant="contained">
                    <FontAwesomeIcon icon={faShoppingCart}/>
                </Button></NavLink>

        </div>
)};
