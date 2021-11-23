import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, RouteProp } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';

export type RootBottomTabNavigator = {
	HomeTabs: undefined;
	Accounts: undefined;
	Giving: undefined;
	Payments: undefined;
	Card: undefined;
	Checking: undefined;
	Saving: undefined;
};
export type RootStackParamList = {
	Saving: { textParam: string };
	Checking: { textParam: string };
};
export type HomeScreenNavigation = CompositeScreenProps<
	BottomTabScreenProps<RootBottomTabNavigator, 'HomeTabs'>,
	StackScreenProps<RootStackParamList>
>;

export type AccountsScreenNavigation = CompositeScreenProps<
	BottomTabScreenProps<RootBottomTabNavigator, 'Accounts'>,
	StackScreenProps<RootStackParamList>
>;
export type GivingScreenNavigation = BottomTabNavigationProp<RootBottomTabNavigator, 'Giving'>;
export type PaymentsScreenNavigation = BottomTabNavigationProp<RootBottomTabNavigator, 'Payments'>;
export type CardScreenNavigation = BottomTabNavigationProp<RootBottomTabNavigator, 'Card'>;
export type CheckingScreenNavigation = StackScreenProps<RootStackParamList, 'Checking'>;
export type SavingsScreenNavigation = StackScreenProps<RootStackParamList, 'Saving'>;
