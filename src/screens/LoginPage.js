import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Loading from "../components/Loading";
import React, { useState, useEffect } from "react";
import { CustomTextInput, CustomButton } from "../components";

import { useSelector, useDispatch } from 'react-redux'
import { setIsLoading, setPassword, setUserName, setLogin } from "../redux/UserSlice";
import { login } from "../redux/UserSlice";
import { db } from "../../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (email) {
      fetchUsername();
    }
  }, [email]);

  const fetchUsername = async () => {
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("userEmail", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          setUsername(doc.data().userName);
        });
      } else {
        setUsername('');
      }
    } catch (error) {
      console.error("Error fetching username: ", error);
    }
  };

  const { isLoading } = useSelector((state) => state.user);

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/loginImage.png")}
        style={styles.image}
      />
      <Text style={styles.welcome}>Hoş Geldiniz</Text>
      <StatusBar style="auto" />

      <CustomTextInput
        title="E-Mail"
        isSecureText={false}
        handleOnChangeText={(text) => setEmail(text)}
        handleValue={email}
        handlePlaceHolder="Enter Your E-Mail"
      />
      
      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={(password) => setPassword(password)}
        handleValue={password}
        handlePlaceHolder="Enter Your Password"
      />

      <CustomButton
        buttonText="Giriş Yap"
        setWitdh="80%"
        handleOnPress={handleLogin} // Fixed handleOnPress to use handleLogin function
        buttonColor="gray"
        pressedButtonColor="deepskyblue"
      />

      <CustomButton
        buttonText="Kayıt Ol"
        setWitdh="30%"
        handleOnPress={() => navigation.navigate("SignUp")}
        buttonColor="gray"
        pressedButtonColor="palegreen"
      />

      <Text style={styles.usernameText}>{username}</Text>

      {isLoading && <Loading changeIsLoading={() => dispatch(setIsLoading(false))} />}
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 26,
    marginTop: 30,
  },
  image: {
    width: 150,
    height: 150,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white"
  },
  button: {
    borderWidth: 1,
    width: '80%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  signupButton: {
    borderWidth: 1,
    width: '30%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  usernameText: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
});
