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
      price={number('Product Price', 12)}
      title={text('Product Name', 'Model X')}
      referrals={number('Referrals', 123)}
      img={
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144763'
      }
      onClickRefresh={action('Refresh')}
      onClickDelete={action('Delete')}
    ></ProductElement>
  );
}

export function ProductDetail() {
  return (
    <ProductDetails
      img={
        'https://www.tryandreview.com/uploads/images/products/1d846ebd5706b2b549e2929d8074599124c3b1b8.png?v17'
      }
      title={text('Product Name', 'Nivea MicellAIR Skin Professsional')}
      price={5.99}
      productBrand={'Nivea'}
      description={text(
        'Description Text',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget diam tellus. Sed venenatis facilisis arcu, a vestibulum orci. Curabitur consequat odio libero, bibendum scelerisque enim tempor quis. Pellentesque nisl nisi, ornare in cursus a, tempus in sapien. Proin eget sapien lectus. Morbi in erat arcu. Sed eget eleifend urna, et mollis dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sagittis ultrices leo, sed bibendum mi fringilla at. Vestibulum consectetur lobortis sem, sit amet molestie ex finibus ut. Cras placerat mattis rutrum. Mauris ut orci aliquet, viverra quam et, congue lectus. Suspendisse quis.'
      )}
    ></ProductDetails>
  );
}
