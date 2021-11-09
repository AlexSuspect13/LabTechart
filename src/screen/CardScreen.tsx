import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function CardScreen() {
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 30, color: 'red' }}>Coming soon!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
