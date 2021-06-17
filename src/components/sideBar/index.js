import React, { Component } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from '@material-ui/icons/Menu'; //icon
import { Wrapper, CartSideBar, SideBarHeader, IconX } from './styles';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  state = {};

  render() {
    const { isToggle, setIsToggle } = this.props;
    return (
      <>
        <Wrapper onClick={() => setIsToggle(!isToggle)}>
          <MenuIcon />
        </Wrapper>
        <CartSideBar className={isToggle ? 'expand' : 'shrink'}>
          <IconX icon={faTimes} onClick={() => setIsToggle(!isToggle)} />
          <SideBarHeader></SideBarHeader>
          <ul>
            <li className='NasNavli'>
              <Link to='/' className='headerCart'>
                Home
              </Link>
            </li>
            <li className='NasNavli'>
              <Link to='/services' className='headerCart'>
                Services
              </Link>
            </li>
            <li className='NasNavli'>
              <Link to='/about' className='headerCart'>
                About
              </Link>
            </li>
            <li className='NasNavli'>
              <Link to='/contact' className='headerCart'>
                Contact Us
              </Link>
            </li>
          </ul>
        </CartSideBar>
      </>
    );
  }
}
export default SideBar;
