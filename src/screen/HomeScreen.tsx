import * as React from 'react';
import { StyleSheet, Button, View, Image, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Surface } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { HomeScreenNavigation } from '../types/navigation';
import { UserMenu } from '../components/userMenu';
import { Card } from '../components/cards';

interface HomeScreenProps extends HomeScreenNavigation {}

export function HomeTabs({ navigation }: HomeScreenProps) {
	return (
		<SafeAreaView >
			<Surface style={styles.header}>
				<StatusBar backgroundColor="#ff1493" />
				<View style={styles.view}>
					<TouchableOpacity>
						<Feather style={styles.goBack} name="menu" size={24} color={'white'} />
					</TouchableOpacity>
				</View>
				<View style={styles.view}>
					<Image source={require('../../assets/img/logo.png')} />
				</View>
				<View style={styles.view}>
					<UserMenu />
				</View>
			</Surface>
			<View style={styles.body}>
				<ScrollView style={styles.scrollView}>
					<Button
						title="Go to Saving"
						onPress={() => {
							navigation.navigate('Savings', { textParam: 'buy a house | 4044|' });
						}}
					/>
					<Button
						title="Go to Cheking"
						onPress={() => {
							navigation.navigate('Checking', { textParam: 'main account(2932)' });
						}}
					/>
				</ScrollView>
				<Card/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: 'pink',
		height: '100%',
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
	goBack: { marginRight: 80 },
	view: {
		flex: 1,
		margin: 5,
		alignItems: 'center',
	},
	body: {
		backgroundColor: '#dcdcdc',
		height: '100%',
	},
	userMenuContent: {
		position: 'absolute',

		right: 10,
		width: 100,
	},
	userPhoto: { marginLeft: 70 },
	userMenuOverlay: StyleSheet.absoluteFillObject,
});
