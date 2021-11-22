import * as React from 'react';
import { TouchableWithoutFeedback, StyleSheet, Button, View, Image, Modal } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { ListItem } from 'react-native-elements';
import { HomeScreenNavigation } from '../types/navigation';
import { useDispatch } from 'react-redux';

interface AccountScreenProps {
	navigation: HomeScreenNavigation;
}

export function Account({ navigation }: AccountScreenProps) {
	const dispatch = useDispatch();

	const [userMenuVisible, setUserMenuVisible] = React.useState(false);

	const hideUserMenu = () => {
		setUserMenuVisible(false);
	};
	const showUserMenu = () => {
		setUserMenuVisible(true);
	};
	return (
		<View>
			<Surface style={styles.header}>
				<View style={styles.view}>
					{
						<TouchableOpacity>
							<Feather
								style={{ marginRight: 80 }}
								name="chevron-left"
								size={30}
								color={'white'}
								onPress={() => navigation.navigate('HomeTabs')}
							/>
						</TouchableOpacity>
					}
				</View>
				<View style={styles.view}>
					<Text style={{ color: 'white', fontSize: 20 }}>Account</Text>
				</View>
				<View style={styles.view}>
					<TouchableOpacity onPress={showUserMenu}>
						<Image style={{ marginLeft: 70 }} source={require('../../assets/img/oval.png')} />
					</TouchableOpacity>

					<Modal visible={userMenuVisible} transparent>
						<TouchableWithoutFeedback onPress={hideUserMenu}>
							<View style={styles.userMenuOverlay} />
						</TouchableWithoutFeedback>
						<ListItem
							style={styles.userMenuContent}
							onPress={() => {
								dispatch({ type: 'SIGN_OUT', token: null });
							}}>
							<ListItem.Content>
								<ListItem.Title>Log out</ListItem.Title>
							</ListItem.Content>
						</ListItem>
					</Modal>
				</View>
			</Surface>
		</View>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: '#1e90ff',
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
