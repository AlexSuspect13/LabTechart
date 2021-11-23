import * as React from 'react';
import { StyleSheet, View, Image, StatusBar, Text } from 'react-native';
import { Surface } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { SavingsScreenNavigation } from '../types/navigation';
import { UserMenu } from '../components/userMenu';

interface SavingScreenProps extends SavingsScreenNavigation {}
export function Savings({ route, navigation }: SavingScreenProps) {
	return (
		<Surface style={styles.header}>
			<StatusBar backgroundColor="#ff1493" />
			<View style={styles.view}>
				<TouchableOpacity>
					<Feather
						style={styles.goBack}
						name="chevron-left"
						size={30}
						color={'white'}
						onPress={() => navigation.goBack()}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.view}>
				<Text style={styles.headerText}>Saving</Text>
				<Text style={styles.text}>{route.params.textParam}</Text>
			</View>
			<View style={styles.view}>
				<UserMenu />
			</View>
		</Surface>
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
	view: {
		flex: 1,
		margin: 5,
		alignItems: 'center',
	},
	body: {
		backgroundColor: '#dcdcdc',
		height: '100%',
	},
	text: {
		color: '#fff',
		fontSize: 10,
	},
	goBack: { marginRight: 80 },
	headerText: { color: '#fff', fontSize: 20 },
	userPhoto: { marginLeft: 70 },
});
