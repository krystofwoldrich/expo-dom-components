import { View, Text } from "react-native";

import * as Sentry from '@sentry/react-native';

function SuccessCartView() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fcfcf1',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>Thank you for purchase!</Text>
    </View>
  );
}

export default Sentry.withProfiler(SuccessCartView);
