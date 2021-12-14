import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { AccountsScreenNavigation } from '../types/navigation';

interface AccountScreenProps extends AccountsScreenNavigation {}

export function Account({ route }: AccountScreenProps) {
	function HookComponent() {
		const insets = useSafeAreaInsets();

		return (
			<View style={styles.statusBar}>
				<View style={{ paddingBottom: Math.max(insets.bottom, 16) }} />
			</View>
		);
	}
	return (
		<SafeAreaView edges={['left', 'right']}>
			<Header title="Account" />
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
	goBack: { marginRight: 80 },
	view: {
		flex: 1,
		margin: 5,
		alignItems: 'center',
	},
	statusBar: { backgroundColor: '#ff1493' },
	headerText: { color: 'white', fontSize: 20 },
});
