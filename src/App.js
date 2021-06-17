import React, { Component, lazy, Suspense } from 'react';
import GeneralNav from './components/GeneralNav';
import BrandsNav from './components/BrandsNav';
import './styles/app.scss';
import Categories from './components/Categories';
import { Divider } from '@material-ui/core';
import data from './services/data';
import ProductList from './components/ProductList';
import Footer from './components/footer';
import loadCircle from './img/loading.gif';

const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./components/Home')), 3000);
  });
});

const { products } = data;

class App extends Component {
  state = {
    selectedProductId: 1,
    products,
    totalCartProducts: 0,
  };

  handleIncrementCartProducts = (quantity) => {
    const { totalCartProducts } = this.state;
    this.setState({
      ...totalCartProducts.state,
      totalCartProducts: totalCartProducts + quantity,
    });
  };

  handleAddToCart = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };

    products[index].isInCart = !products[index].isInCart;

    this.setState({ products });
  };

  handleSelectedProduct = (id) => {
    console.log(id);
  };

  render() {
    const { selectedProductId, totalCartProducts } = this.state;
    console.log(this.state.products, 'vvxx');
    return (
      <Suspense fallback={<img src={loadCircle} className='loadingNasNav' />}>
        <div className='App'>
          <GeneralNav />
          <BrandsNav totalCartProducts={totalCartProducts} />
          <Categories />

          <Divider />
          <div className='container'>
            <Home
              products={products}
              id={selectedProductId}
              handleIncermentToCart={this.handleIncrementCartProducts}
            />
            <ProductList
              allProducts={products}
              id={selectedProductId}
              handleSelectedProduct={this.handleSelectedProduct}
            />
          </div>
          <Footer />
        </div>
      </Suspense>
    );
  }
}

export default App;
