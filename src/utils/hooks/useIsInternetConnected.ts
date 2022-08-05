import NetInfo from "@react-native-community/netinfo";
import React from "react";

export default function useIsInternetConnected() {
  const [isInternetConnected, setIsInternetConnected] =
    React.useState<boolean>(true);

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsInternetConnected(!!state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return isInternetConnected;
}
