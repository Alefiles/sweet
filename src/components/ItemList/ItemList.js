//import { IndeterminateCheckBox } from "@material-ui/icons";
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import Item from "../Item/Item";
import "./ItemList.css"
import galleVainilla from "../../img/images/galletas_vainilla"
import galleMarmolada from "./galleta_vainilla_chocolate.jpg"
import galleVainillaChispas from "./galletas_vainilla_chispas.jpg"
import galleChocoChispas from "./galletas_chocolate_chipsbco.jpg"
import galleChoco from "./galleta_choco.jpg"
import galleCafe from "./galleta_cafe.jpg"
import galleLimon from "./galleta_limon.jpg"
import galleCafeCardamomo from "./galleta_cafe.jpg"
import galleNaranja from "./galletas_naranja.jpg"
import galleJengibre from "./galletas_jengibre.jpg"
import galleMani from "./galleta_manteca_mani.jpg"
import rollCanela from "./rolls_canela.jpg"
//import rollManzana from " ./rolls_manzana.jpg"
import loafBananaNuez from "./loaf_cake_banana_choconuez.jpg"
import loafBanana from "./loaf_cake_banana.jpg"
import loafMarmolado from "./loaf_cake_marmolado.png"
import loafZanahoria from "./loaf_cake_zanahoria.jpg"
import loafLimonAmapola from "./loaf_cake_limon_amapola.jpg"
import loafChocolate from "./loaf_cake_chocolate.JPG"
import loafVainilla from "./loaf_cake_vainilla"
import loafArandanos from "./loaf_cake_arandanos.jpg";


export default function ItemList () {
    const [items, setItems] = useState ([])

    useEffect (() => {
        const products = [
            { Id:1, category:"galletas", type:"tradicional", flavor:"vainilla", price: 100, stock: 100, picture: {galleVainilla}},
            { Id:2, category:"galletas", type:"tradicional", flavor:"vainilla y chocolate", price: 100, stock: 100, picture:{galleMarmolada}},
            { Id:3, category:"galletas", type:"tradicional", flavor:"vainilla y chips de chocolate", price: 100, stock: 100, picture:{galleVainillaChispas}},
            { Id:4, category:"galletas", type:"tradicional", flavor:"chocolate y chips blancos", price: 100, stock: 100, picture:{galleChocoChispas}},
            { Id:5, category:"galletas", type:"tradicional", flavor:"Chocolate", price: 100, stock: 100, picture:{galleChoco}},
            { Id:6, category:"galletas", type:"gourmet", flavor:"chocolate, café y nuez", price: 180, stock: 50, picture:{galleCafe}},    
            { Id:7, category:"galletas", type:"gourmet", flavor:"limón y amapola", price: 180, stock: 50, picture:{galleLimon}},   
            { Id:8, category:"galletas", type:"gourmet", flavor:"café y cardamomo", price: 180, stock: 50, picture:{galleCafeCardamomo}}, 
            { Id:9, category:"galletas", type:"gourmet", flavor:"naranja y chocolate", price: 180, stock: 50, picture:{galleNaranja}}, 
            { Id:10, category:"galletas", type:"gourmet", flavor:"jengibre y especias", price: 180, stock: 50, picture:{galleJengibre}}, 
            { Id:11, category:"galletas", type:"gourmet", flavor:"manteca de maní", price: 180, stock: 50, picture:{galleMani}}, 
            { Id:12, category:"rollos", type:"rolls", flavor:"canela", price: 220, stock: 50, picture:{rollCanela}},
            //{ Id:13, category:"rollos", type:"rolls", flavor:"manzana y canela", price: 220, stock: 50, picture:{rollManzana}},
            { Id:14, category:"loaf cakes", type:"gourmet", flavor:"banana con trozos de chocolate y nuez", price: 600, stock: 20, picture:{loafBananaNuez}},
            { Id:15, category:"loaf cakes", type:"tradicional", flavor:"banana", price: 220, stock: 20, picture:{loafBanana}},
            { Id:16, category:"loaf cakes", type:"tradicional", flavor:"marmolado", price: 220, stock: 20, picture:{loafMarmolado}},
            { Id:17, category:"loaf cakes", type:"gourmet", flavor:"zanahoria y nuez", price: 600, stock: 20, picture:{loafZanahoria}},
            { Id:18, category:"loaf cakes", type:"gourmet", flavor:"limón con amapola", price: 600, stock: 20, picture:{loafLimonAmapola}},
            { Id:19, category:"loaf cakes", type:"tradicional", flavor:"chocolate", price: 220, stock: 20, picture:{loafChocolate}},
            { Id:20, category:"loaf cakes", type:"tradicional", flavor:"vainilla", price: 220, stock: 20, picture:{loafVainilla}},
            { Id:21, category:"loaf cakes", type:"gourmet", flavor:"arandanos", price: 600, stock: 20, picture:{loafArandanos}},
        ];
        const promise = new Promise((resolve, reject) => {
            setTimeout(resolve (products), 2000)

        });
        promise.then(data =>setItems(data));
    },[])
    return (
        <div>
            { items && items.map((producto,Id) => {
                return(
                    <div>

                    <Item key={Id} picture={producto.picture} category={producto.category} flavor={producto.flavor} price={producto.price} stock={producto.stock}/>

                    </div>
                )
            })
        }
        </div>

    )
}