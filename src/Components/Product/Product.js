import React from 'react';
import './product.scss';

const Product = ({
  image,
  desc,
  title,
  promotion,
  rating,
  deliveryCost,
  deliveryTime,
  deliveryDetails,
}) => {
  return (
    <div className='product' id='product'>
      <div className='product__imgWrapper'>
        <img src={image} alt='' />
      </div>
      <div className='product__details'>
        <div className='product__details--left'>
          <h2>{title}</h2>
          <p>{desc}</p>
          <h6>{deliveryCost}</h6>
          <p className='promotion'>
            <i class='fas fa-tag'></i>
            {promotion}
          </p>
        </div>
        <div className='product__details--right'>
          <span>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
          </span>
          <h6>{deliveryTime}</h6>
          <h6>{deliveryDetails}</h6>
        </div>
      </div>
    </div>
  );
};

export default Product;
