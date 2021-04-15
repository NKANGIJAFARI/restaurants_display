import React from 'react';
import products from '../../Data/data';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <span>SHISHEO</span>
      </div>
      <div className='header__search'>
        <input
          type='text'
          placeholder='Search in chats'
          onChange={(e) => {
            searchProducts(e.target.value);
            // e.target.value ? setSearching(true) : setSearching(false);
          }}
        />
      </div>
    </div>
  );
};

export default Header;
