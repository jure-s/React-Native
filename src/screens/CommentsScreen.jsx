import { StyleSheet, View, FlatList, TextInput, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Comment from "../components/Comment";
import AntDesign from "@expo/vector-icons/AntDesign";
import Buttons from "../components/Buttons";
import { Colors } from "../../styles/global";
import { selectPostById } from "../redux/reducers/postSelector";
import { selectUser } from "../redux/reducers/authSelector";
import { addComment } from "../redux/reducers/postOperation";


const CommentsScreen = ({ route }) => {
  const { postId } = route.params;
  const dispatch = useDispatch();

  const post = useSelector(selectPostById(postId));
  const user = useSelector(selectUser);
  const userId = user.uid;

  // console.log("\x1b[34m%s\x1b[0m", "user Comment ---->", user);
  // console.log("\x1b[34m%s\x1b[0m", "Posts Comment ---->", post);

  const [comment, setComment] = useState("");

  const handleCommentChange = (value) => {
    setComment(value);
  };

  const reset = () => {
    setComment("");
  };

  const addCom = () => {
    if (comment) {
      dispatch(
        addComment({ postId, userId, text: comment, userAva: user.photoURL })
      );
      reset();
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString("uk-UA", { timeZone: "UTC" });
  };

  useEffect(() => {
    const fetchPostData = async () => {};
    fetchPostData();
  }, [post.comments]);

  return (
    <View style={styles.container}>
      <Image style={styles.containerImg} source={{ uri: post.imageUrl }} />
      <FlatList
        data={post.comments || []}
        renderItem={({ item, index }) => (
          <Comment
            textComment={item.text}
            dateComment={formatDate(item.createdAt)}
            userAvatar={item.userAva}
            isEven={index % 2 === 1}
          />
        )}
        keyExtractor={(item) =>
          item.createdAt ? item.createdAt.toString() : Math.random().toString()
        }
      />
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.text_gray}
          placeholder="Коментувати..."
          onChangeText={handleCommentChange}
          value={comment}
        />
        <View style={styles.buttonWrapper}>
          <Buttons buttonSize="small" isButtonActive={true} onPress={addCom}>
            <AntDesign name="arrowup" size={24} color={Colors.whites} />
          </Buttons>
        </View>
      </View>
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    justifyContent: "space-between",
    backgroundColor: Colors.whites,
  },
  inputWrapper: {
    position: "relative",
    justifyContent: "center",
    marginBottom: 16,
  },
  input: {
    height: 50,
    borderColor: Colors.border_gray,
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 15,
    paddingRight: 60,
    backgroundColor: Colors.light_gray,
  },
  buttonWrapper: {
    position: "absolute",
    right: 10,
    top: 8,
  },
  containerImg: {
    width: "100%",
    height: 240,
    backgroundColor: Colors.light_gray,
    borderRadius: 8,
    marginBottom: 32,
  },
});
