import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const StaffStatus = ({ title, count, dis }) => {
  return (
    <View style={styles.subView}>
      <Text style={styles.viewText}>
        {title}
        {count}
      </Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {dis && <MaterialIcons name="lock-outline" size={24} color="red" />}
        <TouchableOpacity style={styles.btn} disabled={dis}>
          <Text style={styles.btnText}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StaffStatus;

const styles = StyleSheet.create({
  subView: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
  },
  viewText: {
    fontSize: 20,
    color: "#a0deb0",
    fontWeight: "600",
  },
  btn: {
    backgroundColor: "#a0deb0",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 11,
    paddingBottom: 11,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#a0deb0",
    borderRadius: 10,
    marginLeft: 5,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#7ba9e0",
  },
});
