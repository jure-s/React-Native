import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
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


const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonActive, setButtonActive] = useState(false);

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (email && password) {
      setButtonActive(true);
      return;
    }
    setButtonActive(false);
  }, [email, password]);

 
  const signIn = () => {
    Alert.alert("Credentials", `${email} ${password}`);
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
              <Text style={styles.contentTitle}>Увійти</Text>

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
                onPress={signIn}
              >
                Увійти
              </Buttons>

              <View style={styles.textContainer}>
                <Text style={styles.text}>Немає акаунту?</Text>
                <TouchableOpacity onPress={()=> console.log("Зареєструватися")}>
                  <Text style={[styles.text, styles.textSolid]}>
                    Зареєструватися
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

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
    height: 489,
    backgroundColor: "#FFFFFF",
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  contentTitle: {
    fontSize: 17,
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#E8E8E8",
    backgroundColor:"#F6F6F6",
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
    color: "#1B4371",
  },
  textContainer: {
    flexDirection: "row",
  },
  text: {
    color: "#1B4371",
    fontSize: 16,
  },
  textSolid: {
    textDecorationLine: "underline",
    marginLeft: 5,
  },
});