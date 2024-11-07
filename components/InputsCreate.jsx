import React from "react";
import { TextInput, StyleSheet } from "react-native";
import {Colors} from "../styles/global";

const InputsCreate = ({ placeholder, onTextChange, value }) => {
  return (
    <TextInput
      onChangeText={onTextChange}
      value={value}
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={Colors.text_gray}
    />
  );
};

export default InputsCreate;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
  },
});
