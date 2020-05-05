//import
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Episodes from "../Components/Episodes";
import Play from "../Components/Play";
import Start from "../Components/Start";
import Seasons from "../Components/Seasons";
//creating stack
const stack = createStackNavigator({
  Start: {
    screen: Start,
  },
  Seasons: {
    screen: Seasons,
  },

  Episodes: { screen: Episodes },

  Play: { screen: Play },
});
//exporting navigation stack
export const Navigations = createAppContainer(stack);
