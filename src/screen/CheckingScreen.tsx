import * as React from 'react';
import { StyleSheet, View, StatusBar, Text, SafeAreaView } from 'react-native';
import { Surface } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { SecondaryPages } from '../components/SecondaryPages';
import { UserMenu } from '../components/userMenu';
import { CheckingScreenNavigation } from '../types/navigation';

interface CheckingScreenProps extends CheckingScreenNavigation {}

export function CheckingScreen({ route, navigation }: CheckingScreenProps) {
	return (
		<SafeAreaView>
			<Surface style={styles.header}>
				<StatusBar backgroundColor="#ff1493" />
				<SecondaryPages routeText={route.params.textParam} screenName={'Checking'} />
			</Surface>
		</SafeAreaView>
	);
}
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
