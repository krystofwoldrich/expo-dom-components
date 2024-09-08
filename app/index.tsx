import { View } from "react-native";

import DOMComponent from '../components/testComponents';
import ProductList from '../components/shop/poroduct-list';
import { withSentryDomOptions } from '../lib/clientSentry';
import { useEffect, useState } from 'react';
import { devServerURL, SERVER_URL } from '../lib/server';

export default function EmpowerPlant() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(`${SERVER_URL}/product-list`);
      setProducts(await response.json());
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ProductList
        products={products}
      />
    </View>
  );
}