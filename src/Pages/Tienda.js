import React from "react"
//import {useParams} from "react-router-dom"
import ItemList from "../components/ItemList/ItemList"

export default function Tienda (){
   // const {category} = useParams()
    //console.log("parametros:",useParams())
    return(
        <div>
        <ItemList/>
        </div>
    );
}