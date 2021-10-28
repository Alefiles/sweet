import React from "react";
import "./Item.css";

//componentes externos
import Button from '@material-ui/core/Button';
//import CartContext from "../../context/CartContext"


const Item = (props) => {
    //const { items, addItems} = useContext(CartContext);

const {Id, picture, flavor, price, stock} = props

    return(
        <div className="container-prod">
            <div className="prod-img">
                <img src= {picture} alt="imagen del prod"/>
            </div>
           
                <h5> {flavor}</h5>
                <p>${price}</p>
            <div className="botones-lista">
                <Button>Comprar</Button>
                <Button>Más info</Button>
            </div>
        </div>
    );
};
export default Item;