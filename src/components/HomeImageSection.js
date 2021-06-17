import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Skeleton from 'react-loading-skeleton';
class HomeImageSection extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    const { theProduct } = this.props;
    const carouselImages = theProduct.image;
    const { isLoading } = this.state;

    return (
      <div>
        {!isLoading ? (
          <Carousel infiniteLoop autoPlay>
            {carouselImages.map((singleImg) => (
              <div className='carousel-image'>
                <img src={singleImg} alt='product' />
              </div>
            ))}
          </Carousel>
        ) : (
          <div className='skelton'>
            <div className='skeltonItem'>
              <Skeleton duration={3} height={600} width={500} />
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default HomeImageSection;
