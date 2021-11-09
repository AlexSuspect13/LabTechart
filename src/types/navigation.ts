import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, RouteProp } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';

export type RootBottomTabNavigator = {
	HomeTabs: undefined;
	Account: undefined;
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

export type CheckingScreenRouteProp = RouteProp<RootStackParamList, 'Checking'>;
export type SavingScreenRouteProp = RouteProp<RootStackParamList, 'Saving'>;

export type HomeScreenNavigation = CompositeScreenProps<
	BottomTabScreenProps<RootBottomTabNavigator, 'HomeTabs'>,
	StackScreenProps<RootStackParamList>
>;
export type CheckingScreenNavigation = CompositeScreenProps<
	BottomTabScreenProps<RootBottomTabNavigator, 'Checking'>,
	StackScreenProps<RootStackParamList>
>;

export type SavingScreenNavigation = CompositeScreenProps<
	BottomTabScreenProps<RootBottomTabNavigator, 'Saving'>,
	StackScreenProps<RootStackParamList>
>;

export type AccountScreenNavigation = BottomTabNavigationProp<RootBottomTabNavigator, 'Account'>;
export type GivingScreenNavigation = BottomTabNavigationProp<RootBottomTabNavigator, 'Giving'>;
export type PaymentsScreenNavigation = BottomTabNavigationProp<RootBottomTabNavigator, 'Payments'>;

export type CardScreenNavigation = BottomTabNavigationProp<RootBottomTabNavigator, 'Card'>;
