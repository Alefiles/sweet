import React, {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom"
import Item from "../Item/Item"
import picture from "../../Img/images"


//componentes externos
import Box from "@mui/material/Box";
import "./ItemList.css";
//Firebase
import db from "../../firebase"
import {collection, getDocs, where, query} from "firebase/firestore";


export default function ItemList () {



    const [items, setItems] = useState ([]);
    const {categoryId} = useParams();

//Función asíncrona de acceso a la DB de Firebase para traer los items   
async function getItems(db) {
    let ItemsCol = categoryId
        ?query(
            collection(db, "items"),
            where ("category", "==", categoryId)
        )
    : collection(db, "Items");
    const ItemsSnapshot = await getDocs(ItemsCol);
    const ItemsList = ItemsSnapshot.docs.map (doc => doc.data());
    return setItems(ItemsList)
}

useEffect (() => {
    getItems(db) 
},[categoryId])
    return (
        <div className={"container-general"}>

                    {items.length !==0 ?(
                            items.map((item, categoryId)=> {
                                return(
                                    <Item 
                                    key={`item-${item.id}`} 
                                    category={item.categoryId} 
                                    flavor={item.flavor} 
                                    price={item.price} 
                                    picture={item.picture} 
                                    id={item.id} />
                                )
                                })
                    ) : (
                        <Box sx={{display:"flex"}} 
                        style={{height:500, justifyContent:"center", alignItems:"center"}}>
                        </Box>
                    )}
        </div>
    );
}