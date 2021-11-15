import React, {useState, useEffect, useContext} from "react"
import ItemCount from "../ItemCount/ItemCount";
import {CartContext} from "../../context/CartContext"
import "./ItemDetail.css"

//Componentes externos
import Button from '@material-ui/core/Button';
import {NavLink, useParams} from "react-router-dom";


export default function ItemDetail (props) {

//Llamo al contexto del carro de compras
const [cart, setCart] = useContext(CartContext);

const {itemId} = useParams();
const {Id, category, flavor, price, picture, stock, description} = props
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




return (
        <div>
            <h2>{category}</h2>
                <div className="prodImg">
                    <img src={picture} alt="imagen producto"/>
                </div>
                <div className="itemInfo">
                    <h3>{flavor}</h3>
                    <p>{description}</p>
                    <p> precio: ${price}</p>
                    <div className="buttonContainer">
                    <ItemCount onAdd={onAdd} delItem={delItem} stock={stock} quantity={items} buy={buy}/>
                    
                    <Button onClick ={() => buy ()} >Comprar</Button>
                    </div>   
                        <NavLink to="/"><Button> Inicio </Button></NavLink>
                    
                </div>
        </div>

    )
}