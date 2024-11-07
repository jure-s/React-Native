import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {Colors, Fonts} from "../styles/global";

const Posts = ({ postImg, postName, postComment, postLike, location, onPress }) => {


  return (
    <View>
      <View style={styles.item}>
        <Image style={styles.itemImg} source={postImg} />
        <Text style={styles.itemName}>{postName}</Text>
      </View>

      <View style={styles.itemInform}>
        <View style={styles.itemArea}>
          <TouchableOpacity onPress={onPress} style={styles.itemAreaMarg}>
            <Feather name="message-circle" size={24} color={Colors.text_gray} />
            <Text style={styles.itemCommentNum}>{postComment}</Text>
          </TouchableOpacity>

          {postLike !== undefined && postLike !== null && (
            <TouchableOpacity style={styles.itemArea}>
              <AntDesign name="like2" size={24} color={Colors.text_gray} />
              <Text style={styles.itemCommentNum}>{postLike}</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.itemArea}>
          <Feather name="map-pin" size={24} color={Colors.text_gray} />
          <Text style={styles.itemAddres}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  item: {},
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
    marginBottom: 32,
  },
  itemArea: {
    flexDirection: "row",
    alignItems:"center",
  },
  itemAreaMarg: {
    flexDirection: "row",
    marginRight: 24,
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
