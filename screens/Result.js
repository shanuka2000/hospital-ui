import React, { useLayoutEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";

const Result = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Prediction Result",
			headerTitleStyle: { color: "#a0deb0", fontWeight: "bold", fontSize: 30 },
			headerStyle: { backgroundColor: "whitesmoke" },
			headerLeft: () => (
				<TouchableOpacity
					style={{ marginLeft: 20 }}
					onPress={() => {
						navigation.navigate("symptomsMain");
					}}
				>
					<AntDesign name="left" size={27} color="#a0deb0" />
				</TouchableOpacity>
			),
		});
	}, [navigation]);

	return (
		<View style={styles.container}>
			<StatusBar style="dark" />
			<View style={styles.header}>
				<Text style={styles.text}>About Prediction</Text>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<TouchableOpacity style={styles.btnOne}>
						<Text style={{ color: "#7ba9e0", fontWeight: "bold" }}>
							Read More
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btnTwo}>
						<AntDesign name="close" size={24} color="white" />
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.body}>
				<ScrollView style={styles.scroll}>
					<Text
						style={{
							alignSelf: "center",
							fontSize: 20,
							fontWeight: "bold",
							color: "#a0deb0",
						}}
					>
						This is the result
					</Text>
				</ScrollView>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						alignSelf: "center",
					}}
				>
					<TouchableOpacity style={styles.admitBtn}>
						<Text style={styles.btnText}>Request To Admit</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<AntDesign name="infocirlceo" size={25} color="#7ba9e0" />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Result;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "whitesmoke",
	},
	header: {
		backgroundColor: "#d97871",
		width: 400,
		height: 50,
		padding: 15,
		alignItems: "center",
		marginTop: 20,
		borderRadius: 5,
		justifyContent: "space-between",
		flexDirection: "row",
	},
	text: {
		fontSize: 18,
		color: "white",
		fontWeight: "bold",
	},
	btnOne: {
		borderWidth: 2,
		padding: 5,
		marginRight: 10,
		backgroundColor: "white",
		borderColor: "white",
		borderRadius: 5,
	},
	body: {
		marginTop: 20,
		height: 600,
	},
	scroll: {
		backgroundColor: "white",
		width: 400,
		height: 400,
		borderRadius: 10,
		padding: 10,
	},
	admitBtn: {
		alignSelf: "center",
		backgroundColor: "#a0deb0",
		padding: 12,
		width: 250,
		margin: 20,
		borderRadius: 5,
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
		fontSize: 18,
	},
});
