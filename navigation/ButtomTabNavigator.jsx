import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../screens/PostsScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import CommentsScreen from "../screens/CommentsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LogOutButton from "../components/LogOutButton";
import BackButton from "../components/BackButton";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "../styles/global";

const Tab = createBottomTabNavigator();

const ButtomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerRightContainerStyle: { paddingRight: 16 },
        headerLeftContainerStyle: { paddingLeft: 16 },
        headerTitleAlign: "center",
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
          tabBarIcon: () => <Feather name="plus" size={24} color="#21212180" />,
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
