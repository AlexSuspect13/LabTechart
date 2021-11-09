import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function PaymentsScreen() {
	return (
		<View style={styles.container}>
			<Text style={{ color: 'red', fontSize: 30 }}>Coming soon</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		color: 'red',
	},
});
