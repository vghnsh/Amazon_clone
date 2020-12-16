import React from 'react';
import './Product.style.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {useStateValue} from '../../StateProvider';
import Fade from 'react-reveal/Fade';

function Product({id,name,imageUrl,price}) {
   
    const [,dispatch] = useStateValue();
    const addToCart=()=>{
       
        dispatch({
            
            type:"ADD_TO_CART",
            item:
            {
            id:id,
            name:name,
            imageUrl:imageUrl,
            price:price
            }
        });
    
    }
    return (
        <div className="product_main">
            <Fade>
            <div className="name">
            <h3>{name}</h3>

            </div>
            
            <img
            className="image"
            src={imageUrl}
            alt="img"
            />
            <div
            className="price">

            <h3>{"₹"+ price}</h3>
            <Link to="/checkout">

            <Button className="btn" onClick={addToCart} variant="dark">Add to cart</Button>
            
            </Link>
            </div>
            </Fade>
            
            
        </div>
    )
}

export default Product;
