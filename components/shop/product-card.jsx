'use dom';

import './products.css';

function ProductCard(props) {
  const product = props.product;
  const stars = props.stars;

  return (
    <div
      onClick={async (event) => {
        if (
          event.target.id !== 'addToCart' &&
          event.target.parentNode.id !== 'addToCart'
        ) {
          fetch(`SERVER_URL/product/${product.id}`);
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
      <p>
        {stars} ({product.reviews.length})
      </p>
    </div>
  );
}

export default ProductCard;
