import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search'; //icon
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'; //icon
import PersonIcon from '@material-ui/icons/Person'; //icon
import adidas from '../img/adidas.svg';
import Cart from './cart';

export default function BrandsNav({ totalCartProducts }) {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div className='Bnav'>
      <div className='partAb'>
        <SearchIcon />
        <input placeholder='Search' />
      </div>

      <div className='partBb'>
        <img src={adidas} className='brandImg' />
      </div>

      <div className='partCb'>
        <div className='rightCart'>
          <Cart
            isToggle={isToggle}
            setIsToggle={setIsToggle}
            totalCartProducts={totalCartProducts}
          />
          <p>Cart</p>
        </div>

        <div className='rightCart'>
          <FavoriteBorderIcon />
          <p>Wishlist</p>
        </div>

        <div className='rightCart'>
          <PersonIcon />
          <p>Login</p>
        </div>
      </div>
    </div>
  );
}
