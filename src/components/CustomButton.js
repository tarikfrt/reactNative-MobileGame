import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomButton = ({buttonText,setWitdh,handleOnPress,buttonColor,pressedButtonColor}) => {
  return (
    <Pressable
      onPress={() => handleOnPress()}
      style={({ pressed }) => [
        {
          width:setWitdh,
          backgroundColor: pressed ? buttonColor : pressedButtonColor,
        },
        styles.button,
      ]}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderWidth:1,
    height:50,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
    marginTop:20,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
});
