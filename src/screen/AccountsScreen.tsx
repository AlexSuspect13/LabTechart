import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { AccountsScreenNavigation } from '../types/navigation';

interface AccountScreenProps extends AccountsScreenNavigation {}

export function Account() {
	return (
		<SafeAreaView edges={['left', 'right']}>
			<Header title="Account" />
		</SafeAreaView>
	);
}
