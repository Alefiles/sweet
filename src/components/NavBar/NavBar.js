import "./NavBar.css";
import logo from "../../img/logoSS2.png";
import React, {useState} from "react"
import Button from "../Button/Button"
import Dropdown  from "../Dropdown/Dropdown";
import CartWidget from "../CartWidget/CartWidget";
import {NavLink} from "react-router-dom";


export default function NavBar (){
    const [categories, setcategory] =useState ([
        {   name: "Galletas",
            id:"1"},
        {  name: "Budines",
            id:"2"},
        {   name: "Rolls",
            id:"3"},
    ])
    const [click, setClick]=useState(false)
    const handleClick =() => setClick (!click)

return(
    <div>
        <nav className="nav-bar">
            <div className="logo-container">
               <NavLink><img src={logo} alt="logo"/></NavLink>
            </div>
        
            <div className="nav-menu" onClick={handleClick}>
                <i className={click? "fas fa-times": "fas fa-bars"}/>
                <ul className="nav-buttons">
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to ="/Nosotros">Nosotros</NavLink></li>
                    <li><NavLink to ="/Tienda">Tienda</NavLink></li>
                        
                             {categories.map((category)=> {
                                return <NavLink to={"/category/${category.Id}"}>{category.name}</NavLink>
                                })}
                        
                    <li><NavLink to="/contactanos">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
        <CartWidget/>
    </div>
);
}
