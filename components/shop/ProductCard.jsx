'use dom';

import './products.css';
import './index.css';

function ProductCard(props) {
  const product = props.product;
  const itemLink = '/product/' + product.id;
  const stars = props.stars;

  return (
    <ul className='products-list'>
      <li key={product.id}>
        <div
          onClick={(event) => {
            if (
              event.target.id !== 'addToCart' &&
              event.target.parentNode.id !== 'addToCart'
            ) {
              navigate(itemLink, { state: product });
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
      </li>
    </ul>
  );
}

export default ProductCard;
