import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens Import
import LoginChoose from "./screens/LoginChoose";
import PatientAuth from "./screens/PatientAuth";
import Register from "./screens/Register";
import Welcome from "./screens/Welcome";
import PatientDashboard from "./screens/PatientDashboard";
import StaffAuth from "./screens/StaffAuth";
import StaffDashboard from "./screens/StaffDashboard";
import Notification from "./screens/Notification";
import Symptoms from "./screens/Symptoms";
import SymptomMain from "./screens/SymptomMain";
import Result from "./screens/Result";
import DisplayLists from "./screens/DisplayLists";

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#a0deb0" },
  headerTitleStyle: { color: "white", fontWeight: "bold" },
  headerTintColor: "white",
  headerTitleAlign: "center",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={globalScreenOptions}
        // initialRouteName="list"
      >
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Heal Port"
          component={LoginChoose}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Patient Login"
          component={PatientAuth}
          screenOptions={globalScreenOptions}
        />
        <Stack.Screen
          name="Register to Heal Port"
          component={Register}
          options={{ title: "Registration" }}
          screenOptions={globalScreenOptions}
        />
        <Stack.Screen
          name="Staff Login"
          component={StaffAuth}
          screenOptions={globalScreenOptions}
        />
        <Stack.Screen
          name="PatientDashboard"
          component={PatientDashboard}
          screenOptions={globalScreenOptions}
        />
        {/* Staff dashboard here*/}

        <Stack.Screen
          name="notification"
          component={Notification}
          screenOptions={globalScreenOptions}
        />
        <Stack.Screen
          name="symptoms"
          component={Symptoms}
          // screenOptions={globalScreenOptions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="symptomsMain"
          component={SymptomMain}
          // screenOptions={globalScreenOptions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="results"
          component={Result}
          // screenOptions={globalScreenOptions}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StaffDashboard"
          component={StaffDashboard}
          //   screenOptions={globalScreenOptions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="list"
          component={DisplayLists}
          //   screenOptions={globalScreenOptions}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
