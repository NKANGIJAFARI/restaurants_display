import React, { useState, useEffect } from 'react';
import Product from '../../Components/Product/Product';
import Allproducts from '../../Data/data';
import './homeScreen.scss';

const HomeScreen = () => {
  const [searching, setSearching] = useState(false);
  const [products, setProducts] = useState(Allproducts);
  const [keyWord, setKeyWord] = useState('');

  const searchProducts = (e) => {
    if (e.target.value) {
      const existingProducts = Allproducts.filter((product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase()),
      );
      setProducts(existingProducts);
    } else {
      setProducts(Allproducts);
    }

    console.log(e.target.value);
  };

  return (
    <div id='wrapper'>
      <div className='header__search'>
        <input
          type='text'
          placeholder='Search in restaurants'
          onChange={searchProducts}
        />
      </div>
      {/* Will be iterating in the products/restaurants and forEach one,
      we display a Product/restaurant and its details */}
      {products.map((product, index) => (
        <Product
          key={index}
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
