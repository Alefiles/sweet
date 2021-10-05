import React from "react";
import imagenPpal from "../img/choco_cookies2.png"


export default function Home (props){
    const {greeting} =props
    return(
        <div className="homePg">
        <img src={imagenPpal} alt="imagen principal"/>
        <h1>{greeting}</h1>
        </div>
    )
}




