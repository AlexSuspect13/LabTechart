import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, RouteProp } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';

export type RootBottomTabNavigator = {
	Home: undefined;
	Account: undefined;
	Giving: undefined;
	Payments: undefined;
	Card: undefined;
};
export type RootStackParamList = {
	SigInScreen: undefined
	HomeTabs: RootBottomTabNavigator
	Saving: { textParam: string };
	Checking: { textParam: string };
};

export type CheckingScreenRouteProp = RouteProp<RootStackParamList, 'Checking'>;
export type SavingScreenRouteProp = RouteProp<RootStackParamList, 'Saving'>;

export type HomeScreenNavigation = CompositeScreenProps<
	BottomTabScreenProps<RootBottomTabNavigator, 'Home'>,
	StackScreenProps<RootStackParamList>
>;
export type CheckingScreenNavigation = CompositeScreenProps<
	BottomTabScreenProps<RootBottomTabNavigator>,
	StackScreenProps<RootStackParamList, "Checking">
>;

export type SavingScreenNavigation = CompositeScreenProps<
	BottomTabScreenProps<RootBottomTabNavigator>,
	StackScreenProps<RootStackParamList, "Saving">
>;

export type AccountScreenNavigation = BottomTabNavigationProp<RootBottomTabNavigator, 'Account'>;
export type GivingScreenNavigation = BottomTabNavigationProp<RootBottomTabNavigator, 'Giving'>;
export type PaymentsScreenNavigation = BottomTabNavigationProp<RootBottomTabNavigator, 'Payments'>;

export type CardScreenNavigation = BottomTabNavigationProp<RootBottomTabNavigator, 'Card'>;
