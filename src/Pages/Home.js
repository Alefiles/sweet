import React from "react";
import imagenPpal from "../Img/choco_cookies2.png"
import "./Home.css"

export default function Home (props){
    const {greeting="¡Aloha!, ¡Bienvenidos!"} =props
    return(
        <div className="homePg">
            <h1>{greeting}</h1> 
            <h2> Los invitamos a un viaje de sabores que los deleitarán en sus desayunos y meriendas</h2>
            <div id="img-ppal">
                <img  id="imagen-home"src={imagenPpal} alt="imagen principal"/>
            </div>
            <div className="greeting">
                
            
            
            </div>
       

        </div>

    )
}




