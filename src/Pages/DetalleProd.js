import React from "react"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

export default function DetalleProd (){
    //const {itemId} = useParams()
    //console.log("parametros: ", useParams())

    return(
        <div>
        <h1>Detalle del producto</h1>
        <ItemDetailContainer/>
        </div>
    );
}