import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { colors } from "../../styles";
import styles from "./styles";
import FavoriteItem from "../../components/FavoriteItem";
import { connect } from "react-redux";

class Favorites extends Component {
  static navigationOptions = {
    title: "Meus Favoritos",
    headerStyle: {
      backgroundColor: colors.primaryDark
    },
    headerTintColor: colors.white,
    headerBackTitle: null
  };

  renderList = () => (
    <FlatList
      data={this.props.favorites}
      keyExtractor={item => String(item.id)}
      renderItem={item => <FavoriteItem favorite={item} />}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {!this.props.favorites.length ? (
          <Text style={styles.empty}>Nenhum favorito adicionado</Text>
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  favorites: state.favorites.data
});

export default connect(mapStateToProps)(Favorites);
