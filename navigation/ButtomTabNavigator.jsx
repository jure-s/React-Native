import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../screens/PostsScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import ProfileScreen from "../screens/PostsScreen";
import LogOutButton from "../components/LogOutButton";
import BackButton from "../components/BackButton";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "../styles/global";
import { StyleSheet, View } from "react-native";

const Tab = createBottomTabNavigator();

const ButtomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerRightContainerStyle: { paddingRight: 16 },
        headerLeftContainerStyle: { paddingLeft: 16 },
        headerTitleAlign: "center",
        tabBarStyle: { height: 70 },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <Feather name="grid" size={24} color="#21212180" />,
          headerRight: () => (
            <LogOutButton onPress={() => console.log("LogOut")} />
          ),
          title: "Публікації",
        }}
        name="Posts"
        component={PostsScreen}
      />

      <Tab.Screen
        options={({ navigation }) => ({
          headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
          title: "Створити публікацію",
          tabBarIcon: () => (
            <View style={styles.iconContainer}>
              <Feather name="plus" size={24} color="#fff" />
            </View>
          ),
          tabBarStyle: { display: "none" },
          tabBarLabel: "",
        })}
        name="CreatePosts"
        component={CreatePostsScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <Feather name="user" size={24} color="#21212180" />,
          headerShown: false,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default ButtomTabNavigator;

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: "#FF6C00", 
    width: 70, 
    height: 40, 
    borderRadius: 20, 
    justifyContent: "center", 
    alignItems: "center", 
  },
});
