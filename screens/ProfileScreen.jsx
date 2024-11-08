import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Posts from "../components/Posts";
import { Colors, Fonts } from "../styles/global";
import ImageBG from "../assets/images/PhotoBG.jpg";
import AddAvatar from "../assets/images/add.png";
import Avatar from "../assets/images/Avatar.jpg";
import postData from "../assets/data/postData";
import LogOutButton from "../components/LogOutButton";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ImageBG} style={styles.imageBg}>
        <View style={styles.contentBox}>
          <View>
            <Image style={styles.avatarBox} source={Avatar} />
            <TouchableOpacity style={styles.avatarAdd}>
              <Image source={AddAvatar} />
            </TouchableOpacity>
          </View>

          <View style={styles.exitBtn}>
            <LogOutButton onPress={() => console.log("LogOut")} />
          </View>

          <Text style={styles.contentTitle}>Natali Romanova</Text>

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
                  postLike={item.postLike}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    width: "100%",
    height: "100%",
  },
  contentBox: {
    width: "100%",
    height: 665,
    backgroundColor: Colors.whites,
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  avatarBox: {
    width: 120,
    height: 120,
    backgroundColor: Colors.light_gray,
    borderRadius: 16,
    position: "relative",
    top: -60,
  },
  avatarAdd: {
    position: "absolute",
    left: 107,
    top: 20,
  },
  exitBtn: {
    position: "absolute",
    right: 10,
    top: 20,
  },
  exitBtnIcon: {
    width: 24,
    height: 30,
  },
  contentTitle: {
    fontFamily: "roboto-medium",
    fontSize: Fonts.extraLarge,
    top: -30,
  },
  fotoList: {
    width: "100%",
    height: 500,
  },
});
