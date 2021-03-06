import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, SignInScreen, Giving, Account, Payments, CardScreen, Savings, CheckingScreen, Goodness } from '../src';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RootBottomTabNavigator } from './types/navigation';
import { useSelector } from 'react-redux';
import { RootState } from './Redux/store';
const Tab = createBottomTabNavigator<RootBottomTabNavigator>();

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

function HomeTab() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				backgroundColor: 'transparent',
				headerShown: false,
				tabBarActiveTintColor: '#ff1493',
				tabBarIcon: ({ size, focused }) => {
					const iconName = getIconByRouteName(route.name);
					const IconColor = focused ? '#ff1493' : 'black';
					return <Ionicons name={iconName} size={size} color={IconColor} />;
				},
			})}>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Accounts" component={Account} />
			<Tab.Screen name="Giving" component={Giving} />
			<Tab.Screen name="Payments" component={Payments} options={{}} />
			<Tab.Screen name="Card" component={CardScreen} />
		</Tab.Navigator>
	);
}

function AuthStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SigInScreen">
			<Stack.Screen name="SignInScreen" component={SignInScreen} />
		</Stack.Navigator>
	);
}

const Stack = createStackNavigator();

export default function Navigation() {
	const userToken = useSelector((state: RootState) => state.user.userToken);
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{userToken == null ? (
				<>
					<Stack.Screen name="Auth" component={AuthStack} />
				</>
			) : (
				<>
					<Stack.Screen name="HomeTabs" component={HomeTab} />
					<Stack.Screen name="Savings" component={Savings} />
					<Stack.Screen name="Checking" component={CheckingScreen} />
					<Stack.Screen name="Goodness" component={Goodness} />
				</>
			)}
		</Stack.Navigator>
	);
}
