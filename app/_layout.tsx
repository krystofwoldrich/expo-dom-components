import { Slot, useNavigationContainerRef } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { initClientSentry, reactNavigationIntegration } from '../lib/clientSentry';
import * as Sentry from '@sentry/react-native';
import { useEffect } from 'react';

initClientSentry();

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
      <Drawer.Screen name="shadcn" options={{ title: "shadcn" }} />
      <Drawer.Screen name="products" options={{ title: "MDX" }} />
    </Drawer>
  );
}

export default Sentry.wrap(RootLayout);
