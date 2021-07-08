const data = {
  products: [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: [
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093615_3d-trefoil-3-stripes-track-top_ge0841_standard-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093618_3d-trefoil-3-stripes-track-top_ge0841_walking-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093620_3d-trefoil-3-stripes-track-top_ge0841_back-center-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093623_3d-trefoil-3-stripes-track-top_ge0841_detail-view-3.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093617_3d-trefoil-3-stripes-track-top_ge0841_back-view.jpeg',
      ],
      mainImg: 'image/1.jpeg',
      brandImg: 'image/addidas.png',
      gender: 'Men',
      rate: 4,
      totalReview: 22,
      sale: 30, //if sale < 0 hidden
      currentPrice: 9999,
      oldPrice: 9999,
      currency: 'LE',
      size: ['small', 'medium', 'large', 'xlarge', 'xxlarge'],
      color: ['image/1.jpeg', 'image/6.jpeg'],
      quantity: 1,
      addedToCart: false,
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: [
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093615_3d-trefoil-3-stripes-track-top_ge0841_standard-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093618_3d-trefoil-3-stripes-track-top_ge0841_walking-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093620_3d-trefoil-3-stripes-track-top_ge0841_back-center-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093623_3d-trefoil-3-stripes-track-top_ge0841_detail-view-3.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093617_3d-trefoil-3-stripes-track-top_ge0841_back-view.jpeg',
      ],
      mainImg: 'image/2.jpeg',
      brandImg: 'image/addidas.png',
      gender: 'Men',
      rate: 4,
      totalReview: 22,
      sale: 30, //if sale < 0 hidden
      currentPrice: 9999,
      oldPrice: 9999,
      currency: 'LE',
      size: ['small', 'medium', 'large', 'xlarge', 'xxlarge'],
      color: ['image/1.jpeg', 'image/6.jpeg'],
      quantity: 1,
      addedToCart: false,
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: [
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093615_3d-trefoil-3-stripes-track-top_ge0841_standard-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093618_3d-trefoil-3-stripes-track-top_ge0841_walking-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093620_3d-trefoil-3-stripes-track-top_ge0841_back-center-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093623_3d-trefoil-3-stripes-track-top_ge0841_detail-view-3.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093617_3d-trefoil-3-stripes-track-top_ge0841_back-view.jpeg',
      ],
      mainImg: 'image/3.jpeg',
      brandImg: 'image/addidas.png',
      gender: 'Men',
      rate: 4,
      totalReview: 22,
      sale: 30, //if sale < 0 hidden
      currentPrice: 9999,
      oldPrice: 9999,
      currency: 'LE',
      size: ['small', 'medium', 'large', 'xlarge', 'xxlarge'],
      color: ['image/1.jpeg', 'image/6.jpeg'],
      quantity: 1,
      addedToCart: false,
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: [
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093615_3d-trefoil-3-stripes-track-top_ge0841_standard-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093618_3d-trefoil-3-stripes-track-top_ge0841_walking-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093620_3d-trefoil-3-stripes-track-top_ge0841_back-center-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093623_3d-trefoil-3-stripes-track-top_ge0841_detail-view-3.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093617_3d-trefoil-3-stripes-track-top_ge0841_back-view.jpeg',
      ],
      mainImg: 'image/111.jpeg',
      brandImg: 'image/addidas.png',
      gender: 'Women',
      rate: 4,
      totalReview: 22,
      sale: 30, //if sale < 0 hidden
      currentPrice: 9999,
      oldPrice: 9999,
      currency: 'LE',
      size: ['small', 'medium', 'large', 'xlarge', 'xxlarge'],
      color: ['image/1.jpeg', 'image/6.jpeg'],
      quantity: 1,
      addedToCart: false,
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: [
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093615_3d-trefoil-3-stripes-track-top_ge0841_standard-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093618_3d-trefoil-3-stripes-track-top_ge0841_walking-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093620_3d-trefoil-3-stripes-track-top_ge0841_back-center-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093623_3d-trefoil-3-stripes-track-top_ge0841_detail-view-3.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093617_3d-trefoil-3-stripes-track-top_ge0841_back-view.jpeg',
      ],
      mainImg: 'image/71.jpeg',
      brandImg: 'image/addidas.png',
      gender: 'Women',
      rate: 4,
      totalReview: 22,
      sale: 30, //if sale < 0 hidden
      currentPrice: 9999,
      oldPrice: 9999,
      currency: 'LE',
      size: ['small', 'medium', 'large', 'xlarge', 'xxlarge'],
      color: ['image/1.jpeg', 'image/6.jpeg'],
      quantity: 1,
      addedToCart: false,
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: [
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093615_3d-trefoil-3-stripes-track-top_ge0841_standard-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093618_3d-trefoil-3-stripes-track-top_ge0841_walking-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093620_3d-trefoil-3-stripes-track-top_ge0841_back-center-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093623_3d-trefoil-3-stripes-track-top_ge0841_detail-view-3.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093617_3d-trefoil-3-stripes-track-top_ge0841_back-view.jpeg',
      ],
      mainImg: 'image/71.jpeg',
      brandImg: 'image/addidas.png',
      gender: 'Women',
      rate: 4,
      totalReview: 22,
      sale: 30, //if sale < 0 hidden
      currentPrice: 9999,
      oldPrice: 9999,
      currency: 'LE',
      size: ['small', 'medium', 'large', 'xlarge', 'xxlarge'],
      color: ['image/1.jpeg', 'image/6.jpeg'],
      quantity: 1,
      addedToCart: false,
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: [
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093615_3d-trefoil-3-stripes-track-top_ge0841_standard-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093618_3d-trefoil-3-stripes-track-top_ge0841_walking-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093620_3d-trefoil-3-stripes-track-top_ge0841_back-center-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093623_3d-trefoil-3-stripes-track-top_ge0841_detail-view-3.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093617_3d-trefoil-3-stripes-track-top_ge0841_back-view.jpeg',
      ],
      mainImg: 'image/71.jpeg',
      brandImg: 'image/addidas.png',
      gender: 'Women',
      rate: 4,
      totalReview: 22,
      sale: 30, //if sale < 0 hidden
      currentPrice: 9999,
      oldPrice: 9999,
      currency: 'LE',
      size: ['small', 'medium', 'large', 'xlarge', 'xxlarge'],
      color: ['image/1.jpeg', 'image/6.jpeg'],
      quantity: 1,
      addedToCart: false,
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: [
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093615_3d-trefoil-3-stripes-track-top_ge0841_standard-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093618_3d-trefoil-3-stripes-track-top_ge0841_walking-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093620_3d-trefoil-3-stripes-track-top_ge0841_back-center-view.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093623_3d-trefoil-3-stripes-track-top_ge0841_detail-view-3.jpeg',
        'https://st-adidas-egy.mncdn.com/content/images/thumbs/0093617_3d-trefoil-3-stripes-track-top_ge0841_back-view.jpeg',
      ],
      mainImg: 'image/71.jpeg',
      brandImg: 'image/addidas.png',
      gender: 'Women',
      rate: 4,
      totalReview: 22,
      sale: 30, //if sale < 0 hidden
      currentPrice: 9999,
      oldPrice: 9999,
      currency: 'LE',
      size: ['small', 'medium', 'large', 'xlarge', 'xxlarge'],
      color: ['image/1.jpeg', 'image/6.jpeg'],
      quantity: 1,
      addedToCart: false,
    },
  ],
};

export default data;
