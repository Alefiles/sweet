import React, {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom"
import Item from "../Item/Item"


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

    let ItemsCol =collection(db, "Items");
    const ItemsSnapshot = await getDocs(ItemsCol);
    console.log("itemsCol: ", ItemsCol)
    const ItemsList = ItemsSnapshot.docs.map (doc => doc.data());
    console.log("ItemsSnapshot: ", ItemsSnapshot)
    const ItemsFilter = ItemsList.filter(item => item.category === categoryId)
    return setItems(ItemsFilter)
}

useEffect (() => {
    getItems(db) 
},[categoryId])
return (
    <div className={"container-general"}>
    
    {console.log("lista de prod: ", items)}
                    {items.length !==0 ?(
                            items.map((item, Id)=> {
                                return(
                                    <Item 
                                    key={`item-${item.Id}`} 
                                    category={item.category} 
                                    flavor={item.flavor} 
                                    price={item.price} 
                                    picture={item.picture} 
                                    Id={item.Id} />
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