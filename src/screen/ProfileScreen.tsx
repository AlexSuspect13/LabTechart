import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Redux/store';
import DatePicker from 'react-native-date-picker';
import { Button } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import { ProfieScreenNavigation } from '../types/navigation';
interface ProfieScreenProps extends ProfieScreenNavigation {}
export const Profile = ({ route, navigation }: ProfieScreenProps) => {
	const birthday = useSelector((state: RootState) => state.userProfile.birthday);
	const name = useSelector((state: RootState) => state.userProfile.fullName);
	const userPhoto = useSelector((state: RootState) => state.userProfile.image);
	const [date, setDate] = React.useState(new Date());
	const [openDate, setOpenDate] = React.useState(false);
	const [avatarPhoto, setAvatarPhoto] = React.useState(userPhoto);
	const [nickName, setNickName] = React.useState(name);
	const [editProfile, setEditProfile] = React.useState(true);
	const [stateBirthday, setStateBirthday] = React.useState(birthday);
	const dispatch = useDispatch();

	const choosePhotoFromLibrary = async () => {
		const image = await ImagePicker.openPicker({
			width: 300,
			height: 400,
		});
		setAvatarPhoto(image.path);
	};

	const choosenBirthday = (date: any) => {
		setOpenDate(false);
		setDate(date);
		const chooseDay = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
		setStateBirthday(chooseDay);
	};
	React.useEffect(() => {
		if (route.params?.post) {
			setAvatarPhoto(route.params?.post);
		}
	}, [route.params?.post]);

	return (
		<SafeAreaView style={styles.container} edges={['left', 'right']}>
			<Header title="Profile" />
			<ScrollView>
				<View style={styles.avatarConatiner}>
					{editProfile ? (
						<Image
							style={styles.profilePhoto}
							source={{
								uri: userPhoto,
							}}
						/>
					) : (
						<>
							<Image
								style={styles.profilePhoto}
								source={{
									uri: avatarPhoto,
								}}
							/>
							<View style={styles.profileButton}>
								<Button
									buttonStyle={styles.button}
									title="Make from camera"
									onPress={() => {
										navigation.navigate('Camera');
									}}
								/>
								<Button buttonStyle={styles.button} title="Choose from Galery" onPress={choosePhotoFromLibrary} />
							</View>
						</>
					)}
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.fullName}>Full Name </Text>
					{editProfile ? (
						<Text style={styles.aboutUserText}>{name}</Text>
					) : (
						<TextInput
							style={styles.infoText}
							value={nickName}
							placeholderTextColor="black"
							onChangeText={setNickName}
						/>
					)}
					<View style={styles.lineUnderInput} />

					<Text style={styles.fullName}>Birthday </Text>
					{editProfile ? (
						<Text style={styles.infoText}>{birthday}</Text>
					) : (
						<TouchableOpacity onPress={() => setOpenDate(true)}>
							<Text style={styles.infoText}>{stateBirthday}</Text>
						</TouchableOpacity>
					)}

					<View style={styles.lineUnderInput} />
					{editProfile ? (
						<>
							<Button
								buttonStyle={styles.button}
								title="Edit"
								onPress={() => {
									setEditProfile(false);
								}}
							/>
							<Button
								buttonStyle={styles.button}
								title="Exit"
								onPress={() => {
									dispatch({ type: 'SIGN_OUT', token: null });
								}}
							/>
						</>
					) : (
						<>
							<Button
								buttonStyle={styles.button}
								title="Cancel"
								onPress={() => {
									setEditProfile(true);
									setStateBirthday(birthday);
									setAvatarPhoto(userPhoto);
								}}
							/>
							<Button
								buttonStyle={styles.button}
								title="Apply updates"
								onPress={() => {
									dispatch({ type: 'SET_BIRTHDAY', birthday: stateBirthday });
									dispatch({ type: 'SET_FULLNAME', name: nickName });
									dispatch({ type: 'SET_PHOTO', image: avatarPhoto });
									setEditProfile(true);
								}}
							/>
						</>
					)}

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
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	infoContainer: { padding: 20 },
	fullName: { color: '#636363', fontSize: 20, fontFamily: 'SFRounded-Medium' },
	aboutUserText: { color: 'black', fontSize: 20, fontFamily: 'SFRounded-Medium' },
	lineUnderInput: { height: 1, backgroundColor: '#636363', marginBottom: 30 },
	infoText: { color: 'black', fontSize: 20 },
	button: {
		marginBottom: 15,
		backgroundColor: '#ff1493',
		borderRadius: 15,
		marginHorizontal: 5,
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
		marginTop: 30,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
