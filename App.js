import React from "react";
import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import configureStore from "./store/rootStore";
import AppNavigation from "./navigation/appNavigation";

const Stack = createStackNavigator();

export default function App() {
  const { store } = configureStore();

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <AppNavigation />
      </NativeBaseProvider>
    </Provider>
  );
}
