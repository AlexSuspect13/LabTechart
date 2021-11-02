import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "./utils";

export function Payments() {
	return (
		<View style={styles.container}>
			<Text style={{ color: "red", fontSize: 30 }}>Cкоро!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		color: "red",
	},
});
