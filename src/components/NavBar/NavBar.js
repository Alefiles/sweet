import React, {useState, useEffect, useContext} from "react"
import "./NavBar.css";
import logo from "../../Img/logoSS2.png";
import CartWidget from "../CartWidget/CartWidget";
//componentes externos
import {NavLink} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
//Firebase
import db from "../../firebase"
import{collection, getDocs, query, where} from "firebase/firestore"

export default function NavBar (props) {
   /* const [categories, setcategory] =useState ([
        {   name: "Galletas",
            Id:"1"},
        {  name: "Budines",
            Id:"2"},
        {   name: "Rolls",
            Id:"3"},
    ])*/

    const [categories, setCategories] = useState ([]);

    async function getCategory(db) {
        const categoryCol = collection (db, "Items");
        
        const q= query(categoryCol, where("category", "==", true))

        //recupero los resultados
        const categorySnapshop = await getDocs(q);
        categorySnapshop.forEach((doc)=>{
            console.log(doc.category,"=>", doc.data());
        const categoryList =categorySnapshop.docs.map (doc.category,"=>", doc.data())
        return setCategories(categoryList)
        });
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };

return(
    <AppBar  position="static" className="navigate">
        <Toolbar>
                <div className="logo-container">
                    <NavLink to="/">
                        <img src={logo} className="logo-app" alt="logo Sweet" />
                    </NavLink>
                </div>
                <div className="buttons-div">
                    <ul className="nav-buttons">
                        <li>
                            <Button color="inherit">
                                <NavLink to="/">Inicio</NavLink>
                            </Button>
                        </li>
                        <li>
                            <Button color="inherit">
                                <NavLink to ="/Nosotros">Nosotros</NavLink>
                            </Button>
                        </li>
                        <li>
                            <Button
                                id="basic-button"
                                aria-controls="basic-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                color="inherit">
                                    Tienda
                            </Button>
                        </li>
                        <li>
                            <Menu class="menu-dropdwn"
                                id="basic-menu" 
                                anchorEl={anchorEl} 
                                open={Boolean(anchorEl)} 
                                onClose={handleClose}
                            >
                                {categories.map((category, index)=> {
                                return (
                                <MenuItem key={index}>
                                    <NavLink to={`/category/${category.Id}`}>{category.name}</NavLink>
                                </MenuItem>);
                                })}
                            </Menu>
                        </li>
                        <li>
                            <Button color="inherit">
                                <NavLink to="/contactanos">Contacto</NavLink>
                            </Button>
                        </li>
                    </ul>
                </div>
        
                <CartWidget/>
        </Toolbar>
    </AppBar>
);
}