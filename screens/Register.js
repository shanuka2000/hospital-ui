import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import DropDownPicker from "react-native-dropdown-picker";

const Register = ({ navigation }) => {
	const [openAccType, setOpenAccType] = useState(false);
	const [accValue, setAccValue] = useState("");
	const [accItems, setAccItems] = useState([
		{ label: "Patient Account", value: "Patient" },
		{ label: "Staff Account", value: "Staff" },
	]);

	const [openStaffType, setOpenStaffType] = useState(false);
	const [staffValue, setStaffValue] = useState("");
	const [staffItems, setStaffItems] = useState([
		{ label: "Doctor", value: "Doctor" },
		{ label: "Radiographer", value: "Radiographer" },
		{ label: "Admission Officer", value: "Admission Officer" },
	]);

	const [changeViewState, setChangeViewState] = useState(false);

	useEffect(() => {
		if (accValue == "Staff") {
			setChangeViewState(true);
		} else {
			setChangeViewState(false);
		}
	}, [accValue]);

	const register = () => {
		navigation.replace("Patient Login");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Create a Heal Port Account</Text>
			<View style={styles.inputContainer}>
				<DropDownPicker
					open={openAccType}
					value={accValue}
					items={accItems}
					setOpen={setOpenAccType}
					setValue={setAccValue}
					setItems={setAccItems}
					zIndex={1000}
					closeAfterSelecting={true}
					style={{ height: 30, width: 200, alignSelf: "center" }}
					placeholder="Account Type"
					containerStyle={{
						height: 10,
						marginTop: 20,
						marginBottom: 40,
					}}
				/>

				<Input placeholder="Full Name" />
				<Input placeholder="UserName" />
				<Input placeholder="Password" />
				{changeViewState && (
					<DropDownPicker
						open={openStaffType}
						value={staffValue}
						items={staffItems}
						setOpen={setOpenStaffType}
						setValue={setStaffValue}
						setItems={setStaffItems}
						zIndex={2000}
						closeAfterSelecting={true}
						style={{ height: 30, width: 200, alignSelf: "center" }}
						placeholder="Staff Type"
						containerStyle={{ height: 10, marginTop: 20, marginBottom: 40 }}
					/>
				)}
				<Input placeholder="Contact" />

				{changeViewState ? (
					<Input placeholder="Registration No" />
				) : (
					<Input placeholder="NIC Number" />
				)}
			</View>
			<TouchableOpacity style={styles.button} onPress={register}>
				<Text style={styles.btnText}>Register</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.login}
				onPress={() => navigation.navigate("Patient Login")}
			>
				<Text>Have an account?</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Register;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "whitesmoke",
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		fontSize: 25,
		color: "#a0deb0",
		fontWeight: "bold",
	},
	inputContainer: {
		width: 270,
	},
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
		zIndex: 1000,
	},
	btnText: {
		color: "white",
		fontWeight: "bold",
	},
	login: {
		marginTop: 30,
	},
});
