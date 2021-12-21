import * as React from 'react';
import { StyleSheet, Image, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';

export function UserMenu() {
	const [userMenuVisible, setUserMenuVisible] = React.useState(false);
	const userPhoto = useSelector((state: RootState) => state.userProfile.image);
	const hideUserMenu = () => {
		setUserMenuVisible(false);
	};

	const showUserMenu = () => {
		setUserMenuVisible(true);
	};

	const navigation = useNavigation();
	return (
		<>
			<TouchableOpacity onPress={showUserMenu}>
				<Image style={styles.avatarPhoto} source={{ uri: userPhoto }} />
			</TouchableOpacity>
			<Modal visible={userMenuVisible} transparent>
				<ListItem
					style={styles.userMenuContent}
					onPress={() => {
						hideUserMenu();
						navigation.navigate('Profile');
					}}>
					<ListItem.Content>
						<ListItem.Title>Profile</ListItem.Title>
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
	avatarPhoto: {
		height: 25,
		width: 25,
		borderRadius: 50,
	},
});
