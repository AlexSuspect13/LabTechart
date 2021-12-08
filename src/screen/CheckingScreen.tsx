import * as React from 'react';
import { StyleSheet, View, StatusBar, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Surface } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { UserMenu } from '../components/userMenu';
import { CheckingScreenNavigation } from '../types/navigation';

interface CheckingScreenProps extends CheckingScreenNavigation {}

export function CheckingScreen({ route, navigation }: CheckingScreenProps) {
	return (
		<SafeAreaView>
			<Surface style={styles.header}>
				<StatusBar backgroundColor="#ff1493" />
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
					<Text style={styles.headerText}>Checking</Text>
					<Text style={styles.text}>{route.params.textParam}</Text>
				</View>
				<View style={styles.view}>
					<UserMenu />
				</View>
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
	headerText: { color: '#fff', fontSize: 20 },
	view: {
		flex: 1,
		margin: 5,
		alignItems: 'center',
	},
	goBack: { marginRight: 80 },
	body: {
		backgroundColor: '#dcdcdc',
		height: '100%',
	},
	text: {
		color: '#fff',
		fontSize: 10,
	},
});
