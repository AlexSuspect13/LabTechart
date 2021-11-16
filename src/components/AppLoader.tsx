import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
export function AppLoader() {
	return (
		<View>
			<LottieView source={require('../../assets/AppLoader.json')} />
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#',
	},
});
