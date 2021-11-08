import React, {useState} from "react";
import Button from '@material-ui/core/Button';

//import Product from "../Product/Product";

export default function ItemCount(props){

const {stock, buy, onAdd, delItem, quantity, items} = props ;
        
    return(
        <div>
        <div className="CuentaItems">
            <button disabled= {items===0} onClick ={delItem}>-</button>
            <p className="ItemCount"> {quantity} </p>
            <button disabled={items >= stock} onClick={onAdd}>+</button>
            
        </div>
        <Button onClick ={() => buy ()} >Comprar</Button>
        </div>
    )
}