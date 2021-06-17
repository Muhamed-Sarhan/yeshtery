import React, { Component } from 'react';
import HomeDataSection from './HomeDataSection';
import HomeImageSection from './HomeImageSection';
import Skeleton from 'react-loading-skeleton';

class Home extends Component {
  state = {
    theProduct: {},
    isLoading: true,
  };

  selectedProduct(id, theProduct) {
    const itemSelected = theProduct.filter((item) => {
      return item.id === id;
    });
    this.setState({
      theProduct: itemSelected[0],
    });
  }

  componentDidMount() {
    const { products, id } = this.props;
    this.selectedProduct(id, products);
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    const { theProduct, isLoading } = this.state;
    const { handleIncermentToCart } = this.props;

    console.log(theProduct, '85xk');
    return (
      <div className='homeAll'>
        <div className='homeImg'>
          <HomeImageSection theProduct={theProduct} />
        </div>
        <div className='homeData'>
          {!isLoading ? (
            <HomeDataSection
              theProduct={theProduct}
              handleIncermentToCart={handleIncermentToCart}
            />
          ) : (
            <div className='skelton'>
              <div className='skeltonItem'>
                <Skeleton duration={3} height={100} width={500} />
                <div>
                  <h2>
                    <Skeleton duration={3} width={300} />
                  </h2>
                  <p>
                    <Skeleton duration={3} width={400} />
                  </p>
                  <p>
                    <Skeleton duration={3} width={500} />
                  </p>
                  <p>
                    <Skeleton duration={3} width={200} />
                  </p>
                  <h2>
                    <Skeleton duration={3} width={300} />
                  </h2>
                  <p>
                    <Skeleton duration={3} width={400} />
                  </p>
                  <p>
                    <Skeleton duration={3} width={500} />
                  </p>
                  <p>
                    <Skeleton duration={3} width={200} />
                  </p>
                  <h2>
                    <Skeleton duration={3} width={300} />
                  </h2>
                  <p>
                    <Skeleton duration={3} width={400} />
                  </p>
                  <p>
                    <Skeleton duration={3} width={500} />
                  </p>
                  <p>
                    <Skeleton duration={3} width={200} />
                  </p>
                  <h2>
                    <Skeleton duration={3} width={300} />
                  </h2>
                  <p>
                    <Skeleton duration={3} width={400} />
                  </p>
                  <p>
                    <Skeleton duration={3} width={500} />
                  </p>
                  <p>
                    <Skeleton duration={3} width={200} />
                  </p>
                  <p>
                    <Skeleton duration={3} width={500} />
                  </p>
                  <p>
                    <Skeleton duration={3} width={200} />
                  </p>
                  <p>
                    <Skeleton duration={3} width={200} />
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Home;
