import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { Colors, Fonts } from "../../styles/global";

const Posts = ({
  postImg,
  postName,
  postComment,
  postLike,
  location,
  onPressComment,
  onPressMap,
  onPressLike,
  isLiked,
}) => {
  
  return (
    <View>
      <View style={styles.item}>
        <Image style={styles.itemImg} source={{ uri: postImg }} />
        <Text style={styles.itemName}>{postName}</Text>
      </View>

      <View style={styles.itemInform}>
        <View style={styles.itemArea}>
          <TouchableOpacity
            onPress={onPressComment}
            style={styles.itemAreaMarg}
          >
            <Feather
              color={postComment === 0 ? Colors.text_gray : Colors.oranges}
              name="message-circle"
              size={24}
            />
            <Text style={styles.itemCommentNum}>{postComment}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemArea} onPress={onPressLike}>
            <AntDesign
              name="like2"
              size={24}
              color={isLiked ? Colors.oranges : Colors.text_gray}
            />
            <Text style={styles.itemCommentNum}>{postLike}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={onPressMap} style={styles.itemArea}>
          <Feather name="map-pin" size={24} color={Colors.text_gray} />
          <Text style={styles.itemAddres} color={Colors.text_gray}>
            {location}
          </Text>
        </TouchableOpacity>
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
    alignItems: "center",
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
