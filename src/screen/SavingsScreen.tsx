import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Surface } from 'react-native-paper';
import { SavingsScreenNavigation } from '../types/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';

interface SavingScreenProps extends SavingsScreenNavigation {}
export function Savings({ route }: SavingScreenProps) {
	return (
		<SafeAreaView edges={['left', 'right']}>
			<Surface style={styles.header}>
				<StatusBar backgroundColor="#ff1493" />
				<Header subtitle={route.params.textParam} title="Savings" />
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
});
