import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Input } from "react-native-elements";
import DropDownPicker from "react-native-dropdown-picker";
import { StatusBar } from "expo-status-bar";

const Register = ({ navigation }) => {
  const [openAccType, setOpenAccType] = useState(false);
  const [accValue, setAccValue] = useState("");
  const [accItems, setAccItems] = useState([
    { label: "Patient Account", value: "Patient" },
    { label: "Staff Account", value: "Staff" },
  ]);

  const [openStaffType, setOpenStaffType] = useState(false);
  const [staffValue, setStaffValue] = useState("");
  const [staffItems, setStaffItems] = useState([
    { label: "Doctor", value: "Doctor" },
    { label: "Radiographer", value: "Radiographer" },
    { label: "Admission Officer", value: "Admission Officer" },
  ]);

  const [changeViewState, setChangeViewState] = useState(false);
  const [required, setRequired] = useState(0);

  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [nic, setNic] = useState("");
  const [regNum, setRegNum] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (accValue == "Staff") {
      setChangeViewState(true);
    } else {
      setChangeViewState(false);
    }
  }, [accValue]);

  useEffect(() => {
    if (required == 1) {
      setTimeout(() => {
        setRequired(0);
      }, 2000);
    }
  }, [required]);

  const register = () => {
    if (fullName == "" || userName == "" || password == "" || contact == "") {
      setRequired(1);
      console.log("object", fullName);
    } else {
      console.log("no");
      navigation.replace("Patient Login");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {register && (
        <Text style={{ color: "red", opacity: required }}>
          * Please fill all fields to continue
        </Text>
      )}
      <Text style={styles.header}>Create a Heal Port Account</Text>
      <View style={styles.inputContainer}>
        <DropDownPicker
          open={openAccType}
          value={accValue}
          items={accItems}
          setOpen={setOpenAccType}
          setValue={setAccValue}
          setItems={setAccItems}
          zIndex={1000}
          closeAfterSelecting={true}
          style={{ height: 30, width: 200, alignSelf: "center" }}
          placeholder="Account Type"
          containerStyle={{
            height: 10,
            marginTop: 20,
            marginBottom: 40,
          }}
        />

        <Input
          placeholder="Full Name"
          type="text"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
        <Input
          placeholder="UserName"
          type="text"
          value={userName}
          onChangeText={(text) => setUserName(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="text"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {changeViewState && (
          <DropDownPicker
            open={openStaffType}
            value={staffValue}
            items={staffItems}
            setOpen={setOpenStaffType}
            setValue={setStaffValue}
            setItems={setStaffItems}
            zIndex={2000}
            closeAfterSelecting={true}
            style={{ height: 30, width: 200, alignSelf: "center" }}
            placeholder="Staff Type"
            containerStyle={{ height: 10, marginTop: 20, marginBottom: 40 }}
          />
        )}
        <Input
          placeholder="Contact"
          type="number"
          value={contact}
          keyboardType="numeric"
          maxLength={10}
          onChangeText={(text) => setContact(text)}
        />

        {changeViewState ? (
          <Input
            placeholder="Registration No"
            type="text"
            value={regNum}
            onChangeText={(text) => setRegNum(text)}
          />
        ) : (
          <Input
            placeholder="NIC Number"
            type="text"
            value={nic}
            onChangeText={(text) => setNic(text)}
          />
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={register}>
        {loading ? (
          <ActivityIndicator animating={true} color="white" size="large" />
        ) : (
          <Text style={styles.btnText}>Register</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.login}
        onPress={() => navigation.navigate("Patient Login")}
      >
        <Text>Have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 25,
    color: "#a0deb0",
    fontWeight: "bold",
  },
  inputContainer: {
    width: 270,
  },
  button: {
    backgroundColor: "#a0deb0",
    padding: 15,
    width: 250,
    margin: 5,
    marginTop: 10,
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
    zIndex: 1000,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  login: {
    marginTop: 30,
  },
});
