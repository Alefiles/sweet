import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartWidget = ()=>{

<div className="shopping-cartNav">
                <Button variant="contained">
                    <FontAwesomeIcon icon={faShoppingCart}/>
                </Button>
                <p><itemCount/></p>
</div>
};
export default CartWidget;