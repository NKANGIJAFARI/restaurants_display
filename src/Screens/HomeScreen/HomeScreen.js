import React from 'react';
import Product from '../../Components/Product/Product';
import products from '../../Data/data';
import './homeScreen.scss';

const HomeScreen = () => {
  const searchProducts = (searchText) => {
    const existingProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase()),
    );

    console.log(existingProducts);
  };

  return (
    <div id='wrapper'>
      <div className='header__search'>
        <input
          type='text'
          placeholder='Search in chats'
          onChange={(e) => {
            searchProducts(e.target.value);
            e.target.value ? setSearching(true) : setSearching(false);
          }}
        />
      </div>
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
