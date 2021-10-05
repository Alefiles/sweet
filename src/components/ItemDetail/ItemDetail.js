import React, {useState, useEffect} from "react"
import Item from "./Components/Item/Item"


export default function ItemDetail () {
 const { category, flavor, price, picture} = props
    return (
        <div className="product-detail">
            <h2>{props.category}</h2>
                <div>
                    <img src={props.picture} alt="imagen producto"/>
                </div>
                <div>
                    <h3>{props.flavor}</h3>
                    <p> precio: ${props.price}</p>
                </div>
        </div>

    )
}