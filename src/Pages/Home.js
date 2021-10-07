import React from "react";
import imagenPpal from "../img/choco_cookies2.png"
import "./Home.css"

export default function Home (props){
    const {greeting="¡Aloha!, ¡Bienvenidos!"} =props
    return(
        <div className="homePg">
            <h1>{greeting}</h1> 
            <div id="img-ppal">
                <img  id="imagen-home"src={imagenPpal} alt="imagen principal"/>
            </div>
            <div className="greeting">
                
            
            <h2> Los invitamos a un viaje de sabores que los deleitarán en sus desayunos y meriendas</h2>
            </div>
       

        </div>

    )
}




