import { Stack } from 'expo-router/stack';

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: 'Cart' }} />
      <Stack.Screen name="fail" options={{ title: 'Cart' }} />
      <Stack.Screen name="success" options={{ title: 'Cart' }} />
    </Stack>
  );
}

export default Layout;