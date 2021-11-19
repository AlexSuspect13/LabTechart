import * as React from 'react';
import { Alert, StyleSheet, TextInput, View, StatusBar, Text, TouchableOpacity, Keyboard } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { Button } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';

export function SignInScreen() {
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [loadinPending, setLoadingPending] = React.useState(false);
	const pressHandler = () => {
		Alert.alert('Ошибка', 'Вход в аккаунт не выполнен!', [{ text: 'ok', onPress: () => console.log('Хорошо!') }]);
	};

	const [keyboardStatus, setKeyboardStatus] = React.useState(true);

	React.useEffect(() => {
		const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
			setKeyboardStatus(false);
		});
		const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
			setKeyboardStatus(true);
		});

		return () => {
			showSubscription.remove();
			hideSubscription.remove();
		};
	}, []);

	const dispatch = useDispatch();

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#fff" />
			<View style={styles.item1}>
				<Text style={{ color: '#000', fontSize: 45, fontFamily: 'SF-Pro-Rounded-Medium' }}>Login</Text>
				<View style={styles.hairline} />
				<Text style={{ color: '#636363', fontSize: 20, fontFamily: 'SF-Pro-Rounded-Medium' }}>Email</Text>
				<TextInput
					placeholder="Your email addres"
					placeholderTextColor="#c0c0c0"
					style={styles.txtinput}
					value={username}
					onChangeText={setUsername}
				/>
				<View style={{ height: 1, backgroundColor: '#636363', marginBottom: 5 }} />
				<Text style={{ color: '#636363', fontSize: 20, fontFamily: 'SF-Pro-Rounded-Medium' }}>Password</Text>
				<TextInput
					placeholder="Password"
					placeholderTextColor="#c0c0c0"
					style={styles.txtinput}
					value={password}
					onChangeText={setPassword}
				/>
				<View style={{ height: 1, backgroundColor: '#636363', marginBottom: 5 }} />
				<TouchableOpacity>
					<Text style={{ textAlign: 'right', color: '#ff1493', fontFamily: 'SF-Pro-Rounded-Bold' }}>
						FORGOT PASSWORD
					</Text>
				</TouchableOpacity>
			</View>
			<View style={{ padding: 15 }}>
				<Button
					title="Login"
					//TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
					onPress={() => {
						Keyboard.dismiss();
						setLoadingPending(true);
						let email = /^[\w-\.]+@itechart.com$/;
						if (email.test(username) && password === 'admin') {
							setTimeout(() => {
								dispatch({ type: 'SIGN_IN', token: 'sdsd' });
							}, 1000);
						} else {
							setLoadingPending(false);
							pressHandler();
						}
					}}
					loading={loadinPending}
					buttonStyle={
						{
							backgroundColor: '#ff1493',
							borderRadius: 20,
							marginBottom: 10,
						}
						//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
					}
				/>
				{keyboardStatus ? (
					<>
						<Text style={{ color: '#c0c0c0', textAlign: 'center', marginBottom: 10 }}>Lets test 2 ways to log in</Text>

						<TouchableHighlight>
							<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
								<View style={styles.idButton}>
									<Icon name="face" />
									<Text style={{ color: '#c0c0c0' }}>Face ID</Text>
								</View>
								<View style={styles.idButton}>
									<Icon name="fingerprint" />
									<Text style={{ color: '#c0c0c0' }}>Touch ID</Text>
								</View>
							</View>
						</TouchableHighlight>
					</>
				) : null}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff',
	},
	item1: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 20,
	},
	hairline: {
		backgroundColor: '#ff1493',
		height: 4,
		width: '35%',
		marginBottom: 20,
	},
	idButton: {
		marginRight: 10,
		marginLeft: 10,
		borderWidth: 1,
		borderColor: '#c0c0c0',
		height: 30,
		width: 130,
		borderRadius: 15,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	txtinput: {
		color: '#000',
	},
});
