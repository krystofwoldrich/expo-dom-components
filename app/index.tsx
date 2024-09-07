import { View, Text } from "react-native";

import DOMComponent from '../components/testComponents';
import ProductCard from '../components/shop/ProductCard';
import { withSentryDomOptions } from '../lib/clientSentry';


export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <ProductCard product={{
        id: '1',
        title: 'Product 1',
        description: 'Description of product 1',
        price: 29.99,
        reviews: [],
        img: 'https://storage.googleapis.com/application-monitoring/mood-planter-cropped.jpg',
      }} />
    </View>
  );
}