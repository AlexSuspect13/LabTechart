import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserMenu } from './userMenu';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/core';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type SecondaryPagesProps = {
	subtitle?: string;
	title: string;
};

export const Header = ({ subtitle, title }: SecondaryPagesProps) => {
	const insets = useSafeAreaInsets();
	const navigation = useNavigation();
	return (
		<View style={{ paddingTop: insets.top, backgroundColor: '#ff1493' }}>
			<View style={styles.header}>
				<View>
					<Feather name="chevron-left" size={30} color="white" onPress={() => navigation.goBack()} />
				</View>
				<View>
					<Text style={styles.headerText}>{title}</Text>
					<Text style={styles.text}>{subtitle}</Text>
				</View>
				<View>
					<UserMenu />
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	headerText: { color: '#fff', fontSize: 20 },
	text: {
		color: '#fff',
		fontSize: 10,
	},
	header: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		elevation: 4,
		marginHorizontal: 15,
	},
});
