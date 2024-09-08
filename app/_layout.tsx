import { Slot, useNavigationContainerRef } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { reactNavigationIntegration } from '@/lib/sentry/mobile';
import * as Sentry from '@sentry/react-native';
import { useEffect } from 'react';

import '@/lib/sentry/mobile';

function RootLayout() {
  const ref = useNavigationContainerRef();

  useEffect(() => {
    if (ref) {
      reactNavigationIntegration.registerNavigationContainer(ref);
    }
  }, [ref]);

  if (process.env.EXPO_OS === "web") return <Slot />;

  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: "errors" }} />
    </Drawer>
  );
}

export default Sentry.wrap(RootLayout);
