import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "./utils";

export function Card() {
	const { signOut } = React.useContext(AuthContext);
	return (
		<View>
			<Text>Giving</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
});
