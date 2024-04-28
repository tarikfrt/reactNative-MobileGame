import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { CustomTextInput, CustomButton } from "../components";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'

const SignupPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const sendData = async () => {
    try {
      // Firebase Authentication ile kullanıcı oluştur
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      // Kullanıcı oluşturulduktan sonra kullanıcı bilgilerini Firestore'a kaydet
      const userData = {
        userEmail: email,
        userName: userName,
        // Password'i saklamak yerine Firebase Authentication kullanarak doğrudan giriş yapılabilir.
        // Ancak, güvenlik nedeniyle password veritabanında saklanmamalıdır.
      };
      const docRef = await addDoc(collection(db, "users"), userData);
      console.log("Document written with ID: ", docRef.id);
  
      console.log("User successfully registered:", userCredential.user.uid);
      // Başarılı kayıt olduğunda mesajı görüntüle
      alert("Kayıt Başarılı!");
    } catch (e) {
      console.error("Error registering user: ", e);
      // Hata durumunda mesajı görüntüle
      alert("Kayıt sırasında bir hata oluştu.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/signUp.png")}
        style={styles.image}
      />
      <Text style={styles.welcome}>Kayıt Ol</Text>
      <StatusBar style="auto" />

      <CustomTextInput
        title="E-Mail"
        isSecureText={false}
        handleOnChangeText={setEmail}
        handleValue={email}
        handlePlaceHolder="Enter Your E-Mail"
      />

      <CustomTextInput
        title="UserName"
        isSecureText={false}
        handleOnChangeText={setUserName}
        handleValue={userName}
        handlePlaceHolder="Enter Your User Name"
      />
      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={setPassword}
        handleValue={password}
        handlePlaceHolder="Enter Your Password"
      />

      <CustomButton
        buttonText="Kayıt Ol"
        setWitdh="30%"
        handleOnPress={sendData}
        buttonColor="gray"
        pressedButtonColor="palegreen"
      />
    </View>
  );
};

export default SignupPage;

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
});
