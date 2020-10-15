import React, { useState } from "react";
import logo from "../../assets/logo.jpeg";
import axios from "axios";
import { API_BASE_URL } from "../config";

import { ToastAndroid } from "react-native";

// import  {Toast.A}

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Layout from "../components/Layout";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");

  const handlelSubmit = async () => {
    // event.preventDefault();
    console.log("Handle Submit Clicked");

    const data = {
      email,
      password,
    };

    try {
      const res = await axios.post(`${API_BASE_URL}/auth`, data);
      console.log(res.data);

      ToastAndroid.show("Successfully Logged in!", ToastAndroid.SHORT);
      navigation.navigate("DashboardScreen", { userEmail: email });
      setEmail("");
      setPassword("");
      setError(false);
    } catch (e) {
      console.log("Error Message", e.message);
      console.log(e);
      setError(true);
      ToastAndroid.show("Error Login!", ToastAndroid.SHORT);
    }
    // const jsonData = JSON.stringify(data);
  };

  console.log("Error--->", error);

  return (
    <Layout>
      <View style={styles.loginWrapper}>
        <View style={styles.logoWrapper}>
          <Image source={logo} style={styles.logoImage} />
        </View>
        <Text style={styles.logoText}>Mr Sister Cafe</Text>
        <Text style={styles.infoText}>Please login to get started!</Text>
        <TextInput
          style={styles.textInput}
          autoCompleteType="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter a email/username"
        />
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          placeholder="Enter a password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={handlelSubmit} style={styles.loginButton}>
          <Text style={{ fontSize: 20, color: "#fff", textAlign: "center" }}>
            Login
          </Text>
        </TouchableOpacity>
        {error && (
          <Text style={styles.erroMessage}>* Invalid username/password</Text>
        )}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  loginWrapper: {
    height: "80%",
    justifyContent: "center",
    // alignItems: "center",
  },
  logoWrapper: {
    // backgroundColor: "red",
  },
  logoImage: {
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 20,
    marginTop: 100,
    width: 100,
    height: 100,
  },
  loginButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#19789e",
  },
  logoText: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#19789e",
    textTransform: "uppercase",
  },
  infoText: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 40,
    color: "#464646",
  },
  erroMessage: {
    marginTop: 15,
    color: "red",
  },
  textInput: {
    backgroundColor: "#dfdfdf",
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
    borderColor: "#929191",
    borderWidth: 1,
    color: "black",
  },
});

export default LoginScreen;
