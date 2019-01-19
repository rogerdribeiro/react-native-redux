import { createAppContainer, createStackNavigator } from "react-navigation";
import Main from "./pages/main";
import Favorites from "./pages/favorites";

import { colors } from "./styles";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Favorites
    },
    {
      navigationOptions: {
        headerStyle: {
          backgroundColor: colors.primaryDark
        },
        headerTintColor: colors.white,
        headerBackTitle: null
      }
    }
  )
);

export default Routes;
