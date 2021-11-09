import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';

export type RootBottomTabNavigator = {
	Home: undefined;
	Accounts: undefined;
	Giving: undefined;
	Payments: undefined;
	Card: undefined;
};
export type RootStackParamList = {
	SigInScreen: undefined
	HomeTabs: undefined
	Savings: { textParam: string };
	Checking: { textParam: string };
};

// Root bottom tab
export type HomeScreenNavigation = CompositeScreenProps<
	BottomTabScreenProps<RootBottomTabNavigator, 'Home'>,
	StackScreenProps<RootStackParamList>
>;

export type GivingScreenNavigation = CompositeScreenProps<
	BottomTabScreenProps<RootBottomTabNavigator, "Giving">,
	StackScreenProps<RootStackParamList>
>;

export type AccountsScreenNavigation = CompositeScreenProps<
	BottomTabScreenProps<RootBottomTabNavigator, "Accounts">,
	StackScreenProps<RootStackParamList>
>;

export type CheckingScreenNavigation = StackScreenProps<RootStackParamList, "Checking">
export type SavingsScreenNavigation = StackScreenProps<RootStackParamList, "Savings">;

