import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
	TouchableOpacity,
} from "react-native";
import { Image, Input } from "react-native-elements";

const StaffAuth = ({ navigation }) => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const signIn = () => {
		navigation.replace("StaffDashboard");
	};

	return (
		<KeyboardAvoidingView style={styles.container}>
			<Image source={require("../Images/reg-2.png")} style={styles.image} />
			<View style={styles.inputContainer}>
				<Input
					style={styles.inputField}
					placeholder="Enter your Username"
					type="text"
					value={userName}
					onChangeText={(text) => setUserName(text)}
					underlineColorAndroid="transparent"
				/>
				<Input
					style={styles.inputField}
					placeholder="Enter your Password"
					secureTextEntry
					type="password"
					value={password}
					onChangeText={(text) => setPassword(text)}
					underlineColorAndroid="transparent"
				/>
			</View>
			<TouchableOpacity style={styles.button} onPress={signIn}>
				<Text style={styles.btnText}>Login</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.register}
				onPress={() => navigation.navigate("Register to Heal Port")}
			>
				<Text>Don't have an account?</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};

export default StaffAuth;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "whitesmoke",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: 300,
		height: 300,
		margin: 10,
	},
	inputContainer: {
		marginTop: 5,
		width: 300,
	},
	inputField: {},
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
	},
	btnText: {
		color: "white",
		fontWeight: "bold",
	},
	register: {
		marginTop: 30,
	},
});
