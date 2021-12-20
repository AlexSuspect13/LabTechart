import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Redux/store';
import DatePicker from 'react-native-date-picker';
import { Button } from 'react-native-elements';
import CameraComponent from '../screen/CameraScreen';
import { useNavigation } from '@react-navigation/core';
import Navigation from '../navigation';

export const Profile = () => {
	const [date, setDate] = React.useState(new Date());
	const [open, setOpen] = React.useState(false);
	const [openCamer, setOpenCamera] = React.useState(false);
	const [nickName, setNickName] = React.useState('');
	const name = useSelector((state: RootState) => state.userProfile.fullName);
	const birthday = useSelector((state: RootState) => state.userProfile.Userbirthday);
	const dispatch = useDispatch();
	const navigation = useNavigation();
	return (
		<SafeAreaView style={styles.container} edges={['left', 'right']}>
			<Header title="Profile" />
			<View style={styles.avatarEdit}>
				<Image style={styles.profilePhoto} source={require('../../assets/img/standartProfilePhoto.png')}></Image>
				<View style={styles.profileButton}>
					<Button buttonStyle={styles.button} title="Make from camera" onPress={() => navigation.navigate('Camera')} />
					<Button buttonStyle={styles.button} title="Choose from Galery" onPress={() => setOpen(true)} />
				</View>
			</View>
			{openCamer ? <CameraComponent /> : null}
			<View style={styles.item1}>
				<Text style={styles.fullName}>Full Name </Text>
				<TextInput
					style={styles.infoText}
					placeholder={name}
					placeholderTextColor="#c0c0c0"
					onChangeText={setNickName}
				/>
				<View style={styles.lineUnderInput} />

				<Text style={styles.fullName}>Birthday </Text>
				<Text style={styles.infoText}>{birthday}</Text>
				<View style={styles.lineUnderInput} />

				<Button buttonStyle={styles.button} title="Change birthday" onPress={() => setOpen(true)} />
				<Button
					buttonStyle={styles.button}
					title="Change name"
					onPress={() => {
						dispatch({ type: 'RENAME_USER', Username: nickName });
					}}
				/>
				<Button
					buttonStyle={styles.button}
					title="Exit"
					onPress={() => {
						dispatch({ type: 'SIGN_OUT', token: null });
					}}
				/>
				<DatePicker
					modal
					date={date}
					mode="date"
					open={open}
					onConfirm={(date) => {
						setOpen(false);
						setDate(date);
						const fdate = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
						dispatch({ type: 'BIRTHDAY', birthday: fdate });
					}}
					onCancel={() => {
						setOpen(false);
					}}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	item1: {
		flex: 1,

		padding: 20,
	},
	fullName: { color: '#636363', fontSize: 20, fontFamily: 'SFRounded-Medium' },
	lineUnderInput: { height: 1, backgroundColor: '#636363', marginBottom: 30 },
	birthday: { flexDirection: 'row' },
	infoText: { color: 'black' },
	button: {
		marginBottom: 15,
		backgroundColor: '#ff1493',
		borderRadius: 15,
	},
	avatarEdit: {
		padding: 20,
	},
	profilePhoto: {
		alignSelf: 'center',
	},
	profileButton: {
		marginHorizontal: 10,
		top: 30,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
