import { View } from "react-native";

import ProductList from '@/components/shop/product-list';
import { useEffect, useState } from 'react';
import { SERVER_URL } from '@/lib/server';
import { continueTraceIn } from '@/lib/sentry/continueTrace';
import * as Sentry from '@sentry/react-native';

const WrappedProductList = continueTraceIn(ProductList);

function EmpowerPlant() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(`${SERVER_URL}/product-list`);
      setProducts(await response.json());
    })();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fcfcf1' }}>
      {products.length > 0 && <WrappedProductList products={products} />}
    </View>
  );
}

export default Sentry.withProfiler(EmpowerPlant);
