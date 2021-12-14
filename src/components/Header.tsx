import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserMenu } from './userMenu';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';

type SecondaryPagesProps = {
	subtitle?: string;
	title: string;
};

export const Header = ({ subtitle, title }: SecondaryPagesProps) => {
	const navigation = useNavigation();
	return (
		<View style={styles.header}>
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
				<Text style={styles.headerText}>{title}</Text>
				<Text style={styles.text}>{subtitle}</Text>
			</View>
			<View style={styles.view}>
				<UserMenu />
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	headerText: { color: '#fff', fontSize: 20 },
	view: {
		flex: 1,
		margin: 5,
		alignItems: 'center',
	},
	goBack: { marginRight: 80 },
	text: {
		color: '#fff',
		fontSize: 10,
	},
	header: {
		justifyContent: 'space-between',
		height: 50,
		alignItems: 'center',
		backgroundColor: '#ff1493',
		flexDirection: 'row',
		elevation: 4,
	},
});
