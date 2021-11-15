import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTabs, SignInScreen, Giving, Account, Payments, Card, Saving, Checking } from '../src';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RootBottomTabNavigator } from '../src/types/navigation';
import { useSelector } from 'react-redux';

const StackAuth = createStackNavigator();
const Tab = createBottomTabNavigator<RootBottomTabNavigator>();

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
					<Stack.Screen name="Checking" component={Checking} />
				</>
			)}
		</Stack.Navigator>
	);
}
