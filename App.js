import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./components/Timer";
import reducer from "./reducer";
// reducer를 import 한 후 sotre를 생성
import { createStore } from "redux";

// 앱의 state를 복사해야 함.
import { Provider } from "react-redux";

// store를 생성
let store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  );
}
