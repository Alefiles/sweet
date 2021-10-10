import React from "react";
import imgNosotros from "../img/nosotros.jpg"
import "./Nosotros.css"


export default function Nosotros (){
    
    return(
        <div className="nosotos-contenedor">
            <div className="nosotros-img-contenedor">
                <img id="nosotros-img" src={imgNosotros} alt="imagen nosotros"/>
            </div>
            <div>
                <h1> Nosotros </h1>
            </div>
            <div id="parrafo-nosotros">
                <p> Somos un emprendimiento familiar.
                    Cocinamos con las mejores materias primar para brindar a tu familia la misma calidad y amor que a la nuestra. Te invitamos a probar nuestros productos.
                </p>
            </div>
        </div>
        
    )
}
