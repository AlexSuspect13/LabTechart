import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Redux/store';
import DatePicker from 'react-native-date-picker';

export const Profile = () => {
	const [date, setDate] = React.useState(new Date());
	const [open, setOpen] = React.useState(false);
	const [nickName, setNickName] = React.useState('');
	const name = useSelector((state: RootState) => state.userProfile.fullName);
	const birthday = useSelector((state: RootState) => state.userProfile.Userbirthday);
	const dispatch = useDispatch();
	return (
		<SafeAreaView style={styles.container} edges={['left', 'right']}>
			<Header title="Profile" />
			<View style={styles.item1}>
				<Text style={styles.fullName}>Full Name </Text>
				<TextInput placeholder={name} placeholderTextColor="#c0c0c0" onChangeText={setNickName} />
				<View style={styles.lineUnderInput} />

				<Text style={styles.fullName}>Birthday </Text>
				<Text>{birthday}</Text>
				<View style={styles.lineUnderInput} />

				<Button title="Change birthday" onPress={() => setOpen(true)} />
				<Button
					title="Change name"
					onPress={() => {
						dispatch({ type: 'RENAME_USER', Username: nickName });
					}}
				/>
				<Button
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
	},
	item1: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 20,
	},
	fullName: { color: '#636363', fontSize: 20, fontFamily: 'SFRounded-Medium' },
	lineUnderInput: { height: 1, backgroundColor: '#636363', marginBottom: 30 },
	birthday: { flexDirection: 'row' },
});
