import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import CommentsScreen from "../screens/CommentsScreen";
import MapScreen from "../screens/MapScreen";
import ButtomTabNavigator from "./ButtomTabNavigator";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{ presentation: "modal", headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ presentation: "modal", headerShown: false }}
        name="Registration"
        component={RegistrationScreen}
      />
      <Stack.Screen
        options={{ presentation: "modal", headerShown: false }}
        name="Home"
        component={ButtomTabNavigator}
      />
      <Stack.Screen
        options={{
          presentation: "modal",
          title: "Коментарі",
          headerTitleAlign: "center",
        }}
        name="Comment"
        component={CommentsScreen}
      />
      <Stack.Screen
        options={{
          presentation: "modal",
          title: "Мапа",
          headerTitleAlign: "center",
        }}
        name="Maps"
        component={MapScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
