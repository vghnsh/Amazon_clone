import React from 'react';
import Button from 'react-bootstrap/Button';
import { useStateValue } from '../../StateProvider';
import './Checkout.style.css';

import Jump from 'react-reveal/Jump';

function Checkout({id,name,imageUrl,price}) {
    const [,dispatch]= useStateValue();
    const remove=()=>{
        dispatch({
            type:"REMOVE_FROM_CART",
            id : id
        })
    }

    return (
        <Jump>

                <div className="MainCheckout">
            <div className="center">
            <h2>
                {name}
            </h2>
            
            </div>
            <img
                className="img_ch"
                src={imageUrl}
                alt="img"
            >
            
            </img>
            <div className="check_bot center">
            <h2 className="price">
                {price}
            </h2>
            <Button className="btn_ch"  onClick={remove} variant="dark">Remove from cart</Button>
           
            </div>
            
            
        </div>
        </Jump>
    )
}

export default Checkout;
