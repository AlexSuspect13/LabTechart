import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { AccountsScreenNavigation } from '../types/navigation';
import { UserMenu } from '../components/userMenu';

interface AccountScreenProps extends AccountsScreenNavigation {}

export function Account({ navigation }: AccountScreenProps) {
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
			{HookComponent()}
			<View style={styles.header}>
				<View style={styles.view}>
					<Feather
						style={styles.goBack}
						name="chevron-left"
						size={30}
						color={'white'}
						onPress={() => navigation.goBack()}
					/>
				</View>
				<View style={styles.view}>
					<Text style={styles.headerText}>Account</Text>
				</View>
				<View style={styles.view}>
					<UserMenu />
				</View>
			</View>
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
