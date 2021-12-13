import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Surface } from 'react-native-paper';
import { GoodnessScreenNavigation } from '../types/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SecondaryPages } from '../components/SecondaryPages';

interface GoodnessScreenProps extends GoodnessScreenNavigation {}
export function Goodness({ route }: GoodnessScreenProps) {
	return (
		<SafeAreaView edges={['left', 'right']}>
			<Surface style={styles.header}>
				<StatusBar backgroundColor="#ff1493" barStyle="light-content" />
				<SecondaryPages routeText={route.params.textParam} screenName={'Goodness'} />
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
