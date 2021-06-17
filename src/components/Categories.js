import React, { Component } from 'react';

class Categories extends Component {
  state = {};

  render() {
    return (
      <div className='categoryBar'>
        <h5>Men</h5>
        <h5>Women</h5>
        <h5>Unisex</h5>
        <h5>Kids</h5>
        <h5>Best Seller</h5>
        <h5>New Arrival</h5>
        <h5 className='categoryBarItemOffers'>Offers</h5>
      </div>
    );
  }
}
export default Categories;
