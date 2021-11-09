import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HomeScreenNavigation } from '../types/navigation';

interface buttonBackProps {
	navigation: HomeScreenNavigation;
}

export const ButtonBack = ({ navigation }: buttonBackProps) => {
	return (
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
	);
};

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
});
