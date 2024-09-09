import { View } from "react-native";
import React from "react";
import { Redirect, useNavigationContainerRef } from "expo-router";

// index.tsx, referring to route /

export default function index() {
  const navigation = useNavigationContainerRef();
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (!navigation?.isReady) return;

    setReady(true);
  }, [navigation?.isReady]);

  if (ready) return <Redirect href={{ pathname: '/(tabs)/shop' }} />;

  return <View></View>;
}