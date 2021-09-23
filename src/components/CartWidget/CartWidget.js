import React from "react";
import "./CartWidget.css"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartWidget =()=>{
return(
<div className="shopping-cartNav">
                <Button variant="contained">
                    <FontAwesomeIcon icon={faShoppingCart}/>
                </Button>

</div>
)};
export default CartWidget;