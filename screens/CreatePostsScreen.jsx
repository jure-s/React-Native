import React, { useState, useEffect } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import InputsCreate from "../components/InputsCreate";
import Buttons from "../components/Buttons";
import {Colors, Fonts} from "../styles/global";

const CreatePostsScreen = () => {
  const [namePhoto, setNamePhoto] = useState("");
  const [mapPhoto, setMapPhoto] = useState("");
  const [isButtonActive, setButtonActive] = useState(false);

  const handleNameChange = (value) => {
    setNamePhoto(value);
  };

  const handleMapChange = (value) => {
    setMapPhoto(value);
  };

  const reset = () => {
    setNamePhoto("");
    setMapPhoto("");
  };

  useEffect(() => {
    if (namePhoto && mapPhoto) {
      setButtonActive(true);
      return;
    }
    setButtonActive(false);
  }, [namePhoto, mapPhoto]);

  const create = () => {
    Alert.alert("Credentials", `${namePhoto} + ${mapPhoto}`);
    reset();
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgSection}>
        <View style={styles.imgContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <MaterialIcons
              name="photo-camera"
              size={24}
              color={Colors.text_gray}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.fotoWork}>Завантажте фото</Text>
      </View>

      <View>
        <View style={styles.positionContainer}>
          <InputsCreate
            value={namePhoto}
            onTextChange={handleNameChange}
            placeholder="Назва..."
          />
        </View>

        <View style={[styles.positionContainer, styles.positionContainerImg]}>
          <Feather
            style={styles.inputImg}
            name="map-pin"
            size={24}
            color={Colors.text_gray}
          />
          <InputsCreate
            value={mapPhoto}
            onTextChange={handleMapChange}
            placeholder="Місцевість..."
          />
        </View>

        <Buttons
          buttonSize="large"
          isButtonActive={isButtonActive}
          onPress={create}
        >
          Опубліковати
        </Buttons>

        <View style={styles.treshBtn}>
          <Buttons buttonSize="medium">
            <Feather name="trash-2" size={24} color={Colors.text_gray} />
          </Buttons>
        </View>
      </View>
    </View>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
    borderColor: "#E5E5E5",
    borderWidth: 1,
  },
  imgSection: {
    marginBottom: 48,
  },
  imgContainer: {
    width: "100%",
    height: 240,
    backgroundColor: Colors.light_gray,
    borderColor: Colors.border_gray,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#BDBDBD30",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  fotoWork: {
    fontFamily: "roboto-regular",
    fontSize: Fonts.normal,
    color: Colors.text_gray,
  },
  positionContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: Colors.border_gray,
    marginBottom: 16,
  },
  positionContainerImg: {
    marginBottom: 32,
  },
  inputImg: {
    marginRight: 6,
  },
  treshBtn: {
    alignItems: "center",
    marginTop: 120,
  },
});
