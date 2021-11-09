import * as React from 'react';
import { StyleSheet, Button, View, Image, ScrollView, StatusBar } from 'react-native';
import { AuthContext } from '../utils';
import { Surface } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { HomeScreenNavigation } from '../types/navigation';
import { UserMenu } from '../components/userMenu';

interface HomeScreenProps extends HomeScreenNavigation {}

export function HomeScreen({ navigation }: HomeScreenProps) {
	return (
		<View style={styles.container}>
			<Surface style={styles.header}>
				<StatusBar backgroundColor="#ff1493" />
				<View style={styles.view}>
					{
						<TouchableOpacity>
							<Feather style={{ marginRight: 80 }} name="menu" size={24} color={'white'} />
						</TouchableOpacity>
					}
				</View>
				<View style={styles.view}>
					<Image source={require('../../assets/img/logo.png')} />
				</View>
				<View style={styles.view}>
					<UserMenu />
				</View>
			</Surface>
			<ScrollView style={styles.scrollView}>
				<Button
					title="Go to Saving"
					onPress={() => {
						navigation.navigate('Savings', { textParam: 'buy a house | 4044|' });
					}}
				/>
				<Button
					title="Go to Checking"
					onPress={() => {
						navigation.navigate('Checking', { textParam: 'main account(2932)' });
					}}
				/>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollView: {
		backgroundColor: 'pink',
	},
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
});
