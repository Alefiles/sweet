import React from "react";
import "./Product.css";
import ItemCount from "../ItemCount/ItemCount"
import Button from '@material-ui/core/Button';

const Product = (props) => {

    return(
        <div className="container-prod">
         <div className="prod-img">
            <img src="" alt="" />
        </div>
        <div className="product-info">
                <h3>Sabor: {props.flavor}</h3>
                <p>${props.price}</p>
                <label>Cantidad</label>
                <input type="number"></input>

                <ItemCount />

                <Button>comprar</Button>
        </div>
        </div>
    )
}
export default Product