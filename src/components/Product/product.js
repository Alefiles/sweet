import React from "react";
import ItemCount from "../ItemCount/ItemCount";


const Product = (props) => {
    return(
        <><div className="container-prod">
            <img src="" alt="" />
        </div>
        <h3>Sabor: {props.flavor}</h3>
        <p>${props.price}</p>
        <label>Cantidad</label>
        <input type="number"></input>
        <div>
            <itemCount/>
        </div>
        <button>comprar</button></>
    )
}
export default Product