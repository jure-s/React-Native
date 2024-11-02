import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
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
import profilePhoto from "../assets/images/Avatar.jpg"; 

const RegistrationScreen = ({ navigation }) => {

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
    const isNameValid = name.length >= 2;
    const isEmailValid = email.includes("@") && email.includes(".");
    const isPasswordValid = password.length >= 6;

    if (isNameValid && isEmailValid && isPasswordValid) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [name, email, password]);



  const signUp = () => {
    
    if (email && password && name) {
      console.log("sing IN", email, password, name)
      reset();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={ImageBG} style={styles.imageBg}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.contentBox}>
              <View style={styles.avatarBox}>
                <Image
                  style={styles.avatarImg}
                  source={ profilePhoto }
                />

                <TouchableOpacity style={styles.avatarAdd}>
                  <Image style={styles.tinyLogo} source={AddAvatar} />
                </TouchableOpacity>
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
                <TouchableOpacity onPress={signUp}>
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
    justifyContent: "flex-end",
  },
  contentBox: {
    width: "100%",
    height: 549,
    backgroundColor: "#FFFFFF",
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
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "relative",
    top: -60,
  },
  avatarImg: {
    width: 120,
    height: 120,
    borderRadius: 16,
    position: "relative",
  },
  avatarAdd: {
    position: "absolute",
    left: 107,
    top: 80,
  },
  contentTitle: {
    fontSize: 17,
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
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