import * as React from "react";
import { Button, StyleSheet, TextInput, View, StatusBar } from "react-native";

import { AuthContext } from "./utils";
export function SignInScreen() {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");

	const { signIn } = React.useContext(AuthContext);

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#fff" />
			<TextInput
				placeholder="Username"
				placeholderTextColor="#000"
				style={styles.txtinput}
				value={username}
				onChangeText={setUsername}
			/>
			<TextInput
				style={styles.txtinput}
				placeholder="Password"
				placeholderTextColor="#000"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>
			<Button title="Sign in" onPress={() => signIn({ username, password })} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	txtinput: {
		height: 40,
		width: 200,
		borderWidth: 1,
		borderRadius: 7,
		marginBottom: 15,
		color: "#000",
	},
});
