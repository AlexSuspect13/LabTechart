import * as React from 'react';
import { StyleSheet, TextInput, View, StatusBar, Text, TouchableOpacity, Keyboard } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-elements';
import { sigIn } from '../services/authentication';
import { RootState } from '../Redux/store';
export function SignInScreen() {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
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

	const isLoading = useSelector((state: RootState) => state.user.isLoading);
	const authError = useSelector((state: RootState) => state.user.authError);

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#fff" />
			<View style={styles.item1}>
				<Text style={styles.textLogin}>Login</Text>
				<View style={styles.hairline} />
				<Text style={styles.EmailPasswordText}>Email</Text>
				<TextInput
					placeholder="Your email addres"
					placeholderTextColor="#c0c0c0"
					style={styles.txtinput}
					value={email}
					onChangeText={setEmail}
				/>
				<View style={styles.lineUnderInput} />
				<Text style={styles.EmailPasswordText}>Password</Text>
				<TextInput
					placeholder="Password"
					placeholderTextColor="#c0c0c0"
					style={styles.txtinput}
					value={password}
					onChangeText={setPassword}
					secureTextEntry
				/>
				<View style={styles.lineUnderInput} />
				<TouchableOpacity>
					<Text style={styles.authError}>{authError}</Text>

					<Text style={styles.forgotPassword}>FORGOT PASSWORD</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.item2}>
				<Button
					title="Login"
					onPress={async () => {
						Keyboard.dismiss();
						dispatch({ type: 'SIGN_IN_PENDING' });
						try {
							const a = await sigIn(password, email);
							dispatch({ type: 'SIGN_IN_FULFILLED', token: a });
						} catch (e) {
							const errorMessage = (e as Error).message;
							dispatch({ type: 'SIGN_IN_REJECTED', error: errorMessage });
						}
					}}
					loading={isLoading}
					buttonStyle={styles.loadingButton}
				/>
				{keyboardStatus ? (
					<>
						<Text style={styles.letsTest}>Lets test 2 ways to log in</Text>

						<View style={styles.idButtonContainer}>
							<TouchableHighlight>
								<View style={styles.idButton}>
									<Icon name="face" />
									<Text style={styles.idButtonText}>Face ID</Text>
								</View>
							</TouchableHighlight>
							<TouchableHighlight>
								<View style={styles.idButton}>
									<Icon name="fingerprint" />
									<Text style={styles.idButtonText}>Touch ID</Text>
								</View>
							</TouchableHighlight>
						</View>
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
	textLogin: { color: '#000', fontSize: 45, fontFamily: 'SF-Pro-Rounded-Medium' },
	item1: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 20,
	},
	item2: {
		padding: 15,
	},
	forgotPassword: { textAlign: 'right', color: '#ff1493', fontFamily: 'SF-Pro-Rounded-Bold' },
	EmailPasswordText: { color: '#636363', fontSize: 20, fontFamily: 'SF-Pro-Rounded-Medium' },
	hairline: {
		backgroundColor: '#ff1493',
		height: 4,
		width: '35%',
		marginBottom: 20,
	},
	lineUnderInput: { height: 1, backgroundColor: '#636363', marginBottom: 5 },
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
	idButtonContainer: { flexDirection: 'row', justifyContent: 'center' },
	txtinput: {
		color: '#000',
	},
	idButtonText: { color: '#c0c0c0' },
	authError: { textAlign: 'left', color: 'red' },
	loadingButton: {
		backgroundColor: '#ff1493',
		borderRadius: 20,
		marginBottom: 10,
	},
	letsTest: { color: '#c0c0c0', textAlign: 'center', marginBottom: 10 },
});
