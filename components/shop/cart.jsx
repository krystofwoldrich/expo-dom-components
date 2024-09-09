'use dom';

import '@/lib/sentry/dom';

import './index.css';
import './cart.css';

import { withActiveProfiler } from '@/lib/sentry/withActiveProfiler';
import { SERVER_URL } from '@/lib/server';
import * as Sentry from '@sentry/react-native';

function Cart({ cart, removeProduct, addProduct, navigateToSuccess, navigateToFail }) {
  const onCheckoutClick = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/api/checkout`, {
        method: 'POST',
        body: JSON.stringify(cart),
      });
      if (!response.ok) {
        throw new Error('Failed to checkout');
      }

      navigateToSuccess();
    } catch (error) {
      Sentry.captureException(error);
      navigateToFail();
    }
  };

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
          <button className="sentry-unmask" onClick={onCheckoutClick}>
            Proceed to checkout
          </button>
        </>
      ) : (
        <p>Please add items to the cart</p>
      )}
    </div>
  );
}

Cart.displayName = 'Cart';

export default withActiveProfiler(Cart);
