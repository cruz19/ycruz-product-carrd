import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'ycruz-product-card';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  // img: './coffe-mug.png'
};

const App = () => {
  return (
    <>
      <ProductCard
          product={product}
          initialValues={{
          count: 4,
          // maxCount: 10
          }}
      >
          {
          ({ increaseBy, count, reset, maxCount, isMaxCountReached }) => (
              <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
              </>
          )
          }
    </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
