import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <span>SHISHEO</span>
      </div>
      <div>
        <nav>
          <Link for='/'>HOME</Link>
          <Link for='/map'>MAP</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
