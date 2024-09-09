'use dom';

import { useEffect } from 'react';
import './products.css';
import { SERVER_URL } from '@/lib/server';
import * as Sentry from '@sentry/react-native';

function ProductCard(props) {
  const product = props.product;
  const productUrl = `${SERVER_URL}/api/products/${product.id}`;

  useEffect(() => {
    fetch(productUrl);
  });

  return (
    <div
      onClick={async (event) => {
        if (
          event.target.id !== 'addToCart' &&
          event.target.parentNode.id !== 'addToCart'
        ) {
          fetch(productUrl);
        }
      }}
    >
      <img src={product.img} alt="product" className="sentry-block" />
      <div>
        <h2>{product.title}</h2>
        <p className="product-description">{product.description}</p>
      </div>
      <button id="addToCart" onClick={() => props.addProduct(product)}>
        <span className="sentry-unmask">Add to cart — $</span>
        {product.price}.00
      </button>
    </div>
  );
}

ProductCard.displayName = 'ProductCard';

export default Sentry.withProfiler(ProductCard);
