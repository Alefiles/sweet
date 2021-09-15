import "./NavBar.css";
import logo from "c:/Users/AleS/Desktop/Curso fullstack/React/Proyecto/sweet/src/img/logoSS2.png";
//External components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const NavBar =()=>{

return(
    
    <AppBar  position="static" className="navigate">
        <Toolbar>
            <Typography variant="h6">
                <div className="logo-container">
                    <img src={logo} className="logo-app" alt="logo Sweet" />
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
        </Toolbar>
    </AppBar>
);
}
export default NavBar;