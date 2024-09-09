'use dom';

import { useEffect } from 'react';
import './products.css';
import { SERVER_URL } from '@/lib/server';

function ProductCard(props) {
  const product = props.product;

  useEffect(() => {
    fetch(`${SERVER_URL}/api/products/${product.id}`);
  });

  return (
    <div
      onClick={async (event) => {
        if (
          event.target.id !== 'addToCart' &&
          event.target.parentNode.id !== 'addToCart'
        ) {
          fetch(`${SERVER_URL}/products/${product.id}`);
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

export default ProductCard;
