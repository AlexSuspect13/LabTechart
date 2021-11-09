import * as React from 'react';
import { StyleSheet, View, StatusBar, Text, TouchableOpacity } from 'react-native';
import { Surface } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { UserMenu } from '../components/userMenu';
import { CheckingScreenNavigation } from '../types/navigation';

interface CheckingScreenProps extends CheckingScreenNavigation {}

export function CheckingScreen({ route, navigation }: CheckingScreenProps) {
	return (
		<Surface style={styles.header}>
			<StatusBar backgroundColor="#ff1493" />
			<View style={styles.view}>
				{
					<TouchableOpacity>
						<Feather
							style={{ marginRight: 80 }}
							name="chevron-left"
							size={30}
							color={'white'}
							onPress={() => navigation.goBack()}
						/>
					</TouchableOpacity>
				}
			</View>
			<View style={styles.view}>
				<Text style={{ color: '#fff', fontSize: 20 }}>Checking</Text>
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
});