import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
} from "react-native";

import Buttons from "../components/Buttons";
import Inputs from "../components/InputsSing";
import ImageBG from "../assets/images/PhotoBG.jpg";
import AddAvatar from "../assets/images/add.png";
import Avatar from "../assets/images/Avatar.jpg";
import { Colors, Fonts } from "../styles/global";

const RegistrationScreen = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonActive, setButtonActive] = useState(false);

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (name && email && password) {
      setButtonActive(true);
      return;
    }
    setButtonActive(false);
  }, [name, email, password]);

  const navi = () => {
    navigation.navigate("Login");
  };

  const signUp = () => {
    Alert.alert("Credentials", `${name} + ${email} + ${password}`);
    console.log("name-->", name);
    console.log("email-->", email);
    console.log("password-->", password);
    reset();
    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={ImageBG} style={styles.imageBg}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
            <View style={styles.contentBox}>
              <View>
                <Image style={styles.avatarBox} source={Avatar} />
                <Pressable style={styles.avatarAdd}>
                  <Image style={styles.tinyLogo} source={AddAvatar} />
                </Pressable>
              </View>

              <Text style={styles.contentTitle}>Реєстрація</Text>

              <Inputs
                value={name}
                onTextChange={handleNameChange}
                placeholder="Логін"
                showPassword={true}
                keyboard="default"
              />

              <Inputs
                value={email}
                onTextChange={handleEmailChange}
                placeholder="Адреса електронної пошти"
                showPassword={true}
                keyboard="email-address"
              />

              <View style={styles.inputPass}>
                <Inputs
                  value={password}
                  onTextChange={handlePasswordChange}
                  placeholder="Пароль"
                  keyboard="numeric"
                  showPassword={showPassword}
                />
                <TouchableOpacity
                  style={styles.passHide}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Text style={styles.passHideText}>
                    {showPassword ? "Сховати" : "Показати"}
                  </Text>
                </TouchableOpacity>
              </View>

              <Buttons
                buttonSize="large"
                isButtonActive={isButtonActive}
                onPress={signUp}
              >
                Зареєстуватися
              </Buttons>

              <View style={styles.textContainer}>
                <Text style={styles.text}>Вже є акаунт?</Text>
                <TouchableOpacity onPress={navi}>
                  <Text style={[styles.text, styles.textSolid]}>Увійти</Text>
                </TouchableOpacity>
              </View>
            </View>
        </KeyboardAvoidingView>
          </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    width: "100%",
    height: "100%",
    justifyContent: 'flex-end',
  },
  contentBox: {
    width: "100%",
    height: 549,
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
  contentTitle: {
    fontFamily: "roboto-medium",
    fontSize: Fonts.extraLarge,
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: Colors.border_gray,
    backgroundColor: Colors.light_gray,
    width: "100%",
    height: 50,
    padding: 16,
    marginBottom: 16,
  },
  inputPass: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    marginBottom: 43,
  },
  passHide: {
    position: "relative",
    left: -90,
    top: 15,
  },
  passHideText: {
    color: Colors.blues,
  },
  textContainer: {
    flexDirection: "row",
  },
  text: {
    color: Colors.blues,
    fontFamily: "roboto-regular",
    fontSize: Fonts.normal,
  },
  textSolid: {
    textDecorationLine: "underline",
    marginLeft: 5,
  },
});



