import React, { createContext, useState } from "react";
//External Components
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import { Category } from "@material-ui/icons";
import { Toast } from "reactstrap";


export const CartContext = createContext ();

export const CartProvider =(props) => {
    const[cart, setCart]=useState([]);

//agrega items al carrito desde el contador
    const addItem = (items, count) => {
        const newItem ={ ...items, contador: count};
            if (!isInCart(item)) {
                setCart([...cart, newItem]);
            }
            else{
                let foundItem = cart.find((el) => el.id === item.id);
                foundItem.contador = foundItem.contador + count;
                setCart([...cart]);
            }
    };
// valida si el item está en el carrito
    const isInCart =(item) => {
        return cart && cart.some((element) => element.id ===item.id);
    };

// eliminar un item del carrito
    const deleteItem = (id) => {
        const remItem = cart.filter((el) => el.id !== id);
        setCart([...remItem]);
        notifyError("Eliminaste el item del carrito");
    };

    const notifyError = (text) => Toast.error(text);
    const notifySuccess = (text) => Toast.success(text);

// vacía completamente el carrito
    const clear = () => {
        return setCart ([]);
    };

// suma el importe total a pagar
    const totalCarrito =()=>
        cart.reduce(
            (prevValue, currentValue) =>
                prevValue + currentValue.price * currentValue.contador,0);

// suma la cantidad total de items del carrito
    const qTotalCarrito =()=>
        cart.reduce(
            (prevValue, currentValue) => prevValue + currentValue.contador,0
        );

        console.log("Total carrito: ", totalCarrito());

    return (
        <CartContext.Provider
            value ={{
                cart,
                setCart,
                addItem,
                totalCarrito,
                qTotalCarrito,
                deleteItem,
                clear,
                notifyError,
                notifySuccess,
            }}>
                {props.children}
            </CartContext.Provider>
    );
};
