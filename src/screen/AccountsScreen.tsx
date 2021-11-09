import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { AccountsScreenNavigation } from '../types/navigation';
import { UserMenu } from '../components/userMenu';

interface AccountsScreenProps extends AccountsScreenNavigation{}

export function AccountsScreen({ navigation }: AccountsScreenProps) {
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
								onPress={() => navigation.goBack()}
							/>
						</TouchableOpacity>
					}
				</View>
				<View style={styles.view}>
					<Text style={{ color: 'white', fontSize: 20 }}>Account</Text>
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
	view: {
		flex: 1,
		margin: 5,
		alignItems: 'center',
	},
	body: {
		backgroundColor: '#dcdcdc',
		height: '100%',
	},
});
