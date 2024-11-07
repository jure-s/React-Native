import { StyleSheet, Text, View, Image } from "react-native";
import {Colors, Fonts} from "../styles/global";

const Comment = ({ textComment, dateComment, userAvatar, isEven }) => {
  return (
    <View
      style={[
        styles.containerComments,
        isEven ? styles.evenComment : styles.oddComment,
      ]}
    >
      {!isEven && (
        <Image
          style={[styles.containerAvatar, styles.avatarLeft]}
          source={userAvatar}
        />
      )}
      <View style={styles.containerText}>
        <Text style={styles.text}>{textComment}</Text>
        <View>
          <Text style={styles.textData}>{dateComment}</Text>
        </View>
      </View>
      {isEven && (
        <Image
          style={[styles.containerAvatar, styles.avatarRight]}
          source={userAvatar}
        />
      )}
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  containerComments: {
    flexDirection: "row",
    marginBottom: 16,
  },
  evenComment: {
    justifyContent: "flex-end",
  },
  oddComment: {
    justifyContent: "flex-start",
  },
  containerAvatar: {
    width: 28,
    height: 28,
    backgroundColor: Colors.light_gray,
    borderRadius: 28,
  },
  containerText: {
    backgroundColor: Colors.light_gray,
    borderRadius: 8,
    padding: 16,
    maxWidth: "70%",
  },
  text: {
    fontFamily: "roboto-regular",
    fontSize: Fonts.medium,
  },
  textData: {
    fontFamily: "roboto-regular",
    fontSize: Fonts.extraSmall,
    color: Colors.text_gray,
  },
  avatarLeft: {
    marginRight: 16,
  },
  avatarRight: {
    marginLeft: 16,
  },
});
