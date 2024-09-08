'use dom';

import './index.css';

import { initSentry } from '../../lib/domSentry';
import ProductCard from './product-card';

initSentry();

function ProductList({
  products
}) {
  return (
    <ul className='products-list'>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
