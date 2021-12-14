import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Surface } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { CheckingScreenNavigation } from '../types/navigation';

interface CheckingScreenProps extends CheckingScreenNavigation {}

export function CheckingScreen({ route }: CheckingScreenProps) {
	return (
		<SafeAreaView edges={['left', 'right']}>
			<Surface style={styles.header}>
				<StatusBar backgroundColor="#ff1493" barStyle="light-content" />
				<Header subtitle={route.params.textParam} title="Checking" />
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
