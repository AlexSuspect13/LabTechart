import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTabs, SignInScreen, Giving, Account, Payments, CardScreen, Saving, CheckingScreen } from '../src';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RootBottomTabNavigator } from './types/navigation';
import { useSelector } from 'react-redux';

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
				headerShown: false,
				tabBarIcon: ({ color, size }) => {
					const iconName = getIconByRouteName(route.name);

					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}>
			<Tab.Screen name="HomeTabs" component={HomeTabs} />
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
			<Stack.Screen name="SigInScreen" component={SignInScreen} />
		</Stack.Navigator>
	);
}

const Stack = createStackNavigator();

export default function Navigation() {
	const userToken = useSelector((state) => state.user.userToken);
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{userToken == null ? (
				<>
					<Stack.Screen name="Auth" component={AuthStack} />
				</>
			) : (
				<>
					<Stack.Screen name="Home" component={HomeTab} />
					<Stack.Screen name="Saving" component={Saving} />
					<Stack.Screen name="Checking" component={CheckingScreen} />
				</>
			)}
		</Stack.Navigator>
	);
}
