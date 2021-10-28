import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import ErrorPage from "../Pages/ErrorPage";
import DetalleProd from "../Pages/DetalleProd";
import Carrito from "../Pages/Carrito";
import Tienda from "../Pages/Tienda";
import Nosotros from "../Pages/Nosotros";

//import ItemList from "../components/ItemList/ItemList"




export default function AppRouter () {
    return(
            <BrowserRouter>
                <NavBar/>
                    <Switch>
                        <Route path="/Contactanos" component ={Contact}/>
                        <Route path="/DetalleProd/:itemId" component ={DetalleProd}/>
                        <Route path="/category/:categoryId" component={Tienda}/>
                        <Route path="/Nosotros" component ={Nosotros}/>
                        <Route path="/Carrito" component ={Carrito}/>
                        <Route exact path="/" component ={Home}/> 
                        <Route path="*" component ={ErrorPage}/>
                    </Switch>
            </BrowserRouter>
    )
    };