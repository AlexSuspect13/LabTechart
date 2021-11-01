import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "./utils";

export function Payments() {
	const { signOut } = React.useContext(AuthContext);
	return (
		<View style={styles.container}>
			<Text style={{ color: "red" }}>dhd</Text>
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
