import * as React from 'react';
import { SavingsScreenNavigation } from '../types/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';

interface SavingScreenProps extends SavingsScreenNavigation {}
export function Savings({ route }: SavingScreenProps) {
	return (
		<SafeAreaView edges={['left', 'right']}>
			<Header subtitle={route.params.textParam} title="Savings" />
		</SafeAreaView>
	);
}
