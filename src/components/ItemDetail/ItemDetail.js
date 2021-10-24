import React, {useState, useEffect} from "react"
//import Item from "./Components/Item/Item"
//Componentes externos
import Button from '@material-ui/core/Button';
//import {NavLink} from "react-router-dom";

export default function ItemDetail (props) {
const {data} = props
 const { category, flavor, price, picture} = data
    
 return (
        <div className="product-detail">
            <h2>{props.category}</h2>
                <div>
                    <img src={props.picture} alt="imagen producto"/>
                </div>
                <div>
                    <h3>{props.flavor}</h3>
                    <p> precio: ${props.price}</p>
                    <Button> Volver</Button>
                </div>
        </div>

    )
}