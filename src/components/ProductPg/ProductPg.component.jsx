import React from 'react';
import Product from '../product/Product.component';

function ProductPg() {
    return (
    <div>
        <div className="products">
          
          <Product 
          id={1}
          name="Denim Jacket"
          price={1563}
          imageUrl="https://i.ibb.co/XzcwL5s/black-shearling.png"/>
          
          <Product
          id={2} 
          name= "Red Dots Dress"
          price={1999}
          imageUrl= 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png'/>
          
          <Product 
        id={3}
          name="Stripe"
          price={1233}
          imageUrl="https://i.ibb.co/KmSkMbH/striped-sweater.png"/>
          
          <Product
          id={4} 
          price={1533}
          name='Yellow Track Suit'
          imageUrl= 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png'/>
            
      </div>

      <div className="products row2">
        <Product 
        id={5}
          price={1233}
          name= 'Pink T-shirt'
          imageUrl= 'https://i.ibb.co/RvwnBL8/pink-shirt.png'/>
        <Product

        id={6} 
          price={1233}
           name= 'Burgundy T-shirt'
          imageUrl= 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png'/>
        
        <Product
        id={7} 
          price={1233}
          name= 'Floral T-shirt'
          imageUrl= 'https://i.ibb.co/qMQ75QZ/floral-shirt.png'/>
          
      </div>
    </div>
        
    )
}

export default ProductPg;
