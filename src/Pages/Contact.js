import React, {useState} from "react";
import ContactInput from "../components/Contact/ContactInput";

export default function Contact (){
 
        const [name, setName]= useState ()
        const showSaludo= (text) => {
            setName (text)
        }
    return (
        <div className="ContactContainer">
            <h1> ¡Contactanos!</h1>
               <h2> Muchas gracias {name} por tu mensaje</h2>
            <ContactInput showSaludo={showSaludo}/>

        </div>

    )
};