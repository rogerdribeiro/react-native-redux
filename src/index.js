import React from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./TodoList";

const App = () => (
  <Provider store={store}>
    <View>
      <TodoList />
    </View>
  </Provider>
);

export default App;
