import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "./store/actions/todos";

class TodoList extends Component {
  state = {
    input: ""
  };
  render() {
    const { input } = this.state;
    const { todos, addTodo, removeTodo } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.form}>
            <TextInput
              placeholder="Nova tarefa"
              underlineColorAndroid="transparent"
              onChangeText={input => this.setState({ input })}
              value={input}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => addTodo(input)}
              style={styles.addTodo}
            >
              <Text style={styles.txtAdd}>ADICIONAR</Text>
            </TouchableOpacity>
          </View>
        </View>

        {todos.map(todo => (
          <View key={todo.id} style={styles.todo}>
            <Text>{todo.text}</Text>

            <TouchableOpacity onPress={() => removeTodo(todo.id)}>
              <Text>Excluir</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  todo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 7,
    padding: 3,
    backgroundColor: "#999",
    borderRadius: 5,
    marginTop: 5
  },
  addTodo: {
    padding: 8,
    backgroundColor: "#339",
    borderRadius: 7
  },
  txtAdd: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold"
  },
  input: {
    borderRadius: 5,
    backgroundColor: "#fff"
  },
  form: {
    marginHorizontal: 5
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
