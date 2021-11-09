import * as React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View, Image, Modal } from 'react-native';
import { AuthContext } from '../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';

export function UserMenu() {
	const [userMenuVisible, setUserMenuVisible] = React.useState(false);
	const { signOut } = React.useContext(AuthContext);

	const hideUserMenu = () => {
		setUserMenuVisible(false);
	};

	const showUserMenu = () => {
		setUserMenuVisible(true);
	};

	return (
		<>
			<TouchableOpacity onPress={showUserMenu}>
				<Image style={{ marginLeft: 70 }} source={require('../../assets/img/oval.png')} />
			</TouchableOpacity>
			<Modal visible={userMenuVisible} transparent>
				<TouchableWithoutFeedback onPress={hideUserMenu}>
					<View style={StyleSheet.absoluteFillObject} />
				</TouchableWithoutFeedback>
				<ListItem style={styles.userMenuContent} onPress={signOut}>
					<ListItem.Content>
						<ListItem.Title>Log out</ListItem.Title>
					</ListItem.Content>
				</ListItem>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	userMenuContent: {
		position: 'absolute',
		right: 10,
		width: 100,
	},
});