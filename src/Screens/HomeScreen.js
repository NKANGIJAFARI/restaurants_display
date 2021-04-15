import React from 'react';

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
