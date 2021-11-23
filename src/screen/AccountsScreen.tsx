import * as React from 'react';
import { TouchableWithoutFeedback, StyleSheet, Button, View, Image, Modal } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { ListItem } from 'react-native-elements';
import { AccountsScreenNavigation } from '../types/navigation';
import { useDispatch } from 'react-redux';
import { UserMenu } from '../components/userMenu';

interface AccountScreenProps extends AccountsScreenNavigation {}

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
					<TouchableOpacity>
						<Feather
							style={styles.goBack}
							name="chevron-left"
							size={30}
							color={'white'}
							onPress={() => navigation.navigate('HomeTabs')}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.view}>
					<Text style={styles.headerText}>Account</Text>
				</View>
				<View style={styles.view}>
					<UserMenu />
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
	userPhoto: {
		marginLeft: 70,
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
	headerText: { color: 'white', fontSize: 20 },
	userMenuOverlay: StyleSheet.absoluteFillObject,
});
