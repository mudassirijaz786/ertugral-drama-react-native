import React from "react";
import Start from "./Components/Start";
import Seasons from "./Components/Seasons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Episodes from "./Components/Episodes";
import Play from "./Components/Play";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Start: {
    screen: Start,
  },
  Seasons: {
    screen: Seasons,
  },

  Episodes: { screen: Episodes },

  Play: { screen: Play },
});

const AppContainer = createAppContainer(AppNavigator);
