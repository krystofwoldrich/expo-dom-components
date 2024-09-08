'use dom';

require('@/lib/sentry/dom').init();

import './index.css';

import ProductCard from './product-card';
import { withActiveProfiler } from '@/lib/sentry/withActiveProfiler';

function ProductList({
  products,
}: {
  products: any,
  dom?: import('expo/dom').DOMProps,
}) {
  return (
    <ul className='products-list'>
      {products.map((product: any) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

export default withActiveProfiler(ProductList);
