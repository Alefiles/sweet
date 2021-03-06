import React from "react";
import imgNosotros from "../Img/nosotros.jpg";
import "./Home.css";


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
                <h3> Somos un emprendimiento familiar.</h3>
                <p> Cocinamos con las mejores materias primas para brindarle a tu familia la misma calidad y amor que a la nuestra. Te invitamos a probar nuestros productos.
                </p>
            </div>
        </div>
        
    )
}
