import React from 'react';
import './CheckoutPg.style.css';
import {useStateValue} from '../../StateProvider';
import Checkout from '../Checkout/Checkout.component';
import './CheckoutPg.style.css';

function CheckoutPg() {
    const [{cart}]=useStateValue();
    return (
        <div>
            <div>
                {
                    cart?.length === 0 ? 
                    <h1 className="empty">Cart is Empty</h1> 
                    :
                    
                    cart.map((item)=>(
                        <Checkout
                            key={item.id} 
                            id={item.id}
                            name={item.name}
                            imageUrl={item.imageUrl}
                            price= {item.price}
                        />
                    ))
                    
                }
            </div>
            
        </div>
    )
}

export default CheckoutPg;
