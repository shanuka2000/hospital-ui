import React, { useLayoutEffect } from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
} from "react-native";

const Notification = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Notifications",
		});
	}, [navigation]);

	return (
		<View style={styles.container}>
			<ScrollView style={{ width: 400 }}>
				<View style={styles.notificationContainer}>
					<Text style={styles.text}>Hello</Text>
					<TouchableOpacity style={styles.btn}>
						<Text style={styles.textBtn}>See More</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
};

export default Notification;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "whitesmoke",
		alignItems: "center",
		padding: 10,
	},
	notificationContainer: {
		width: 390,
		height: 60,
		padding: 10,
		borderRadius: 20,
		margin: 5,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#a0deb0",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,

		elevation: 8,
	},
	text: {
		flex: 0.7,
		marginLeft: 10,
		fontWeight: "bold",
		fontSize: 20,
		color: "white",
	},
	btn: {
		flex: 0.3,
		backgroundColor: "whitesmoke",
		padding: 10,
		borderRadius: 30,
		alignItems: "center",
	},
	textBtn: {
		fontWeight: "bold",
		fontSize: 17,
		color: "#a0deb0",
	},
});
