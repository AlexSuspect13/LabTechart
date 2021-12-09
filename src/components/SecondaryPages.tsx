import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserMenu } from './userMenu';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/core';

type SecondaryPagesProps = {
	routeText: string;
	screenName: string;
};

export const SecondaryPages = ({ routeText, screenName }: SecondaryPagesProps) => {
	const navigation = useNavigation();
	return (
		<>
			<View style={styles.view}>
				<Feather
					style={styles.goBack}
					name="chevron-left"
					size={30}
					color={'white'}
					onPress={() => navigation.goBack()}
				/>
			</View>
			<View style={styles.view}>
				<Text style={styles.headerText}>{screenName}</Text>
				<Text style={styles.text}>{routeText}</Text>
			</View>
			<View style={styles.view}>
				<UserMenu />
			</View>
		</>
	);
};
const styles = StyleSheet.create({
	header: {
		justifyContent: 'space-between',
		height: 50,
		alignItems: 'center',
		backgroundColor: '#ff1493',
		flexDirection: 'row',
		elevation: 4,
	},
	headerText: { color: '#fff', fontSize: 20 },
	view: {
		flex: 1,
		margin: 5,
		alignItems: 'center',
	},
	goBack: { marginRight: 80 },
	body: {
		backgroundColor: '#dcdcdc',
		height: '100%',
	},
	text: {
		color: '#fff',
		fontSize: 10,
	},
});
