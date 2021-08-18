import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
const screen = Dimensions.get("window");
export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];
  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }
  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: { color: "black", fontSize: 25 },
  button: {
    backgroundColor: "#fff",
    flex: 1,
    height: Math.floor(screen.width / 4 - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(screen.width / 4),
    borderColor: "#ccc",
    borderWidth: 2,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: { backgroundColor: "#939ed5" },
  buttonAccent: { backgroundColor: "#3f51b5" },
  textSecondary: { color: "#060606" },
});
