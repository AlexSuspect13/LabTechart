import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AuthContext } from "./utils";

export function Checking() {
	const { signOut } = React.useContext(AuthContext);
	return (
		<View>
			<Text>sdkfksdfksdjfdks</Text>
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
