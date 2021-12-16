import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { CheckingScreenNavigation } from '../types/navigation';

interface CheckingScreenProps extends CheckingScreenNavigation {}

export function CheckingScreen({ route }: CheckingScreenProps) {
	return (
		<SafeAreaView edges={['left', 'right']}>
			<Header subtitle={route.params.textParam} title="Checking" />
		</SafeAreaView>
	);
}
