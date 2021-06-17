import React, { useState } from 'react';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'; //icon
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'; //icon
import LocationOnIcon from '@material-ui/icons/LocationOn'; //icon
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'; //icon
import NavigateNextIcon from '@material-ui/icons/NavigateNext'; //icon
import { Link } from 'react-router-dom';
import SideBar from './sideBar';

export default function GeneralNav() {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div className='Gnav'>
      <div className='partA'>
        <SideBar isToggle={isToggle} setIsToggle={setIsToggle} />
        <h2>Yeshtery</h2>
      </div>

      <div className='partB'>
        <NavigateBeforeIcon />
        <p>
          The search supports synonyms. Try searching for
          <Link to='/shoppingNow' className='shopNow'>
            shop now
          </Link>
        </p>
        <NavigateNextIcon />
      </div>

      <div className='partC'>
        <div>
          <PhoneInTalkIcon />
          <p>Contact Us</p>
        </div>

        <div>
          <AddShoppingCartIcon />
          <p>Track Order</p>
        </div>

        <div>
          <LocationOnIcon />
          <p>Find a Store</p>
        </div>
      </div>
    </div>
  );
}
