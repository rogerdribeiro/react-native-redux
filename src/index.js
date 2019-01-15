import React from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <View>
      <Text>Home</Text>
    </View>
  </Provider>
);

export default App;
