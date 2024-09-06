import { View, Text } from "react-native";

import DOMComponent from '../components/testComponents';
import { withSentryDomOptions } from '../lib/clientSentry';


export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Empty</Text>
      <DOMComponent name='hello' dom={withSentryDomOptions({})}/>
    </View>
  );
}