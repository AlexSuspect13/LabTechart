import * as React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View, Image, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';
import { useDispatch } from 'react-redux';

export function UserMenu() {
	const [userMenuVisible, setUserMenuVisible] = React.useState(false);

	const hideUserMenu = () => {
		setUserMenuVisible(false);
	};

	const showUserMenu = () => {
		setUserMenuVisible(true);
	};

	const dispatch = useDispatch();

	return (
		<>
			<TouchableOpacity onPress={showUserMenu}>
				<Image source={require('../../assets/img/oval.png')} />
			</TouchableOpacity>
			<Modal visible={userMenuVisible} transparent>
				<TouchableWithoutFeedback onPress={hideUserMenu}>
					<View style={StyleSheet.absoluteFillObject} />
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
		</>
	);
}

const styles = StyleSheet.create({
	userMenuContent: {
		position: 'absolute',
		right: 10,
		width: 100,
		top: 50,
	},
});
