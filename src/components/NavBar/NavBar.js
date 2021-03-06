import React, {useState, useParams, useEffect} from "react"
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


export default function NavBar(props) {
//Categorías para filtro de NavBar mock y resolución con promise
const [categories, setcategory] = useState([
    { name: "Galletas", id: "1" },
    { name: "Budines", id: "2" },
    { name: "Rolls", id: "3" },
]);

const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};
const handleClose = () => {
    setAnchorEl(null);
};

    return (
        <AppBar position="static" className="navigate">
            <Toolbar>
                <div className="logo-container">
                    <NavLink to="/">
                        {" "}
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
                                <NavLink to="/Nosotros">Nosotros</NavLink>
                            </Button>
                        </li>
                        <li>
                            <Button
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            color="inherit"
                            >
                            Tienda
                            </Button>
                        </li>
                            <li>
                                <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                >
                                    {categories.map((category, index) => {
                                        return (
                                            <MenuItem key={index}>
                                                <NavLink onClick={handleClose}
                                                to={`/category/${category.name}`}>
                                                {category.name}
                                                </NavLink>
                                            </MenuItem>
                                        );
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
    <CartWidget />
    </Toolbar>
    </AppBar>
);
}