import React from 'react';
import { Link } from 'react-router-dom';
import './Header.style.css';
import {ReactComponent as ShoppingIcon} from './shopping-bag.svg';

import {useStateValue} from '../../StateProvider';
import {auth} from '../../firebase';
import logo from '../header/logo9.png';


import SearchIcon from '@material-ui/icons/Search';

function Header() {
    const [{cart,user,isSign}] = useStateValue();
   

    const signOut=(event)=>{
        event.preventDefault();
        
        auth.signOut();
        
      };

    
    //state,dispatch
    
    return (
        <nav className="header">
            <Link className="amz" to="/">
            <img 
            className="logo"
            src={logo} 
            alt="Logo"/>
            </Link>
           
            {
                user?.displayName? 
                <Link className="link" to="/">{user.displayName}</Link>
                :<Link className="link" to="/" >Account</Link>
            }
            
            <Link className="link" to="/checkout_total">
            Checkout
            </Link>
            {
                isSign ? 
                <Link
                className="link" 
                onClick={signOut} 
                to="/"
                
                >Logout 
                </Link>
                :
                
                <Link className="link" to="/SignIn">
                SignIN
                </Link>
               
            }
            
            <Link to="/checkout">
            <div className="cart-icon">
                
            <ShoppingIcon
            className="shop-icon"/>    
            <span className="item-count">
            {cart?.length}
            </span>
            </div>
            
            </Link>
            
        </nav>
    )
}
export default Header;