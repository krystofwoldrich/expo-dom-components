import { View, Text } from "react-native";

import * as Sentry from '@sentry/react-native';

function FailCartView() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fcfcf1',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>Ups, something went wrong.</Text>
    </View>
  );
}

export default Sentry.withProfiler(FailCartView);
