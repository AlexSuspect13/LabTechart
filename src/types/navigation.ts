import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';

export type RootBottomTabNavigator = {
	HomeTabs: undefined;
	Accounts: undefined;
	Giving: undefined;
	Payments: undefined;
	Card: undefined;
};
export type RootStackParamList = {
	SignInScreen: undefined;
	HomeTabs: undefined;
	Savings: { textParam: string };
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

export type CheckingScreenNavigation = StackScreenProps<RootStackParamList, 'Checking'>;
export type SavingsScreenNavigation = StackScreenProps<RootStackParamList, 'Savings'>;
