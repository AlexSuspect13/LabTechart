import * as React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View, Image, Modal, StatusBar, Text } from 'react-native';
import { Surface } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../utils';
import Feather from 'react-native-vector-icons/Feather';
import { color } from 'react-native-elements/dist/helpers';
import { CheckingScreenRouteProp, HomeScreenNavigation } from '../types/navigation';

interface CheckingScreenProps {
	navigation: HomeScreenNavigation;
	route: CheckingScreenRouteProp;
}

export function Checking({ route, navigation }: CheckingScreenProps) {
	return (
		<Surface style={styles.header}>
			<StatusBar backgroundColor="#ff1493" />
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
				<Text style={styles.text}>{route.params.textParam}</Text>
			</View>
			<View style={styles.view}>
				{
					<TouchableOpacity>
						<Image style={{ marginLeft: 70 }} source={require('../../assets/img/oval.png')} />
					</TouchableOpacity>
				}
			</View>
		</Surface>
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
		fontSize: 20,
	},
});
