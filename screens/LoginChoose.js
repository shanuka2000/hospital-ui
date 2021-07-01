import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const LoginChoose = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.heading}>Welcome to Heal Port</Text>
      <Image source={require("../Images/logo-3.png")} style={styles.image} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Patient Login");
        }}
      >
        <Text style={styles.btnText}>Continue as a Patient</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Staff Login");
        }}
      >
        <Text style={styles.btnText}>Continue as a Staff Member</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.register}
        onPress={() => navigation.navigate("Register to Heal Port")}
      >
        <Text>Don't have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginChoose;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#a0deb0",
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 100,
    margin: 5,
  },
  button: {
    backgroundColor: "#a0deb0",
    padding: 15,
    width: 300,
    margin: 5,
    marginTop: 5,
    borderRadius: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  register: {
    marginTop: 30,
  },

  //npm i react-native-awesome-loading
});
