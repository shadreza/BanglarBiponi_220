import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";

function Checkout() {
    const[{basket,user},dispatch] = useStateValue();

    return( 
        
    <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__ad" src="https://media-exp1.licdn.com/dms/image/C561BAQHCZ83vKVJVkg/company-background_10000/0?e=2159024400&v=beta&t=6EhQmBBtUy-Sa0neSKmPHus9woro1FRyJQvF8bkqAH4" alt="..."/>
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout__title">
                    Your Shopping Basket!
                </h2>
                {basket.map(item =>(
                    <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                    />
                ))}
            </div>
        </div>
        
        <div className="checkout__right">
            <Subtotal />
        </div>
        
    </div>
    
    );
}

export default Checkout;