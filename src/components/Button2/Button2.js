import React from "react"
import "./Button.css"
import {NavLink} from "react-router-dom"

export function Button () {
    return(
    <NavLink to="sign-up">
        <button className="btn">Registrate</button>
    </NavLink>
    );
}