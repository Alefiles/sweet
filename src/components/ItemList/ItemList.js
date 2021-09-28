import React, {useState, useEffect} from "react";

export default function ItemList () {
    const [items, setItems] = useState ([])

    useEffect (() => {
        const products = [
            { id:1, category:"galletas", type:"tradicional", flavor:"vainilla", price: 100, stock: 100, picture:""},
            { id:2, category:"galletas", type:"tradicional", flavor:"vainilla y chocolate", price: 100, stock: 100, picture:""},
            { id:3, category:"galletas", type:"tradicional", flavor:"vainilla y chips de chocolate", price: 100, stock: 100, picture:""},
            { id:4, category:"galletas", type:"tradicional", flavor:"chocolate y chips blancos", price: 100, stock: 100, picture:""},
            { id:5, category:"galletas", type:"tradicional", flavor:"Chocolate", price: 100, stock: 100, picture:""},
            { id:6, category:"galletas", type:"gourmet", flavor:"chocolate, café y nuez", price: 180, stock: 50, picture:""},    
            { id:7, category:"galletas", type:"gourmet", flavor:"limón y amapola", price: 180, stock: 50, picture:""},   
            { id:8, category:"galletas", type:"gourmet", flavor:"café y cardamomo", price: 180, stock: 50, picture:""}, 
            { id:9, category:"galletas", type:"gourmet", flavor:"naranja y chocolate", price: 180, stock: 50, picture:""}, 
            { id:10, category:"galletas", type:"gourmet", flavor:"jengibre y especias", price: 180, stock: 50, picture:""}, 
            { id:11, category:"galletas", type:"gourmet", flavor:"manteca de maní", price: 180, stock: 50, picture:""}, 
            { id:12, category:"rollos", type:"rolls", flavor:"canela", price: 220, stock: 50, picture:""},
            { id:13, category:"rollos", type:"rolls", flavor:"manzana y canela", price: 220, stock: 50, picture:""},
            { id:14, category:"loaf cakes", type:"gourmet", flavor:"banana con trozos de chocolate y nuez", price: 600, stock: 20, picture:""},
            { id:15, category:"loaf cakes", type:"tradicional", flavor:"banana", price: 220, stock: 20, picture:""},
            { id:16, category:"loaf cakes", type:"tradicional", flavor:"marmolado", price: 220, stock: 20, picture:""},
            { id:17, category:"loaf cakes", type:"gourmet", flavor:"zanahoria y nuez", price: 600, stock: 20, picture:""},
            { id:18, category:"loaf cakes", type:"gourmet", flavor:"limón con amapola", price: 600, stock: 20, picture:""},
            { id:19, category:"loaf cakes", type:"tradicional", flavor:"chocolate", price: 220, stock: 20, picture:""},
            { id:16, category:"loaf cakes", type:"tradicional", flavor:"vainilla", price: 220, stock: 20, picture:""},
        ];
        const promise = new Promise((resolve, reject) => {
            setTimeout(resolve (products), 2000)

        });
        promise.then(data =>setItems(data));
    },[])
    return (
        <div>
            { items && items.map((producto,id) => {
                return(
                    <product key={id} picture={producto.picture} category={producto.category} flavor={producto.flavor} price={producto.price} stock={producto.stock}/>
                )
            })
        }
        </div>

    )
}