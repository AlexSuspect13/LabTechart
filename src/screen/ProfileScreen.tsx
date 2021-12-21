import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Redux/store';
import DatePicker from 'react-native-date-picker';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import ImagePicker from 'react-native-image-crop-picker';
export const Profile = () => {
	const [date, setDate] = React.useState(new Date());
	const [openDate, setOpenDate] = React.useState(false);
	const [avatarPhoto, setAvatarPhoto] = React.useState('');
	const [nickName, setNickName] = React.useState('');
	const name = useSelector((state: RootState) => state.userProfile.fullName);
	const birthday = useSelector((state: RootState) => state.userProfile.birthday);
	const userPhoto = useSelector((state: RootState) => state.userProfile.image);
	const dispatch = useDispatch();
	const navigation = useNavigation();

	const choosePhotoFromLibrary = () => {
		ImagePicker.openPicker({
			width: 300,
			height: 400,
		}).then((image) => {
			setAvatarPhoto(image.path);
			dispatch({ type: 'SET_PHOTO', image: image.path });
			console.log(avatarPhoto);
		});
	};

	const choosenBirthday = (date: any) => {
		setOpenDate(false);
		setDate(date);
		const chooseDay = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
		dispatch({ type: 'SET_BIRTHDAY', birthday: chooseDay });
	};

	return (
		<SafeAreaView style={styles.container} edges={['left', 'right']}>
			<Header title="Profile" />
			<View style={styles.avatarConatiner}>
				<Image
					style={styles.profilePhoto}
					source={{
						uri: userPhoto,
					}}
				/>
				<View style={styles.profileButton}>
					<Button buttonStyle={styles.button} title="Make from camera" onPress={() => navigation.navigate('Camera')} />
					<Button buttonStyle={styles.button} title="Choose from Galery" onPress={choosePhotoFromLibrary} />
				</View>
			</View>

			<ScrollView style={styles.body}>
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
				<Button buttonStyle={styles.button} title="Change birthday" onPress={() => setOpenDate(true)} />
				<Button
					buttonStyle={styles.button}
					title="Change name"
					onPress={() => {
						dispatch({ type: 'SET_RENAME', name: nickName });
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
					open={openDate}
					onConfirm={choosenBirthday}
					onCancel={() => {
						setOpenDate(false);
					}}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	body: {
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
	avatarConatiner: {
		padding: 20,
		alignContent: 'flex-end',
	},
	profilePhoto: {
		alignSelf: 'center',
		height: 150,
		width: 150,
		borderRadius: 100,
	},
	profileButton: {
		marginHorizontal: 10,
		marginTop: 30,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
