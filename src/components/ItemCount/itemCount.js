import React, {useState} from "react";
import Button from '@material-ui/core/Button';
//import Product from "../Product/Product";

export default function ItemCount(props){
    const [items, setItems] = useState(1)
    const {stock, buy} = props ;
        
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

    return(
        <div>
        <div className="CuentaItems">
            <button disabled= {items===0} onClick ={delItem}>-</button>
                {items}
            <button disabled={items >= stock} onClick={onAdd}>+</button>
            
        </div>
        <Button onClick ={() => buy ()} >Agregar</Button>
        </div>
    )
}