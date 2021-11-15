import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import db from "../../firebase"
import "./ItemDetailContainer.css"

import { doc, getDoc } from "@firebase/firestore";


const  ItemDetailContainer = () =>{

    const [productDetail, setProductDetail] = useState ({})
    const {itemId}=useParams ()

    async function getItem(db) {

        let ItemDetail =doc(db, "Items",itemId);    
        const ItemSnapshot = await getDoc(ItemDetail);
        
        return setProductDetail(ItemSnapshot.data());
    }
    
    useEffect (() => {
        getItem(db) 
    },[itemId])

    
    return (
        <div className="containerProd">
        {console.log("detalle prod: ", productDetail)}
            <ItemDetail 
            category={productDetail.category} 
            flavor={productDetail.flavor} 
            picture={productDetail.picture} 
            price={productDetail.price}
            stock={productDetail.stock}
            description={productDetail.description}/>

        </div>

    )
}


export default ItemDetailContainer;