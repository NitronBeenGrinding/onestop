import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import BrowseScreen from "../screens/browseScreen";
import GameScreen from "../screens/gameScreen";
import HomeScreen from "../screens/homeScreen";
import TicketScreen from "../screens/ticketScreen";

const screens = {
    Home: {
        screen: HomeScreen
    },
    BrowseScreen: {
        screen: BrowseScreen
    },
    GameScreen: {
        screen: GameScreen
    },
    TicketScreen: {
        screen: TicketScreen
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);