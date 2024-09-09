import { Slot, useNavigationContainerRef } from "expo-router";
import { Tabs } from "expo-router/tabs";
import { Stack } from "expo-router";
import { reactNavigationIntegration } from '@/lib/sentry/mobile';
import * as Sentry from '@sentry/react-native';
import { useEffect } from 'react';

import '@/lib/sentry/mobile';
import { ShopProvider } from '../lib/shop/ShopContext';

function RootLayout() {
  const ref = useNavigationContainerRef();

  useEffect(() => {
    if (ref) {
      reactNavigationIntegration.registerNavigationContainer(ref);
    }
  }, [ref]);

  if (process.env.EXPO_OS === "web") return <Slot />;

  return (
    <ShopProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ShopProvider>
  );
}

export default Sentry.wrap(RootLayout);
