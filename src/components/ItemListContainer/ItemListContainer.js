//import React from "react";
import React from "react";
import "./ItemListContainer.css";
//import Item from "../Item/Item";
import ItemList from "../ItemList/ItemList"


export default function ItemListContainer (props){
    const {stock, Id, category} = props
        return(
        <div className="listContainer">
            <h3>{category}</h3>
            <div className="listaProd">
            <ItemList/>
            </div>
            
        </div>
        )
    };