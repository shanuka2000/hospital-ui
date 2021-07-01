import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { Avatar, Image } from "react-native-elements";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import StaffStatus from "./components/StaffStatus";

const StaffDashboard = ({ navigation }) => {
  const name = "Namal Sundram";
  const prof = "Doctor";
  const numNotification = "1";
  const [ss, setss] = useState("p");
  const [profession, setProfession] = useState("Admin");

  //   useLayoutEffect(() => {
  //     navigation.setOptions({
  //       title: "Dashboard",
  //       headerTitleStyle: { fontSize: 35, color: "#a0deb0", fontWeight: "bold" },
  //       headerTitleAlign: "left",
  //       headerStyle: { backgroundColor: "#626e60" },
  //     });
  //   }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>Dashboard</Text>
        <View style={styles.subPart}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <AntDesign name="notification" size={28} color="#a0deb0" />
            <Text style={{ color: "#a0deb0" }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginRight: 5 }}
            onPress={() => navigation.replace("Staff Login")}
          >
            <AntDesign name="logout" size={25} color="#a0deb0" />
          </TouchableOpacity>
        </View>
      </View>

      {/* User Info */}
      <View style={styles.userInfo}>
        <Avatar
          rounded
          size={"large"}
          source={{
            uri: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
        />
        <Text style={styles.stName}>{name}</Text>
        <Text style={styles.stProf}>{prof}</Text>
      </View>

      <Text
        style={{
          fontSize: 23,
          alignSelf: "center",
          margin: 20,
          color: "#7ba9e0",
          fontWeight: "700",
        }}
      >
        Hospital Current Status
      </Text>

      {/* Patient Overall information */}
      {profession == "Doctor" ? (
        <View style={styles.patientInfo}>
          <StaffStatus title="Pneumonia Positive: " count="12" />
          <StaffStatus title="Pneumonia Negative: " count="24" />
          <StaffStatus title="Patient Count: " count="36" dis="false" />
        </View>
      ) : profession == "Radiographer" ? (
        <View style={styles.patientInfo}>
          <StaffStatus title="X-ray image Requesting patients: " count="12" />
          <StaffStatus title="Patient Count: " count="36" dis="false" />
        </View>
      ) : (
        <View style={styles.patientInfo}>
          <StaffStatus title="Admission requesting Patients: " count="12" />
          <StaffStatus title="Admitted Patients: " count="24" dis="false" />
          <StaffStatus title="Discharge Approved Patents: " count="36" />
        </View>
      )}

      {/* Image */}
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../Images/doctor.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </View>
  );
};

export default StaffDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e1e1",
    // alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    width: "100%",
    justifyContent: "space-between",
    // borderBottomWidth: 1,
    marginTop: 10,
  },
  heading: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#a0deb0",
  },
  subPart: {
    flexDirection: "row",
    alignItems: "center",
  },
  userInfo: {
    // borderBottomWidth: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#a0deb0",
    width: "97%",
    alignSelf: "center",
    borderRadius: 20,
  },
  stName: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  stProf: {
    fontSize: 18,
    fontWeight: "500",
    color: "#919690",
  },
  patientInfo: {
    // borderBottomWidth: 1,
    width: "97%",
    alignSelf: "center",
    padding: 10,
  },
});
