import React, {useState} from "react";
import {CartContext} from "../../context/CartContext"

//import Product from "../Product/Product";

export default function ItemCount(props){

const {stock, buy, onAdd, delItem, quantity, items} = props ;
        
    return(
        <div className="contenedorCount">
        
            <button disabled= {items===0} onClick ={delItem}>-</button>
            <p className="ItemCount"> {quantity} </p>
            <button disabled={items >= stock} onClick={onAdd}>+</button>
            
        
        
        </div>
    )
}