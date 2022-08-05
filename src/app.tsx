import React, { useRef } from "react";
import FlashMessage from "react-native-flash-message";
import { QueryClientProvider } from "@tanstack/react-query";
import "./utils/ignore-logs";
import { queryClient } from "@/utils";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import withStorybookUI from "./utils/storybook/withStorybook";
import { AppSafeAreaProvider } from "./components/safe-area";
import { default as RootNavigator } from "./navigation/root-navigator";
import { MainErrorBoundary } from "./screens/error";

function App() {
  const navigationRef = useRef<NavigationContainerRef<any>>(null);

  return (
    <AppSafeAreaProvider>
      <MainErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <FlashMessage />
          <NavigationContainer ref={navigationRef}>
            <RootNavigator />
          </NavigationContainer>
        </QueryClientProvider>
      </MainErrorBoundary>
    </AppSafeAreaProvider>
  );
}

export default withStorybookUI(App);
