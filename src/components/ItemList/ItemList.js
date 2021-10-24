//import { IndeterminateCheckBox } from "@material-ui/icons";
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import Item from "../Item/Item"
import picture from "../../Img/images"
//import {Link} from "react-router-dom"
import Box from "@mui/material/Box";
import "./ItemList.css";
//Firebase
import db from "../../firebase"
import {collection, getDocs} from "firebase/firestore";


export default function ItemList () {
    
    const [items, setItems] = useState ([]);

//Función asíncrona de acceso a la DB para traer los items   
    async function getItems(db) {
        const ItemsCol = collection (db, "Items");
        const ItemsSnapshot = await getDocs(ItemsCol);
        const ItemsList = ItemsSnapshot.docs.map (doc => doc.data());
        return setItems(ItemsList)
    }

    const {categoryId} =useParams ()
    useEffect (() => {
        getItems(db) 
    },[])
   

    return (
        <div className={"container-general"}>

                    {items.length !==0 ?(
                            items.map((item)=> {
                                return(
                                    <Item 
                                    key={`item-${item.id}`} 
                                    category={item.category} 
                                    flavor={item.flavor} 
                                    price={item.price} 
                                    image={item.picture} 
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