import "./NavBar.css";
import logo from "../../img/logoSS2.png";
import React, {useState} from "react"
//External components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
return(
    
    <AppBar  position="static" className="navigate">
        <Toolbar>
            <Typography variant="h6">
                <div className="logo-container">
                    <img src={logo} alt="logo"/>
                </div>
            </Typography>
            <div className="buttons-div">
                <ul className="nav-buttons">
                    <li><NavLink to="/"><Button color="inherit">Inicio</Button></NavLink></li>
                    <li><NavLink to ="/Nosotros"><Button color="inherit">Nosotros</Button></NavLink></li>
                    <Button color="inherit">Tienda</Button>
                    {categories.map((category)=> {
                        return <NavLink to={"/category/${category.Id}"}>{category.name}</NavLink>
                    })}
                    <li><NavLink to="/contactanos"><Button color="inherit">Contacto</Button></NavLink></li>
                </ul>
            </div>
            <CartWidget/>
        </Toolbar>

    </AppBar>
);
}
