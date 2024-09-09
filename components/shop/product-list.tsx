'use dom';

import '@/lib/sentry/dom';

import './index.css';

import ProductCard from './product-card';
import { withActiveProfiler } from '@/lib/sentry/withActiveProfiler';

function ProductList({
  products,
  addProduct,
}: {
  products: any,
  addProduct?: (product: any) => void,
  dom?: import('expo/dom').DOMProps,
}) {
  return (
    <ul className='products-list'>
      {!products || products.length === 0 && (
        <button id="refresh-product-list" onClick={() => {}}>
          <span className="sentry-unmask">Refresh</span>
        </button>
      )}
      {products.map((product: any) => (
        <li key={product.id}>
          <ProductCard product={product} addProduct={addProduct} />
        </li>
      ))}
    </ul>
  );
}

export default withActiveProfiler(ProductList);
