import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import {  StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export const InfoBlock = ({ text, infotxt, dollar, cent}) => {
	const navigation = useNavigation();
	return (
		<View style={styles.infoBlock}>
			<View style={styles.infoAbtPage}>
				<Text style={styles.namePage}>{text}</Text>
				<Text style={styles.info}>{infotxt}</Text>
			</View>
			<View style={styles.Accountinf}>
				<Icon size={20} name="dollar" />
				<Text style={styles.infAbtAccount}>
					{dollar}
					<Text style={{ fontSize: 16, color: '#000' }}>.{cent}</Text>
				</Text>
				<TouchableOpacity onPress={() =>navigation.navigate(text,{textParam: infotxt})}>
				<Icon style={styles.chevron} color={'#ff1493'} name={'chevron-right'}/>
				</TouchableOpacity>
				
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	infoBlock: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: 10,
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
		flex: 1,
		padding: 15,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	chevron: {
		alignSelf: 'center',
		margin: 5,
	},
});
