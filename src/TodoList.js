import React from "react";

import { View, Text } from "react-native";
import { connect } from "react-redux";

const TodoList = ({ todos }) => (
  <View>
    {todos.map(todo => (
      <Text>{todo}</Text>
    ))}
  </View>
);

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
