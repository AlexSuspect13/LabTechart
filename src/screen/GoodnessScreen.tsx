import * as React from 'react';
import { GoodnessScreenNavigation } from '../types/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';

interface GoodnessScreenProps extends GoodnessScreenNavigation {}
export function Goodness({ route }: GoodnessScreenProps) {
	return (
		<SafeAreaView edges={['left', 'right']}>
			<Header subtitle={route.params.textParam} title="Goodness" />
		</SafeAreaView>
	);
}
