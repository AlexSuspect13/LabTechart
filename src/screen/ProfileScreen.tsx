import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';

export const Profile = () => {
	return (
		<SafeAreaView style={styles.container} edges={['left', 'right']}>
			<Header title="Profile" />
			<View style={styles.item1}>
				<Text style={styles.fullName}>Full Name </Text>
				<TextInput placeholder="Alex Suspect" placeholderTextColor="#c0c0c0" />
				<View style={styles.lineUnderInput} />
				<Text style={styles.fullName}>Birthday </Text>
				<TextInput placeholder="(01.01.2000)" placeholderTextColor="#c0c0c0" secureTextEntry />
				<View style={styles.lineUnderInput} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	textLogin: { color: '#000', fontSize: 45, fontFamily: 'SFRounded-Medium' },
	item1: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 20,
	},
	item2: {
		padding: 15,
	},
	fullName: { color: '#636363', fontSize: 20, fontFamily: 'SFRounded-Medium' },
	hairline: {
		backgroundColor: '#ff1493',
		height: 4,
		width: '35%',
		marginBottom: 20,
	},
	lineUnderInput: { height: 1, backgroundColor: '#636363', marginBottom: 30 },
});
