import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function ComingSoon() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Coming soon</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
    color: 'red',
    fontSize: 20,
  },
});
