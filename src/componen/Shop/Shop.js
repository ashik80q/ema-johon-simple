import React, { useState } from 'react';
import fakeData from "../../fakeData";
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const  Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProduct] = useState(first10);
   const [cart, setCart] = useState ([]);

    const handeleAddProduct = (product) =>{
        console.log('Product added',product);
        const neCart = [...cart, product];
        setCart(neCart);
    }

    return (
        <div className="shop-container">
           <div className="product-container">
              {
                    products.map(product => <Product 
                        product={product}
                        handeleAddProduct ={handeleAddProduct}>

                        </Product>)
            }
            
           </div>
           <div className="cart-container">
               <Cart cart={ cart}></Cart>
           </div>
            
        </div>
    );
};

export default Shop ;