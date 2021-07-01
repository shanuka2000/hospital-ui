import React, { useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";

const Welcome = ({ navigation }) => {
	useEffect(() => {
		const randomTime = Math.floor(Math.random() * 3000 + 1000);
		console.log(randomTime);

		setTimeout(() => {
			navigation.replace("Heal Port");
		}, randomTime);
	}, []);
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text style={styles.heading}>Heal Port</Text>
			<Text style={styles.sub}>By Shanuka Peiris from Code Hunters</Text>
			<View style={styles.loading}>
				<ActivityIndicator animating={true} color="white" size="large" />
				<Text style={{ marginLeft: 20 }}>Loading...</Text>
			</View>
		</View>
	);
};

export default Welcome;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#a0deb0",
		justifyContent: "center",
		alignItems: "center",
	},
	heading: {
		fontSize: 45,

		color: "white",
		fontWeight: "bold",
	},
	sub: {
		color: "white",
		marginBottom: 200,
		fontSize: 18,
	},
	loading: {
		width: 200,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
	},
});
