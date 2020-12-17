import React, {useEffect} from 'react';

import './App.style.scss';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './components/header/Header.component';
import Banner from './components/banner/Banner.component';
import ProductPg from './components/ProductPg/ProductPg.component';
import CheckoutPg from './components/CheckoutPg/CheckoutPg.component';
import Total from './components/Total/Total.component';
import SignUp from './components/SignUp/SignUp.component';
import SignIn from './components/SignIn/SignIn.component';
import {useStateValue} from './StateProvider';
import {auth} from './firebase';


import Pay from './components/Pay/Pay.component';

function App() {

  const [,dispatch] = useStateValue();

  useEffect(()=>{
    const unsubsribe= auth.onAuthStateChanged((authUser)=>{
    
      if(authUser){
        
        
        dispatch({
            
          type:"SET_CURRENT_USER",
          user:authUser,
          isSign:true
      });
      }
      else{
       
        dispatch({
        
          type:"SET_CURRENT_USER",
          user:null,
          isSign:false
          
      });
        
      }
      return()=>{
        unsubsribe();
      };
    });
  },[]);

  return (
    <div className="App">
     
      <Router>
        <Switch>

          <Route path="/account">
            <Header/>
            <Banner/>
            <ProductPg/>
          </Route>

          <Route path="/checkout">
           <Header/>
           <CheckoutPg /> 
          </Route>

          <Route path="/checkout_total">
           <Header/>
           
           <Total/>
          </Route>


          <Route path="/SignIn">
            <SignIn/>    
          </Route>

          <Route path="/SignUp">
            <SignUp/>    
          </Route>

          <Route path="/Pay">
            <Pay/>    
          </Route>


          <Route  path="/">
            <Header/>
            <Banner/>
            <ProductPg/>
          </Route>
        </Switch>
      </Router >
      
        
    </div>
  );
}
export default App;
