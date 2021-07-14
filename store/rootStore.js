// import { createStore, combineReducers } from "redux";
// import { persistStore, persistReducer, createMigrate } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { rootReducer } from "./rootReducer";
// // import AsyncStorage from "@react-native-community/async-storage";
// // import AsyncStorage from "@react-native-async-storage/async-storage";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// let store = createStore(persistedReducer);
// let persistor = persistStore(store);

import reducers from "./rootReducer";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(createLogger());
}

const store = createStore(reducers, applyMiddleware(...middleware));

export default store;
