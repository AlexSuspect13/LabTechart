import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import Icon from 'react-native-vector-icons/FontAwesome';

type infoblock = {
	text: any;
	infotxt: string;
	dollar: string;
	cent: string;
};
export const InfoBlock = ({ text, infotxt, dollar, cent }: infoblock) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity onPress={() => navigation.navigate(text, { textParam: infotxt })}>
			<View style={styles.infoBlock}>
				<View style={styles.infoAbtPage}>
					<View style={styles.goodnescard}>
						<Text style={styles.namePage}>{text}</Text>
						{text == 'Goodness' ? (
							<Image source={require('../../assets/img/heart.png')} style={styles.goodnesimg} />
						) : null}
					</View>
					<Text style={styles.info}>{infotxt}</Text>
				</View>
				<View style={styles.Accountinf}>
					<Icon size={20} name="dollar" />
					<Text style={styles.infAbtAccount}>
						{dollar}
						<Text style={styles.cent}>.{cent}</Text>
					</Text>
					<Icon style={styles.chevron} color={'#ff1493'} name={'chevron-right'} />
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	infoBlock: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
	},
	cent: {
		fontSize: 16,
		color: '#000',
		fontFamily: 'SFRounded-Medium',
	},
	infoAbtPage: {
		flexDirection: 'column',
	},
	info: {
		color: '#c0c0c0',
	},
	infAbtAccount: {
		fontSize: 20,
		textAlign: 'right',
		color: '#000',
	},
	namePage: {
		fontSize: 20,
		color: '#000',
	},
	Accountinf: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	chevron: {
		alignSelf: 'center',
		margin: 5,
	},
	goodnescard: {
		flexDirection: 'row',
	},
	goodnesimg: {
		height: 15,
		width: 15,
		margin: 5,
	},
});
