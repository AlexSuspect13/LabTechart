import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, SignInScreen, GivingScreen, AccountsScreen, PaymentsScreen, CardScreen, SavingScreen, CheckingScreen } from './src';
import { AuthContext } from './src/utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RootBottomTabNavigator, RootStackParamList } from './src/types/navigation';

const Tab = createBottomTabNavigator<RootBottomTabNavigator>();
const Stack = createStackNavigator<RootStackParamList>();

const getIconByRouteName = (routeName: keyof RootBottomTabNavigator) => {
	if (routeName === 'Accounts') {
		return 'ios-person-outline';
	}

	if (routeName === 'Card') {
		return 'card-outline';
	}

	if (routeName === 'Giving') {
		return 'ios-heart-outline';
	}

	if (routeName === 'Payments') {
		return 'ios-wallet-outline';
	}

	return 'home';
};

function HomeTabs() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarIcon: ({ color, size }) => {
					const iconName = getIconByRouteName(route.name);

					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Accounts" component={AccountsScreen} />
			<Tab.Screen name="Giving" component={GivingScreen} />
			<Tab.Screen name="Payments" component={PaymentsScreen} options={{}} />
			<Tab.Screen name="Card" component={CardScreen} />
		</Tab.Navigator>
	);
}

export default function App() {
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
						<Stack.Screen name="SigInScreen" component={SignInScreen} />
					) : (
						<>
							<Stack.Screen name="HomeTabs" component={HomeTabs} />
							<Stack.Screen name="Savings" component={SavingScreen} />
							<Stack.Screen name="Checking" component={CheckingScreen} />
						</>
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
