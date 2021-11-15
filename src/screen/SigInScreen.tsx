import * as React from 'react';
import { ActivityIndicator, Alert, StyleSheet, TextInput, View, StatusBar, Text, TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { AppLoader } from '../components/AppLoader';

export function SignInScreen() {
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [loadinPending, setLoadingPending] = React.useState(false);
	const pressHandler = () => {
		Alert.alert('Ошибка', 'Вход в аккаунт не выполнен!', [{ text: 'ok', onPress: () => console.log('Хорошо!') }]);
	};

	const dispatch = useDispatch();

	return (
		<>
			<View style={styles.container}>
				<StatusBar backgroundColor="#ff1493" />
				<View style={styles.header}>
					<Text
						style={{
							color: '#000',
							marginTop: 50,
							marginLeft: 20,
							fontSize: 40,
							fontFamily: 'SF-Pro-Rounded-Medium',
						}}>
						Login
					</Text>
					<View style={styles.hairline} />
				</View>
				<View style={styles.loginwin}>
					<Text style={{ color: '#000', fontSize: 20, fontFamily: 'SF-Pro-Rounded-Medium' }}>Email</Text>
					<TextInput
						placeholder="Your email addres"
						placeholderTextColor="#c0c0c0"
						style={styles.txtinput}
						value={username}
						onChangeText={setUsername}
					/>
					<View style={{ height: 1, width: 300, backgroundColor: '#000', marginBottom: 30 }} />
					<Text style={{ color: '#000', fontSize: 20, fontFamily: 'SF-Pro-Rounded-Medium' }}>Password</Text>
					<TextInput
						style={styles.txtinput}
						placeholder="Password"
						placeholderTextColor="#c0c0c0"
						value={password}
						onChangeText={setPassword}
						secureTextEntry
					/>

					<View style={{ height: 1, width: 300, backgroundColor: '#000', marginBottom: 5 }} />
					{
						<TouchableOpacity>
							<Text style={{ color: '#ff1493', marginBottom: 50, marginLeft: 180, fontFamily: 'SF-Pro-Rounded-Bold' }}>
								FORGOT PASSWORD
							</Text>
						</TouchableOpacity>
					}
					{
						<TouchableOpacity
							onPress={() => {
								let email = /^[\w-\.]+@itechart.com$/;
								if (email.test(username) && password === 'admin') {
									setLoadingPending(true);
									setTimeout(() => {
										dispatch({ type: 'SIGN_IN', token: 'sdsd' });
									}, 4000);
								} else {
									pressHandler();
								}
							}}>
							<View style={{ backgroundColor: '#ff1493', height: 30, width: 300, borderRadius: 15 }}>
								<Text
									style={{
										color: 'white',
										fontSize: 15,
										marginTop: 5,
										marginLeft: 130,
										fontFamily: 'SF-Pro-Rounded-Medium',
									}}>
									LOGIN
								</Text>
							</View>
						</TouchableOpacity>
					}
					<Text style={{ color: '#c0c0c0', marginLeft: 80, marginTop: 120, marginBottom: 50 }}>
						Lets test 2 ways to log in
					</Text>

					{
						<TouchableHighlight>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
								<View
									style={{
										borderWidth: 1,
										borderColor: '#c0c0c0',
										height: 30,
										width: 130,
										borderRadius: 15,
										flexDirection: 'row',
									}}>
									<Icon style={{ marginLeft: 30, marginTop: 2 }} name="face" />
									<Text style={{ color: '#c0c0c0', marginTop: 6 }}>Face ID</Text>
								</View>
								<View
									style={{
										borderWidth: 1,
										borderColor: '#c0c0c0',
										height: 30,
										width: 130,
										borderRadius: 15,
										flexDirection: 'row',
									}}>
									<Icon style={{ marginLeft: 30, marginTop: 2 }} name="fingerprint" />
									<Text style={{ color: '#c0c0c0', marginTop: 6 }}>Touch ID</Text>
								</View>
							</View>
						</TouchableHighlight>
					}
				</View>
			</View>
			{/* {loadinPending ? <AppLoader /> : null} */}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},

	txtinput: {
		height: 40,
		width: 300,
		borderWidth: 0,
		borderRadius: 7,
		color: '#000',
	},
	header: {
		backgroundColor: '#fff',
		width: '100%',
		height: 150,
	},
	loginwin: {
		marginTop: 30,
		backgroundColor: '#fff',
		height: 570,
	},
	hairline: {
		backgroundColor: '#ff1493',
		height: 4,
		width: 85,
		marginLeft: 20,
	},
	button: {
		height: 50,
		width: 150,
	},
});
