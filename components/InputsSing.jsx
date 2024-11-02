import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const InputsSing = ({
  placeholder,
  keyboard,
  showPassword,
  autoComplete,
  onTextChange,
  value,
}) => {
  const normalStyle = {
    borderColor: "#E8E8E8",
    color: '#F6F6F6',
    backgroundColor: '#BDBDBD',
  };

  const focusStyle = {
    borderColor: "#FF6C00",
    color: "#212121",
    backgroundColor: "#FFFFFF",
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
      placeholderTextColor={"#BDBDBD"}
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
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    width: "100%",
    height: 50,
    padding: 16,
    marginBottom: 16,
  },
});