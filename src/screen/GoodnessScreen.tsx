import * as React from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import { Surface } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { GoodnessScreenNavigation } from '../types/navigation';
import { UserMenu } from '../components/userMenu';
import { SafeAreaView } from 'react-native-safe-area-context';

interface GoodnessScreenProps extends GoodnessScreenNavigation {}
export function Goodness({ route, navigation }: GoodnessScreenProps) {
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
						onPress={()=>navigation.goBack()}
					/>
				
			</View>
			<View style={styles.view}>
				<Text style={styles.headerText}>Goodness</Text>
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
