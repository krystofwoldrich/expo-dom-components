import { Stack } from 'expo-router/stack';

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: true, headerLargeTitle: true}}>
      <Stack.Screen name="index" options={{ title: 'Shop' }} />
    </Stack>
  );
}

export default Layout;