import { Stack } from 'expo-router/stack';

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: 'Cart' }} />
    </Stack>
  );
}

export default Layout;