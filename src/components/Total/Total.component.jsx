import React from 'react';
import './total.style.css';
import Button from 'react-bootstrap/Button';
import CheckoutPg from '../CheckoutPg/CheckoutPg.component';
import {useStateValue} from '../../StateProvider';

import {getTotal} from '../../reducer';


import { useHistory } from "react-router-dom";

function Total() {

    const history = useHistory();

    const [{cart,isSign}]=useStateValue();

    const pay=()=>
    {
        if(isSign === true){
            history.push("/Pay");
        }
        else{
            history.push("/SignIn");
        }
        
        
    };

    return (
        <div className="total">
            <div className="items">
                <CheckoutPg ></CheckoutPg>
            </div>
            <div className="Pay">
                {
                    cart?.length === 0 ? 
                    <h1>.</h1> 
                    :
                    <div>
                        
                        
                        <Button onClick={pay} className="btn_ch top"  variant="dark" >Proceed To Pay: {getTotal(cart)} </Button>
                        
                        
                        
                    </div>

                    
                }
            </div>

            
        </div>
    )
}

export default Total;
