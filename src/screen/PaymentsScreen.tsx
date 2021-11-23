import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComingSoon from '../components/comingSoon';

export function Payments() {
	return <ComingSoon />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		color: 'red',
	},
});
