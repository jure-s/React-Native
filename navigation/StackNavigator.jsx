import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import CommentsScreen from "../screens/CommentsScreen";
import ButtomTabNavigator from "./ButtomTabNavigator";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" >
      <Stack.Screen options={{presentation: "modal", headerShown: false}} name="Login" component={LoginScreen} />
      <Stack.Screen options={{presentation: "modal", headerShown: false}} name="Registration" component={RegistrationScreen} />
      <Stack.Screen options={{presentation: "modal", headerShown: false}} name="Start" component={ButtomTabNavigator} />
      <Stack.Screen options={{presentation: "modal"}} name="Comment" component={CommentsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
