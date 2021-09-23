//import React from "react";
import "./ItemListContainer.css";
import Product from "../Product/Product";
import imagenPpal from "../../img/choco_cookies2.png"


const ItemListContainer =(props)=>{
  const {greeting} = props
        return(
        <div className="listContainer">
            <img src={imagenPpal} alt="imagen principal"/>
            <h1>{greeting}</h1>
            
            <Product/> 
            
        </div>
        )
    }

export default ItemListContainer;