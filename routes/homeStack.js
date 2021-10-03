import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import BrowseScreen from "../screens/browseScreen";
import TicketScreen from "../screens/ticketScreen";
import HomeScreen from "../screens/homeScreen";

const screens = {
    Home: {
        screen: HomeScreen
    },
    BrowseScreen: {
        screen: BrowseScreen
    },
    TicketScreen: {
        screen: TicketScreen
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);