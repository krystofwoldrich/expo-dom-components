'use dom';

import './index.css';
import './cart.css';

function Cart({ cart, removeProduct, addProduct }) {
  console.log('cart', cart);
  return (
    <div className="cart-container">
      {cart.items.length > 0 ? (
        <>
          <ul className="cart-list">
            {cart.items.map((item) => {
              const quantity = cart.quantities[item.id];
              return (
                <li className="cart-item" key={item.id}>
                    <img
                      src={item.img}
                      alt="item-thumbnail"
                      className="sentry-block"
                    />
                    <h4>{item.title}</h4>
                  <p>
                    <span className="sentry-unmask">$</span>
                    {item.price}.00
                  </p>
                  <div className="quantity-adjust">
                    <button
                      onClick={() => removeProduct(item)}
                      className="sentry-unmask"
                    >
                      –
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={() => addProduct(item)}
                      className="sentry-unmask"
                    >
                      +
                    </button>
                  </div>
                  <p>
                    <span className="sentry-unmask">$</span>
                    {item.price * quantity}.00
                  </p>
                </li>
              );
            })}
          </ul>
          <h3 className="cart-subtotal">
            <span className="sentry-unmask">Cart Subtotal: $</span>
            {cart.total}.00
          </h3>
          <button className="sentry-unmask">
            Proceed to checkout
          </button>
        </>
      ) : (
        <p>Please add items to the cart</p>
      )}
    </div>
  );
}

export default Cart;