import { View } from "react-native";

import Cart from '@/components/shop/cart';
import { continueTraceIn } from '@/lib/sentry/continueTrace';
import * as Sentry from '@sentry/react-native';
import { useShopContext } from '../../../lib/shop/ShopContext';
import { router } from 'expo-router';

const WrappedCart = continueTraceIn(Cart);

function TabView() {
  const { state, dispatch } = useShopContext();

  return (
    <View style={{ flex: 1, backgroundColor: '#fcfcf1' }}>
      <WrappedCart
        cart={state.cart}
        addProduct={(item: any) => {
          dispatch({ type: 'ADD_ITEM_TO_CART', payload: item });
        }}
        removeProduct={(item: any) => {
          dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: item });
        }}
        navigateToSuccess={() => {
          dispatch({ type: 'CLEAR_CART' });
          router.replace('/(tabs)/success');
        }}
        navigateToFail={() => {
          router.replace('/(tabs)/fail');
        }}
      />
    </View>
  );
}

export default Sentry.withProfiler(TabView);
