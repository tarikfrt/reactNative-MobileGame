import { StyleSheet, Text, View, Pressable,Dimensions } from "react-native";
import React from "react";
import { useSelector } from 'react-redux';

const { width } = Dimensions.get('window');
const buttonWidth = width / 2 - 20; // Her bir butonun genişliği ekranın yarısı kadar olacak şekilde ayarlanıyor


const HomePage = ({ navigation }) => {
  const { userName } = useSelector((state) => state.user);

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Merhaba</Text>
      <Text style={styles.userName}>{userName}</Text>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "darkorange" : "orange" },
          styles.profileButton,
        ]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.buttonText}>Profil</Text>
      </Pressable>
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? "darkgreen" : "green" },
            styles.button,
            styles.squareButton, // Apply square button style
          ]}
          onPress={() => navigation.navigate("OnlineGamePage")}
        >
          <Text style={[styles.buttonText, styles.centeredText]}>Online Oyna</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? "darkgreen" : "green" },
            styles.button,
            styles.squareButton, // Apply square button style
          ]}
          onPress={() => navigation.navigate("OfflineGamePage")}
        >
          <Text style={[styles.buttonText, styles.centeredText]}>Offline Oyna</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50, // Adjust the top padding for space between the header and the content
  },
  greeting: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    marginBottom: 20,
    color:'red'
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  button: {
    width:buttonWidth,
    padding: 15,
    borderRadius: 8,
  },
  squareButton: { // Style for square buttons
    aspectRatio: 1, // Maintain square aspect ratio
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  centeredText: { // Style for centering text within buttons
    textAlign: "center",
  },
  profileButton: {
    padding: 20,
    borderRadius: 8,
    marginBottom: 20, // Move the profile button down
  },
});
