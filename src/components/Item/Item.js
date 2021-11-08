import React, {useState, useEffect, useContext} from "react"
import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";

//componentes externos
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
//import CartContext from "../../context/CartContext"


const Item = (props) => {
    //const { items, addItems} = useContext(CartContext);

const {Id, category, flavor, price, picture, stock} = props
const [items, setItems] = useState(1)

const buy = () => {
    
    alert("Vas a agregar items al carrito")
};


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
        <div className="container-prod">
                <div className="prod-img">
                    <img src= {picture} alt="imagen del prod"/>
                </div>
                <div className="item-info">
                    <h3> {flavor}</h3>
                    <p>${price}</p>
                </div>
                <div className="botones-lista">
                    <ItemCount onAdd={onAdd} delItem={delItem} stock={stock} quantity={items} buy={buy}/>
                
                    <Link to={`/DetalleProd/${Id}`}><Button>Más info</Button></Link>
                </div>  
        </div>
    );
};
export default Item;