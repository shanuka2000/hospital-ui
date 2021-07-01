import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ListItem = ({ fName, lName, sym, xRay }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.nameTitle}>Malagalage Shanuka Peiris</Text>
        {sym && (
          <View
            style={{
              backgroundColor: "#a0deb0",
              padding: 10,
              margin: 5,
              borderRadius: 5,
            }}
          >
            <Text style={{ margin: 5, color: "white", fontWeight: "600" }}>
              Symptoms Prediction :{" "}
              <Text style={{ color: "#7ba9e0" }}>{sym}</Text>
            </Text>
            <Text style={{ margin: 5, color: "white", fontWeight: "600" }}>
              X-Ray Prediction :{" "}
              <Text style={{ color: "#7ba9e0" }}>{xRay}</Text>
            </Text>
          </View>
        )}
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>View More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    width: "97%",
    backgroundColor: "white",
    alignSelf: "center",
    margin: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#a0deb0",
  },
  nameTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#a0deb0",
    alignSelf: "center",
  },
  btn: {
    backgroundColor: "#a0deb0",
    height: 40,
    padding: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#a0deb0",
    marginLeft: 5,
    alignSelf: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#7ba9e0",
  },
});
