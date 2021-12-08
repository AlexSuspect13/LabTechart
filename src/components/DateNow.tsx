import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';

const date = moment().format('MMM DD,YYYY');

function generateGreetings() {
	const currentHour = parseInt(moment().format('HH'));

	if (currentHour >= 3 && currentHour < 12) {
		return 'Good Morning';
	}
	if (currentHour >= 12 && currentHour < 15) {
		return 'Good Afternoon';
	}
	if (currentHour >= 15 && currentHour < 20) {
		return 'Good Evening';
	}
	return 'Good Night';
}

export default function DateNow() {
	const userName = useSelector((state: RootState) => state.userName.user);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{generateGreetings()}</Text>
			<Text style={styles.text}>Alex</Text>
			<View style={styles.hairline} />
			<Text style={styles.text}>{date}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
		flexDirection: 'row',
	},
	text: {
		marginRight: 5,
		fontSize: 15,
		color: '#c0c0c0',
	},
	hairline: {
		height: 16,
		width: 1,
		backgroundColor: '#c0c0c0',
		marginHorizontal: 5,
	},
});
