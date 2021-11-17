import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
export function AppLoader() {
	return (
		<View style={[styles.container, StyleSheet.absoluteFillObject]}>
			<LottieView source={require('../../assets/AppLoader.json')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
});
