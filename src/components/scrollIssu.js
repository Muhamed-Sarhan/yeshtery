import React, { Component } from 'react';
import Product from './Product';
import Skeleton from 'react-loading-skeleton';

class ScrollIssu extends Component {
  state = {
    products: [],
    isLoading: true,
  };

  filterProducts(id, products) {
    const dataFiltered = products.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      products: dataFiltered,
      isLoading: false,
    });
    console.log('----', dataFiltered);
  }

  componentDidMount() {
    const { allProducts, id } = this.props;
    setTimeout(() => {
      this.filterProducts(id, allProducts);
    }, 3000);
  }
  render() {
    const { handleSelectedProduct, filteringByGender, gender, ref, scroll } =
      this.props;
    const { products, isLoading } = this.state;

    console.log(products, 'kjhgfd');
    return (
      <main className='productList'>
        <div className='ms14'>
          <div>
            <h2 className='productListHeader'>Similar Products</h2>
            <h4 className='productListP'>you may like these products also</h4>
          </div>
          <form>
            <h1>Current value : {gender}</h1>
            <select value={gender} onChange={filteringByGender}>
              <option value='all'>All</option>
              <option value='men'>Men</option>
              <option value='women'>Women</option>
            </select>
          </form>
        </div>
        <div className='productListGrid' ref={ref}>
          <div className='next-div'>
            <button onClick={() => scroll(100)} className='next'>
              Next
            </button>
          </div>
          {!isLoading ? (
            products.map((product) => (
              <Product
                key={product.id}
                product={product}
                handleSelectedProduct={handleSelectedProduct}
              />
            ))
          ) : (
            <div className='skelton'>
              <div className='skeltonItem'>
                <Skeleton duration={3} height={400} width={1000} />
                <div>
                  <h2>
                    <Skeleton duration={3} width={500} />
                  </h2>
                  <p>
                    <Skeleton duration={3} width={800} />
                  </p>
                  <p>
                    <Skeleton duration={3} width={700} />
                  </p>
                  <p>
                    <Skeleton duration={3} width={400} />
                  </p>
                  <p>
                    <Skeleton duration={3} width={900} />
                  </p>
                  <p>
                    <Skeleton duration={3} width={800} />
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className='prev-div'>
            <button onClick={() => scroll(-100)} className='prev'>
              Prev
            </button>
          </div>
        </div>
      </main>
    );
  }
}
export default ScrollIssu;
