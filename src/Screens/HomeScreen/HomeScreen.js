import React from 'react';
import Product from '../../Components/Product/Product';
import products from '../../Data/data';
import './homeScreen.scss';

const HomeScreen = () => {
  return (
    <div id='wrapper'>
      {/* Will be iterating in the products/restaurants and forEach one,
      we display a Product/restaurant and its details */}
      {products.map((product) => (
        <Product
          image={product.image}
          name={product.name}
          title={product.title}
          promotion={product.promotion}
          desc={product.desc}
          rating={product.rating}
          deliveryDetails={product.deliveryDetails}
          deliveryCost={product.deliveryCost}
          deliveryTime={product.deliveryTime}
        />
      ))}
    </div>
  );
};

export default HomeScreen;
