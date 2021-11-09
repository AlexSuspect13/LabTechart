import * as React from 'react';
import { TouchableWithoutFeedback, StyleSheet, Button, View, Image, Modal, ScrollView, StatusBar } from 'react-native';
import { AuthContext } from '../utils';
import { createStackNavigator } from '@react-navigation/stack';
import { Surface, Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { ListItem } from 'react-native-elements';
import { HomeScreenNavigation } from '../types/navigation';

const Stack = createStackNavigator();

interface HomeScreenProps extends HomeScreenNavigation {}

export function HomeTabs({ navigation }: HomeScreenProps) {
	const [userMenuVisible, setUserMenuVisible] = React.useState(false);

	const { signOut } = React.useContext(AuthContext);

	const hideUserMenu = () => {
		setUserMenuVisible(false);
	};
	const showUserMenu = () => {
		setUserMenuVisible(true);
	};

	return (
		<View>
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
					{
						<TouchableOpacity onPress={showUserMenu}>
							<Image style={{ marginLeft: 70 }} source={require('../../assets/img/oval.png')} />
						</TouchableOpacity>
					}
					<Modal visible={userMenuVisible} transparent>
						<TouchableWithoutFeedback onPress={hideUserMenu}>
							<View style={styles.userMenuOverlay} />
						</TouchableWithoutFeedback>
						<ListItem style={styles.userMenuContent} onPress={signOut}>
							<ListItem.Content>
								<ListItem.Title>Log out</ListItem.Title>
							</ListItem.Content>
						</ListItem>
					</Modal>
				</View>
			</Surface>
			<View style={styles.body}>
				<ScrollView style={styles.scrollView}>
					<Button
						title="Go to Saving"
						onPress={() => {
							navigation.navigate('Saving', { textParam: 'buy a house | 4044|' });
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
		</View>
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
	userMenuOverlay: StyleSheet.absoluteFillObject,
});
