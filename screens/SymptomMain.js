import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import DropDownPicker from "react-native-dropdown-picker";
import { Image } from "react-native-elements";

const SymptomMain = ({ navigation }) => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState([]);
	const [items, setItems] = useState([
		{ value: "itching", label: "Itching" },
		{ value: "skin_rash", label: "Skin Rash" },
		{ value: "nodal_skin_eruptions", label: "Nodal Skin Eruptions" },
		{ value: "continuous_sneezing", label: "Continuous Sneezing" },
		{ value: "shivering", label: "Shivering" },
		{ value: "chills", label: "Chills" },
		{ value: "joint_pain", label: "Joint Pain" },
		{ value: "stomach_pain", label: "Stomach Pain" },
		{ value: "acidity", label: "Acidity" },
		{ value: "ulcers_on_tongue", label: "Ulcers On Tongue" },
		{ value: "muscle_wasting", label: "Muscle Wasting" },
		{ value: "vomiting", label: "Vomiting" },
		{ value: "burning_micturition", label: "Burning Micturition" },
		{ value: "spotting_ urination", label: "Spotting Urination" },
		{ value: "fatigue", label: "Fatigue" },
		{ value: "weight_gain", label: "Weight Gain" },
		{ value: "anxiety", label: "Anxiety" },
		{ value: "cold_hands_and_feets", label: "Cold Hands And Feet" },
		{ value: "mood_swings", label: "Mood Swings" },
		{ value: "weight_loss", label: "Weight Loss" },
		{ value: "restlessness", label: "Restlessness" },
		{ value: "lethargy", label: "Lethargy" },
		{ value: "patches_in_throat", label: "Patches In Throat" },
		{ value: "cough", label: "Cough" },
		{ value: "high_fever", label: "High Fever" },
		{ value: "sunken_eyes", label: "Sunken Eyes" },
		{ value: "breathlessness", label: "Breathlessness" },
		{ value: "sweating", label: "Sweating" },
		{ value: "dehydration", label: "Dehydration" },
		{ value: "indigestion", label: "Indigestion" },
		{ value: "headache", label: "Headache" },
		{ value: "yellowish_skin", label: "Yellowish Skin" },
		{ value: "dark_urine", label: "Dark Urine" },
		{ value: "nausea", label: "Nausea" },
		{ value: "loss_of_appetite", label: "Loss Of Appetite" },
		{ value: "pain_behind_the_eyes", label: "Pain Behind The Eyes" },
		{ value: "back_pain", label: "Back Pain" },
		{ value: "constipation", label: "Constipation" },
		{ value: "abdominal_pain", label: "Abdominal Pain" },
		{ value: "diarrhoea", label: "Diarrhoea" },
		{ value: "mild_fever", label: "Mild Fever" },
		{ value: "yellow_urine", label: "Yellow Urine" },
		{ value: "yellowing_of_eyes", label: "Yellowing Of Eyes" },
		{ value: "acute_liver_failure", label: "Acute Liver Failure" },
		{ value: "fluid_overload", label: "Fluid Overload" },
		{ value: "swelling_of_stomach", label: "Swelling Of Stomach" },
		{ value: "swelled_lymph_nodes", label: "Swelled Lymph Nodes" },
		{ value: "malaise", label: "Malaise" },
		{
			value: "blurred_and_distorted_vision",
			label: "Blurred And Distorted Vision",
		},
		{ value: "phlegm", label: "Phlegm" },
		{ value: "throat_irritation", label: "Throat Irritation" },
		{ value: "redness_of_eyes", label: "Redness Of Eyes" },
		{ value: "sinus_pressure", label: "Sinus Pressure" },
		{ value: "runny_nose", label: "Runny Nose" },
		{ value: "5congestion4", label: "Congestion" },
		{ value: "chest_pain", label: "Chest Pain" },
		{ value: "weakness_in_limbs", label: "Weakness In Limbs" },
		{ value: "fast_heart_rate", label: "Fast Heart Rate" },
		{
			value: "pain_during_bowel_movements",
			label: "Pain During Bowel_Movements",
		},
		{ value: "pain_in_anal_region", label: "Pain In Anal Region" },
		{ value: "bloody_stool", label: "Bloody Stool" },
		{ value: "irritation_in_anus", label: "Irritation In Anus" },
		{ value: "neck_pain", label: "Neck Pain" },
		{ value: "dizziness", label: "Dizziness" },
		{ value: "cramps", label: "Cramps" },
		{ value: "obesity", label: "Obesity" },
		{ value: "swollen_legs", label: "Swollen Legs" },
		{ value: "puffy_face_and_eyes", label: "Puffy Face And Eyes" },
		{ value: "enlarged_thyroid", label: "Enlarged Thyroid" },
		{ value: "brittle_nails", label: "Brittle Nails" },
		{ value: "swollen_extremeties", label: "Swollen Extremeties" },
		{ value: "excessive_hunger", label: "Excessive Hunger" },
		{ value: "drying_and_tingling_lips", label: "Drying And Tingling Lips" },
		{ value: "slurred_speech", label: "Slurred Speech" },
		{ value: "knee_pain", label: "Knee Pain" },
		{ value: "hip_joint_pain", label: "Hip Joint Pain" },
		{ value: "muscle_weakness", label: "Muscle Weakness" },
		{ value: "stiff_neck", label: "Stiff Neck" },
		{ value: "swelling_joints", label: "Swelling Joints" },
		{ value: "movement_stiffness", label: "Movement Stiffness" },
		{ value: "spinning_movements", label: "Spinning Movements" },
		{ value: "loss_of_balance", label: "Loss Of Balance" },
		{ value: "unsteadiness", label: "Unsteadiness" },
		{ value: "weakness_of_one_body_side", label: "Weakness Of One Body Side" },
		{ value: "loss_of_smell", label: "Loss Of Smell" },
		{ value: "bladder_discomfort", label: "Bladder Discomfort" },
		{ value: "foul_smell_of urine", label: "Foul Smell Of Urine" },
		{ value: "continuous_feel_of_urine", label: "Continuous Feel Of Urine" },
		{ value: "passage_of_gases", label: "Passage Of Gases" },
		{ value: "yellow_crust_ooze", label: "Yellow Crust Ooze" },
		{ value: "toxic_look_(typhos)", label: "Toxic Look" },
		{ value: "depression", label: "Depression" },
		{ value: "irritability", label: "Irritability" },
		{ value: "muscle_pain", label: "Muscle Pain" },
		{ value: "altered_sensorium", label: "Altered Sensorium" },
		{ value: "red_spots_over_body", label: "Red Spots Over Body" },
		{ value: "belly_pain", label: "Belly Pain" },
		{ value: "abnormal_menstruation", label: "Abnormal Menstruation" },
		{ value: "dischromic _patches", label: "Dischromic Patches" },
		{ value: "watering_from_eyes", label: "Watering From Eyes" },
		{ value: "increased_appetite", label: "Increased Appetite" },
		{ value: "polyuria", label: "Polyuria" },
		{ value: "family_history", label: "Family History" },
		{ value: "mucoid_sputum", label: "Mucoid Sputum" },
		{ value: "rusty_sputum", label: "Rusty Sputum" },
		{ value: "lack_of_concentration", label: "Lack Of Concentration" },
		{ value: "visual_disturbances", label: "Visual Disturbances" },
		{
			value: "receiving_blood_transfusion",
			label: "Receiving Blood Transfusion",
		},
		{
			value: "receiving_unsterile_injections",
			label: "Receiving Unsterile Injections",
		},
		{ value: "coma", label: "Coma" },
		{ value: "stomach_bleeding", label: "Stomach Bleeding" },
		{ value: "distention_of_abdomen", label: "Distention Of Abdomen" },
		{
			value: "history_of_alcohol_consumption",
			label: "History Of Alcohol Consumption",
		},
		{ value: "red_sore_around_nose", label: "Red Sore Around Nose" },
		{ value: "blood_in_sputum", label: "Blood In Sputum" },
		{ value: "prominent_veins_on_calf", label: "Prominent Veins On Calf" },
		{ value: "palpitations", label: "Palpitations" },
		{ value: "painful_walking", label: "Painful Walking" },
		{ value: "pus_filled_pimples", label: "Pus Filled Pimples" },
		{ value: "blackheads", label: "Blackheads" },
		{ value: "silver_like_dusting", label: "Silver Like Dusting" },
		{ value: "small_dents_in_nails", label: "Small Dents In Nails" },
		{ value: "inflammatory_nails", label: "Inflammatory Nails" },
		{ value: "blister", label: "Blister" },
	]);

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text style={styles.header}>Please Select Your Symptoms</Text>
			<DropDownPicker
				multiple={true}
				min={0}
				max={30}
				open={open}
				value={value}
				items={items}
				zIndex={1000}
				setOpen={setOpen}
				setValue={setValue}
				setItems={setItems}
				searchable={true}
				maxHeight={290}
				dropDownDirection="BOTTOM"
				style={styles.dropDown}
				searchContainerStyle={{ borderBottomColor: "white" }}
				searchTextInputStyle={{ borderColor: "white", fontSize: 17 }}
				placeholder="Select Symptoms"
				searchPlaceholder="Enter your symptom"
				searchPlaceholderTextColor="white"
				itemSeparator
				selectedItemLabelStyle={{
					fontWeight: "bold",
				}}
				selectedItemContainerStyle={{
					backgroundColor: "#cddbc8",
				}}
				selectedItemLabelStyle={{
					color: "#fff",
					fontWeight: "bold",
				}}
				listItemLabelStyle={{ color: "white", fontSize: 18 }}
				itemSeparatorStyle={{ backgroundColor: "#fff" }}
				labelStyle={{ color: "white", fontSize: 17, fontWeight: "bold" }}
				containerStyle={{
					height: 10,
					width: 370,
					marginTop: 20,
					marginBottom: 40,
				}}
				placeholderStyle={{ color: "white", fontWeight: "bold", fontSize: 20 }}
				dropDownContainerStyle={{
					backgroundColor: "#a0deb0",
					borderColor: "white",
				}}
				arrowIconStyle={{
					width: 30,
					height: 30,
				}}
			/>
			<Image
				source={require("../Images/medical-result.png")}
				style={styles.image}
			/>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					navigation.navigate("results");
				}}
			>
				<Text style={styles.btnText}>Submit</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SymptomMain;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "whitesmoke",
		alignItems: "center",
		justifyContent: "center",
	},
	header: {
		fontSize: 40,
		padding: 10,
		fontWeight: "bold",
		marginTop: 20,
		marginLeft: 20,
		marginBottom: 60,
		color: "#a0deb0",
	},
	dropDown: {
		height: 50,
		width: 370,
		alignSelf: "center",
		backgroundColor: "#a0deb0",
		borderColor: "white",
	},
	button: {
		backgroundColor: "#a0deb0",
		padding: 12,
		width: 250,
		margin: 5,
		// marginTop: 250,
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
		zIndex: 4000,
	},
	btnText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 18,
	},
	image: {
		width: 300,
		height: 300,
	},
});
