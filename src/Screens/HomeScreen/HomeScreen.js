import React from 'react';
import Product from './components/Product';
import products from '../../Data/data';

const HomeScreen = () => {
  return (
    <div id='wrapper'>
      {products.map((product) => (
        <Product
          image={product.image}
          name={product.name}
          title={product.title}
          promotion={product.promotion}
          desc={product.desc}
          rating={product.rating}
          delivery={product.delivery}
          deliveryCost={product.deliveryCost}
          deliveryTime={product.deliveryTime}
        />
      ))}
    </div>
  );
};

export default HomeScreen;
