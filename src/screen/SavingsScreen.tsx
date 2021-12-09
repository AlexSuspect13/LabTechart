import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Surface } from 'react-native-paper';
import { SavingsScreenNavigation } from '../types/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SecondaryPages } from '../components/SecondaryPages';

interface SavingScreenProps extends SavingsScreenNavigation {}
export function Savings({ route }: SavingScreenProps) {
	return (
		<SafeAreaView>
			<Surface style={styles.header}>
				<StatusBar backgroundColor="#ff1493" />
				<SecondaryPages routeText={route.params.textParam} screenName={'Savings'} />
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
	view: {
		flex: 1,
		margin: 5,
		alignItems: 'center',
	},
	body: {
		backgroundColor: '#dcdcdc',
		height: '100%',
	},
	text: {
		color: '#fff',
		fontSize: 10,
	},
	goBack: { marginRight: 80 },
	headerText: { color: '#fff', fontSize: 20 },
	userPhoto: { marginLeft: 70 },
});
