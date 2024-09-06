import { Slot } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { initClientSentry } from '../lib/clientSentry';
import * as Sentry from '@sentry/react-native';

initClientSentry();

function RootLayout() {
  if (process.env.EXPO_OS === "web") return <Slot />;

  return (
    <Drawer>
      <Drawer.Screen name="broken-screen" options={{ title: "errors" }} />
      <Drawer.Screen name="index" options={{ title: "shadcn" }} />
      <Drawer.Screen name="products" options={{ title: "MDX" }} />
    </Drawer>
  );
}

export default Sentry.wrap(RootLayout);
