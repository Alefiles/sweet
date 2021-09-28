import "./NavBar.css";
import logo from "../../img/logoSS2.png";
//External components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CartWidget from "../CartWidget/CartWidget";


const NavBar =()=>{
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
                    <li><Button color="inherit">Inicio</Button></li>
                    <li><Button color="inherit">Nosotros</Button></li>
                    <li><Button color="inherit">Tienda</Button></li>
                    <li><Button color="inherit">Contacto</Button></li>
                </ul>
            </div>
            <CartWidget/>
        </Toolbar>

    </AppBar>
);
}
export default NavBar;