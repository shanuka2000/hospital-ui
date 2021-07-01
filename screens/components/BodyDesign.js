import React from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const image1 = require("../../Images/medical-report.png");
const image2 = require("../../Images/medical-reports.png");

const BodyDesign = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<ImageBackground source={image1} style={styles.imageStyle1}>
				<TouchableOpacity
					style={styles.notification}
					onPress={() => navigation.navigate("notification")}
				>
					<Text style={styles.text}>Notifications</Text>
				</TouchableOpacity>
			</ImageBackground>

			<ImageBackground source={image2} style={styles.imageStyle2}>
				<TouchableOpacity
					style={styles.symptoms}
					onPress={() => {
						navigation.navigate("symptoms");
					}}
				>
					<Text style={styles.text}>Check Symptoms</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);
};

export default BodyDesign;

const styles = StyleSheet.create({
	notification: {
		backgroundColor: "transparent",
		padding: 20,
		width: 300,
		height: 220,
		alignItems: "center",
		justifyContent: "center",
		margin: 10,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "white",
	},
	symptoms: {
		backgroundColor: "transparent",
		padding: 20,
		width: 300,
		height: 220,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
		margin: 10,
		borderWidth: 1,
		borderColor: "white",
	},
	text: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#282b27",
	},

	imageStyle1: {
		resizeMode: "contain",
		justifyContent: "center",
		width: 200,
		height: 190,
		alignItems: "center",
		marginBottom: 50,
	},
	imageStyle2: {
		resizeMode: "contain",
		justifyContent: "center",
		width: 170,
		height: 180,
		alignItems: "center",
		marginLeft: 15,
	},
});
