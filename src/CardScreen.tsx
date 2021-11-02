import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "./utils";

export function Card() {
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 30, color: "red" }}>Скоро!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
