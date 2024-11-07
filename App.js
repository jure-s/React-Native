import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ButtomTabNavigator from "./navigation/ButtomTabNavigator";
import StackNavigator from "./navigation/StackNavigator";

export default function App() {
  const [loaded, error] = useFonts({
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  });

  if (!loaded || error) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {/* <ButtomTabNavigator/> */}
      <StackNavigator />
    </NavigationContainer>
  );
}
