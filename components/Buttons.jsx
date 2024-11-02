import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Buttons = ({ children, onPress, isButtonActive, buttonSize }) => {
  return (
    <TouchableOpacity
      style={[
        isButtonActive ? styles.button : styles.disabledButton,
        buttonSize === "small"
          ? styles.buttonSmall
          : buttonSize === "medium"
          ? styles.buttonMedium
          : styles.buttonLarge,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          { color: isButtonActive ? '#FFFFFF' : '#BDBDBD' },
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  disabledButton: {
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  buttonSmall: {
    width: 34,
    height: 34,
  },
  buttonMedium: {
    width: 70,
    height: 40,
  },
  buttonLarge: {
    width: "100%",
    height: 51,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});