//import React from "react";
import React from "react";
import "./ItemListContainer.css";
import Item from "../Item/Item";
import imagenPpal from "../../img/choco_cookies2.png"
import ItemList from "../ItemList/ItemList"


const ItemListContainer =(props)=>{
  const {greeting} = props
        return(
        <div className="listContainer">
            <img src={imagenPpal} alt="imagen principal"/>
            <h1>{greeting}</h1>
            <ItemList/>
            <Item stock={20} /> 
            
        </div>
        )
    }

export default ItemListContainer;