import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Colors, Fonts } from "../../styles/global";
import Posts from "../components/Posts";
import {
  selectAllPosts,
  selectIsLoading,
  selectPostError,
} from "../redux/reducers/postSelector";
import { getPosts, toggleLike } from "../redux/reducers/postOperation";
import { selectUser } from "../redux/reducers/authSelector";
import Toast from 'react-native-toast-message';

const PostsScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectPostError);
  const userId = user.uid;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleLikeToggle = (postId) => {
    dispatch(toggleLike({ postId, userId }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image style={styles.userAvatar} source={{ uri: user.photoURL }} />
        <View>
          <Text style={styles.userName}>{user.displayName}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      </View>

      <View style={styles.fotoList}>
      {error && <Text>error:{`${error}`}</Text>}
        {isLoading && (
          <ActivityIndicator
            size="150"
            style={styles.loaders}
            color={Colors.oranges}
          />
        )}
        {!isLoading > 0 && (
          <FlatList
            data={posts}
            renderItem={({ item }) => (
              <Posts
                onPressComment={() =>
                  navigation.navigate("Comment", { postId: item.id })
                }
                onPressLike={() => handleLikeToggle(item.id)}
                onPressMap={() => navigation.navigate("Maps", { posts })}
                postImg={item.imageUrl}
                postName={item.namePhoto}
                postComment={item.comments.length}
                location={item.location.name}
                postLike={item.likes}
                isLiked={item.likedBy && item.likedBy.includes(userId)}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
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
  loaders: {
    marginTop: "50%",
  },
  userInfo: {
    flexDirection: "row",
    marginBottom: 25,
    alignItems: "center",
  },
  userAvatar: {
    width: 60,
    height: 60,
    marginRight: 8,
    borderRadius: 8,
  },
  userName: {
    fontFamily: "roboto-bold",
    fontSize: Fonts.medium,
    color: Colors.black_primary,
  },
  userEmail: {
    fontFamily: "roboto-regular",
    fontSize: Fonts.small,
    color: Colors.oranges,
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
  errors: {
    fontSize: 30,
    position: "absolute",
    top: "50%",
    left: "50%",
    overflow: "hidden",
    // transform: translate(-50%, -50%);
    color: "#e44848",
  }

});
