import React, { useEffect, useLayoutEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ActivityIndicator,
} from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import BodyDesign from "./components/BodyDesign";

const PatientDashboard = ({ navigation }) => {
	const name = "Shamini";
	const numNotification = "1";

	const [userName, setUsername] = useState("");
	const [timeGreet, setTimeGreet] = useState("");
	const [state, setState] = useState(false);

	useEffect(() => {
		var today = new Date();
		var time = today.getHours();

		if (time > 5 && time < 12) {
			setTimeGreet("Good Morning!");
		} else if (time > 11 && time < 15) {
			setTimeGreet("Good Afternoon!");
		} else {
			setTimeGreet("Good Evening!");
		}

		setUsername(name);
		console.log(timeGreet);

		const randomTime = Math.floor(Math.random() * 2000 + 1000);

		setTimeout(() => {
			setState(true);
		}, randomTime);
	}, []);

	useLayoutEffect(() => {
		navigation.setOptions({
			title: "",
			headerLeft: () => (
				<TouchableOpacity
					style={{
						marginLeft: 20,
						width: 50,
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<AntDesign
						name="notification"
						size={24}
						color="white"
						onPress={() => {
							navigation.navigate("notification");
						}}
					/>
					<Text style={{ color: "white" }}>{numNotification}</Text>
				</TouchableOpacity>
			),
			headerRight: () => (
				<TouchableOpacity
					style={{ marginRight: 20 }}
					onPress={() => navigation.replace("Heal Port")}
				>
					<AntDesign name="logout" size={24} color="white" />
				</TouchableOpacity>
			),
		});
	}, [navigation]);

	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			<View style={styles.subHeading}>
				<Text style={styles.header}>{timeGreet + " " + userName} </Text>
			</View>
			<View style={styles.body}>
				{!state ? (
					<View style={styles.loading}>
						<ActivityIndicator animating={true} color="white" size="large" />
						<Text style={{ marginLeft: 20 }}>Loading...</Text>
					</View>
				) : (
					<View>
						<BodyDesign />
					</View>
				)}
			</View>
		</View>
	);
};

export default PatientDashboard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "whitesmoke",
		justifyContent: "center",
		alignItems: "center",
	},
	subHeading: {
		flex: 0.3,
		backgroundColor: "whitesmoke",
	},
	header: {
		fontSize: 50,
		padding: 10,
		fontWeight: "bold",
		marginTop: 20,
		marginLeft: 20,
		color: "#657068",
	},
	body: {
		flex: 0.7,
		backgroundColor: "#a0deb0",
		justifyContent: "center",
		alignItems: "center",
		borderTopStartRadius: 20,
		borderTopEndRadius: 20,
		width: 410,
	},
	loading: {
		width: 200,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
	},
});
