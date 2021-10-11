import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SignInScreen from "../screens/signinScreen";
import SignUpScreen from "../screens/signupScreen";

const screens = {
    SignInScreen: {
        screen: SignInScreen
    },
    SignUpScreen: {
        screen: SignUpScreen
    }
}

const AuthStack = createStackNavigator(screens);
export default createAppContainer(AuthStack);