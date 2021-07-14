import React from "react";
import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import store from "./store/rootStore";
import AppNavigation from "./navigation/appNavigation";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <AppNavigation />
      </NativeBaseProvider>
    </Provider>
  );
}
