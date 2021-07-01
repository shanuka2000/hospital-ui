import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";

const Symptoms = ({ navigation }) => {
	// useLayoutEffect(() => {
	// 	navigation.setOptions({
	// 		title: "",
	// 	});
	// }, [navigation]);

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text style={styles.header}>Let's Find Out Your Disease</Text>

			<TouchableOpacity
				style={{ marginLeft: 280, marginTop: 40 }}
				onPress={() => {
					navigation.navigate("symptomsMain");
				}}
			>
				<AntDesign name="arrowright" size={30} color="#a0deb0" />
			</TouchableOpacity>
		</View>
	);
};

export default Symptoms;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "whitesmoke",
		justifyContent: "center",
		alignItems: "center",
	},

	header: {
		fontSize: 50,
		padding: 10,
		fontWeight: "bold",
		marginTop: 20,
		marginLeft: 20,
		color: "#a0deb0",
	},
});
