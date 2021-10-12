import React, {useState, useEffect} from "react"
import ItemDetail from "./Components/ItemDetail/ItemDetail"


const  ItemDetailContainer = () =>{

    const [productDetail, setProductDetail] = useState ({})

    useEffect (() => {
        const product = [
            { Id:1, 
            category:"galletas", 
            type:"tradicional", 
            flavor:"vainilla", 
            price: 100, 
            stock: 100, 
            picture:"../../img/galletas_vainilla"
        },
            
        ];
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