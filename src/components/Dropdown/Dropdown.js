import React, {useState} from "react"
import "./Dropdown.css";
import {NavLink} from "react-router-dom";

export default function Dropdown () {

    const [categories, setcategory] =useState ([
        {   name: "Galletas",
            Id:"1"},
        {  name: "Budines",
            Id:"2"},
        {   name: "Rolls",
            Id:"3"},
    ])
    const [click, setClick] =useState(false)
    const handleClick =() => setClick(!click)
    return(
        <>
        <ul onClick={handleClick} className={click ? "dropdown-menu clicked": "dropdown-menu"}>
        {categories.map((category)=> {
            return  <NavLink to={"/category/${category.Id}"}>{category.name}</NavLink>
            })}
        </ul>
        </>
    );
}