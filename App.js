import React, { store } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NativeBaseProvider } from "native-base";
import configureStore from "./store/rootStore";
import AppNavigation from "./navigation/appNavigation";

export default function App() {
  const { store, persistor } = configureStore();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NativeBaseProvider>
          <AppNavigation />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}
