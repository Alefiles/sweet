import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import ItemDetail from "./Components/ItemDetail/ItemDetail"


const  ItemDetailContainer = () =>{

    const [productDetail, setProductDetail] = useState ({})
    const {productId}=useParams ()

    useEffect (() => {
        const product = [
            { 
                Id:1,
                category:"galletas",
                type:"tradicional",
                flavor:"vainilla",
                price: 100,
                stock: 100,
                picture: galleVainilla,
        },
            { 
                Id:2, 
                category:"galletas", 
                type:"tradicional", 
                flavor:"vainilla y chocolate", 
                price: 100, 
                stock: 100, 
                picture:galleMarmolada,
            },
            { 
                Id:3, 
                category:"galletas", 
                type:"tradicional", 
                flavor:"vainilla y chips de chocolate", 
                price: 100, 
                stock: 100, 
                picture:galleVainillaChispas,
            },
            { 
                Id:4,
                category:"galletas", 
                type:"tradicional", 
                flavor:"chocolate y chips blancos", 
                price: 100, 
                stock: 100, 
                picture:galleChocoChispas,
            },
            { 
                Id:5, 
                category:"galletas", 
                type:"tradicional", 
                flavor:"Chocolate", 
                price: 100, 
                stock: 100, 
                picture:galleChoco,
            },
            { 
                Id:6, 
                category:"galletas", 
                type:"gourmet", 
                flavor:"chocolate, café y nuez", 
                price: 180, 
                stock: 50, 
                picture:galleCafe,
            },    
            { 
                Id:7, 
                category:"galletas", 
                type:"gourmet", 
                flavor:"limón y amapola", 
                price: 180, 
                stock: 50, 
                picture:galleLimon,
            },   
            { 
                Id:8, 
                category:"galletas", 
                type:"gourmet", 
                flavor:"café y cardamomo", 
                price: 180, 
                stock: 50, 
                picture:galleCafeCardamomo,
            }, 
            { 
                Id:9, 
                category:"galletas", 
                type:"gourmet", 
                flavor:"naranja y chocolate", 
                price: 180, 
                stock: 50, 
                picture:galleNaranja,
            }, 
            { 
                Id:10, 
                category:"galletas", 
                type:"gourmet", 
                flavor:"jengibre y especias", 
                price: 180, 
                stock: 50, 
                picture:galleJengibre,
            }, 
            { 
                Id:11, 
                category:"galletas", 
                type:"gourmet", 
                flavor:"manteca de maní", 
                price: 180, 
                stock: 50, 
                picture:galleMani,
            }, 
            { 
                Id:12, 
                category:"rolls", 
                type:"rolls", 
                flavor:"canela", 
                price: 220, 
                stock: 50, 
                picture:rollCanela,
            },
            { 
                Id:13, 
                category:"rolls", 
                type:"rolls", 
                flavor:"manzana y canela", 
                price: 220, 
                stock: 50, 
                picture:rollManzana,
            },
            { 
                Id:14, 
                category:"loaf cakes", 
                type:"gourmet", 
                flavor:"banana con trozos de chocolate y nuez", 
                price: 600, 
                stock: 20, 
                picture:loafBananaNuez,
            },
            { 
                Id:15, 
                category:"loaf cakes", 
                type:"tradicional", 
                flavor:"banana", 
                price: 220, 
                stock: 20, 
                picture:loafBanana,
            },
            { 
                Id:16, 
                category:"loaf cakes", 
                type:"tradicional", 
                flavor:"marmolado", 
                price: 220, 
                stock: 20, 
                picture:loafMarmolado,
            },
            { 
                Id:17, 
                category:"loaf cakes", 
                type:"gourmet", 
                flavor:"zanahoria y nuez", 
                price: 600, 
                stock: 20, 
                picture:loafZanahoria,
            },
            { 
                Id:18, 
                category:"loaf cakes", 
                type:"gourmet", 
                flavor:"limón con amapola", 
                price: 600, 
                stock: 20, 
                picture:loafLimonAmapola,
            },
            { 
                Id:19, 
                category:"loaf cakes", 
                type:"tradicional", 
                flavor:"chocolate", 
                price: 220, 
                stock: 20, 
                picture:loafChocolate,
            },
            { 
                Id:20, 
                category:"loaf cakes", 
                type:"tradicional", 
                flavor:"vainilla", 
                price: 220, 
                stock: 20, 
                picture: loafVainilla,
            },
            { 
                Id:21, 
                category:"loaf cakes", 
                type:"gourmet", 
                flavor:"arandanos", 
                price: 600, 
                stock: 20, 
                picture:loafArandanos,
            },
        ];
        const filteredByFlavor = product.filter(el => productId)
        const promise = new Promise((resolve, reject) => {
            setTimeout(resolve (product), 2000)

        });
        promise.then((data) =>setProductDetail(data));
    },[])
    
    return (
        <div className="product-detail-container">

            <ItemDetail category={ItemDetail.category} flavor={ItemDetail.flavor} picture={ItemDetail.picture} price={ItemDetail.price}/>

        </div>

    )
}


export default ItemDetailContainer;