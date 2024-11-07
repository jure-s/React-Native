import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import {Colors} from "../styles/global";

const InputsSing = ({
  placeholder,
  keyboard,
  showPassword,
  autoComplete,
  onTextChange,
  value,
}) => {
  const normalStyle = {
    borderColor: Colors.border_gray,
    color: Colors.text_gray,
    backgroundColor: Colors.light_gray,
  };

  const focusStyle = {
    borderColor: Colors.oranges,
    color: Colors.black_primary,
    backgroundColor: Colors.whites,
  };

  const [inputFocus, setInputFocus] = useState({ ...normalStyle });

  return (
    <TextInput
      onChangeText={onTextChange}
      value={value}
      secureTextEntry={showPassword ? false : true}
      onFocus={() => {
        setInputFocus({ ...focusStyle });
      }}
      onBlur={() => {
        setInputFocus({ ...normalStyle });
      }}
      style={[styles.input, inputFocus]}
      placeholder={placeholder}
      placeholderTextColor={Colors.text_gray}
      keyboardType={keyboard}
      autoComplete={autoComplete}
    />
  );
};

export default InputsSing;

const styles = StyleSheet.create({
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
});