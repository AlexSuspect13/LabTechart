import * as React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { AccountsScreenNavigation } from '../types/navigation';
import { UserMenu } from '../components/userMenu';

interface AccountScreenProps extends AccountsScreenNavigation {}

export function Account({ navigation }: AccountScreenProps) {
	return (
		<SafeAreaView>
			<Surface style={styles.header}>
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
			</Surface>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: '#1e90ff',

		width: '100%',
	},
	header: {
		justifyContent: 'space-between',
		height: 50,
		alignItems: 'center',
		backgroundColor: '#ff1493',
		flexDirection: 'row',
		elevation: 4,
	},
	userPhoto: {
		marginLeft: 70,
	},
	goBack: { marginRight: 80 },
	view: {
		flex: 1,
		margin: 5,
		alignItems: 'center',
	},
	body: {
		backgroundColor: '#dcdcdc',
		height: '80%',
	},
	userMenuContent: {
		position: 'absolute',
		right: 10,
		width: 100,
	},
	headerText: { color: 'white', fontSize: 20 },
	userMenuOverlay: StyleSheet.absoluteFillObject,
});
