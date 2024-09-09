import { View } from "react-native";

import ProductList from '@/components/shop/product-list';
import { useEffect, useState } from 'react';
import { SERVER_URL } from '@/lib/server';
import { continueTraceIn } from '@/lib/sentry/continueTrace';
import * as Sentry from '@sentry/react-native';
import { useShopContext } from '../../../lib/shop/ShopContext';

const WrappedProductList = continueTraceIn(ProductList);

function TabView() {
  const { state, dispatch } = useShopContext();

  console.log('state', state.cart);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(`${SERVER_URL}/api/products`);
      setProducts(await response.json());
    })();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fcfcf1' }}>
      {products.length > 0 && <WrappedProductList
        products={products}
        addProduct={(product: any) => {
          dispatch({ type: 'ADD_ITEM_TO_CART', payload: product });
        }}
       />}
    </View>
  );
}

export default Sentry.withProfiler(TabView);
