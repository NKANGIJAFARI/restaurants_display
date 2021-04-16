import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
const Header = () => {
  /* We shall have two navigations in the source code and this will be
  displayed according to what screen size.. we would have played around with one
  but to avoid complication due to the position absolutes and relativity
  of parent elements we shall "@Keep it simple stupid (KISS)" and achieve 
  our results simply*/

  return (
    <div className='header'>
      <div className='smallScreenNav'>
        <nav className='smallScreenNav__nav'>
          <Link to='/' className='smallScreenNav__nav--links'>
            <i className='fas fa-home'></i>
          </Link>
          <Link to='/map' className='smallScreenNav__nav--links'>
            <i className='fas fa-map-marker-alt'></i>
          </Link>
        </nav>
      </div>
      <div className='header__logo'>
        <Link to='/' className='nav__links'>
          <span>SHISHEO</span>
        </Link>
      </div>
      <div>
        <nav className='nav'>
          <Link to='/' className='nav__links'>
            <i className='fas fa-home'></i> HOME
          </Link>
          <Link to='/map' className='nav__links'>
            <i className='fas fa-map-marker-alt'></i> MAP
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
