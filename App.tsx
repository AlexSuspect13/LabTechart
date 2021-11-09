import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTabs, SignInScreen, Giving, Account, Payments, Card, Saving, Checking } from './src';
import { AuthContext } from './src/utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RootBottomTabNavigator } from './src/types/navigation';
import { SavingScreenNavigation } from './src/types/navigation';

const StackAuth = createStackNavigator();
const Tab = createBottomTabNavigator<RootBottomTabNavigator>();

interface AuthStackScreenProps {
	navigation: SavingScreenNavigation;
}

function HomeTab() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarIcon: ({ color, size }) => {
					let iconName;
					if (route.name === 'HomeTabs') {
						iconName = 'home';
					}
					if (route.name === 'Account') {
						iconName = 'ios-person-outline';
					}
					if (route.name === 'Card') {
						iconName = 'card-outline';
					}
					if (route.name === 'Giving') {
						iconName = 'ios-heart-outline';
					}
					if (route.name === 'Payments') {
						iconName = 'ios-wallet-outline';
					}
					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}>
			<Tab.Screen name="HomeTabs" component={HomeTabs} />
			<Tab.Screen name="Giving" component={Giving} />
			<Tab.Screen name="Account" component={Account} />
			<Tab.Screen name="Payments" component={Payments} options={{}} />
			<Tab.Screen name="Card" component={Card} />
		</Tab.Navigator>
	);
}

function AuthStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SigInScreen">
			<Stack.Screen name="SigInScreen" component={SignInScreen} />
		</Stack.Navigator>
	);
}

const Stack = createStackNavigator();

export default function App({ navigation }: AuthStackScreenProps) {
	const [state, dispatch] = React.useReducer(
		(prevState, action) => {
			switch (action.type) {
				case 'RESTORE_TOKEN':
					return {
						...prevState,
						userToken: action.token,
						isLoading: false,
					};
				case 'SIGN_IN':
					return {
						...prevState,
						isSignout: false,
						userToken: action.token,
					};
				case 'SIGN_OUT':
					return {
						...prevState,
						isSignout: true,
						userToken: null,
					};
			}
		},
		{
			isLoading: true,
			isSignout: false,
			userToken: null,
		},
	);

	React.useEffect(() => {
		// Fetch the token from storage then navigate to our appropriate place
		const bootstrapAsync = async () => {
			let userToken;

			try {
				// Restore token stored in `SecureStore` or any other encrypted storage
				// userToken = await SecureStore.getItemAsync('userToken');
			} catch (e) {
				// Restoring token failed
			}

			// After restoring token, we may need to validate it in production apps

			// This will switch to the App screen or Auth screen and this loading
			// screen will be unmounted and thrown away.
			dispatch({ type: 'RESTORE_TOKEN', token: userToken });
		};

		bootstrapAsync();
	}, []);

	const authContext = React.useMemo(
		() => ({
			signIn: async (data) => {
				// In a production app, we need to send some data (usually username, password) to server and get a token
				// We will also need to handle errors if sign in failed
				// After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
				// In the example, we'll use a dummy token

				dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
			},
			signOut: () => dispatch({ type: 'SIGN_OUT' }),
			signUp: async (data) => {
				// In a production app, we need to send user data to server and get a token
				// We will also need to handle errors if sign up failed
				// After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
				// In the example, we'll use a dummy token

				dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
			},
		}),
		[],
	);

	return (
		<AuthContext.Provider value={authContext}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					{state.userToken == null ? (
						<>
							<Stack.Screen name="Auth" component={AuthStack} />
						</>
					) : (
						<>
							<Stack.Screen name="Home" component={HomeTab} />
							<Stack.Screen name="Saving" component={Saving} />
							<Stack.Screen name="Cheking" component={Checking} />
						</>
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
