import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ListItem from "./components/ListItem";

const DisplayLIsts = ({ navigation, route }) => {
  var stfType = route.params.paramKey;
  // var stfType = "Doctor";
  var pageTitle = route.params.paramKey1;
  // var pageTitle = "Penumonia Positive";

  useLayoutEffect(() => {
    navigation.setOptions({
      title: pageTitle + " List",
      headerTitleStyle: { fontSize: 25 },
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 20 }}
          onPress={() => {
            navigation.navigate("StaffDashboard");
          }}
        >
          <AntDesign name="left" size={27} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ListItem fName="Shanuka" lName="Peiris" sym="Positive" xRay="Positive" />
      <ListItem fName="Kapila" lName="Peiris" sym="Positive" xRay="Negative" />
      <ListItem fName="Kapila" lName="Peiris" />
    </View>
  );
};

export default DisplayLIsts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
});
