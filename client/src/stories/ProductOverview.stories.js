import React from 'react';
import ProductElement from '../components/ProductElement';
import ProductDetails from '../components/ProductDetail';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
  title: 'Product',
  decorators: [withKnobs]
};

export function Product() {
  return (
    <ProductElement
      productPrice={number('Product Price', 12)}
      productName={text('Product Name', 'Model X')}
      productID={text('Product ID', '1337')}
      productRefCount={number('Product Count', 123)}
      imgSrc={
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144763'
      }
      onClick={action('clicked')}
    ></ProductElement>
  );
}

export function ProductDetail() {
  return (
    <ProductDetails
      imgSrc={
        'https://www.tryandreview.com/uploads/images/products/1d846ebd5706b2b549e2929d8074599124c3b1b8.png?v17'
      }
      productTitle={text('Product Name', 'Nivea MicellAIR Skin Professsional')}
      productPrice={5.99}
      productBrand={'Nivea'}
      productDescription={'Description Text'}
    ></ProductDetails>
  );
}
