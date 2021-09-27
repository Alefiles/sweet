import React, {useState} from "react";
//import Product from "../Product/Product";

export default function ItemCount(props){
    const [items, setItems] = useState(1)
    const [stock, setStock] = useState(24)
    const [nostock, disableButton] = useState (false)
    
    const onAdd = () => {
        if (items < stock){
        setItems (items +1)
    } else{
        disableButton(true)
    }
}
    const delItem = () => {
        setItems (items -1)
    }

    return(
        <div className="CuentaItems">
            <button onClick ={delItem}>-</button>
                {items}
            <button disabled={nostock} onClick={onAdd}>+</button>
            
        </div>
    )
}