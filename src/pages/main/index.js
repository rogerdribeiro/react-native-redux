import React, { Component } from "react";
import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import styles from "./styles";
import { colors } from "../../styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as FavoriteActions } from "../../store/ducks/favorites";

class Main extends Component {
  static navigationOptions = {
    header: null
  };
  navigateToFavorites = () => {
    this.props.navigation.navigate("Favorites");
  };
  state = {
    repoNameInput: ""
  };
  addRepository = () => {
    const { repoNameInput } = this.state;
    if (!repoNameInput.length) return;
    this.props.addFavoriteRequest(repoNameInput);
  };
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

        <View style={styles.content}>
          <Text style={styles.title}>GitMark</Text>
          <Text style={styles.description}>
            Começe adiconando seus repositórios como favoritos
          </Text>

          <View style={styles.form}>
            {!!this.props.error && (
              <Text style={styles.error}>{this.props.error}</Text>
            )}
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="usuário/repositório"
              underlineColorAndroid="transparent"
              value={this.state.repoNameInput}
              onChangeText={repoNameInput => this.setState({ repoNameInput })}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={this.addRepository}
              activeOpacity={0.6}
            >
              {this.props.loading ? (
                <ActivityIndicator size="small" color={colors.dark} />
              ) : (
                <Text style={styles.buttonText}>Adiconar aos favoritos</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.navigateToFavorites}>
            <Text style={styles.footerLink}>
              Meus favoritos ({this.props.favoritesCount})
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  favoritesCount: state.favorites.data.length,
  error: state.favorites.errorOnAdd,
  loading: state.favorites.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
