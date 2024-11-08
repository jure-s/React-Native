import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Colors, Fonts } from "../styles/global";
import Posts from "../components/Posts";
import postData from "../assets/data/postData";

const PostsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          style={styles.userAvatar}
          source={require("../assets/images/User.png")}
        />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>

      <View style={styles.fotoList}>
        <FlatList
          data={postData}
          renderItem={({ item }) => (
            <Posts
              onPressComment={() => navigation.navigate("Comment")}
              onPressMap={() =>
                navigation.navigate("Maps", { location: item.location })
              }
              postImg={item.postImg}
              postName={item.postName}
              postComment={item.postComment}
              location={item.location}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: Colors.whites,
    borderColor: Colors.light_gray,
    borderWidth: 1,
  },
  userInfo: {
    flexDirection: "row",
    marginBottom: 32,
    alignItems: "center",
  },
  userAvatar: {
    width: 60,
    height: 60,
    marginRight: 8,
  },
  userName: {
    fontFamily: "roboto-bold",
    fontSize: Fonts.medium,
    color: Colors.black_primary,
  },
  userEmail: {
    fontFamily: "roboto-regular",
    fontSize: Fonts.small,
    color: Colors.black_primary,
  },
  fotoList: {
    width: "100%",
    height: "87%",
  },
  itemImg: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemName: {
    fontFamily: "roboto-medium",
    fontSize: Fonts.normal,
    color: Colors.black_primary,
    marginBottom: 8,
  },
  itemInform: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemArea: {
    flexDirection: "row",
  },
  itemCommentNum: {
    fontFamily: "roboto-medium",
    fontSize: Fonts.normal,
    color: Colors.text_gray,
    marginLeft: 5,
  },
  itemAddres: {
    fontFamily: "roboto-medium",
    fontSize: Fonts.normal,
    color: Colors.black_primary,
    marginLeft: 5,
    textDecorationLine: "underline",
  },
});
