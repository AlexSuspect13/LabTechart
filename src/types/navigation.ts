import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';

export type RootBottomTabNavigator = {
	Home: undefined;
	Accounts: undefined;
	Giving: undefined;
	Payments: undefined;
	Card: undefined;
	Goodnes: undefined;
	Profile: undefined;
	Camera: undefined;
};
export type RootStackParamList = {
	SignInScreen: undefined;
	HomeTabs: undefined;
	Savings: { textParam: string };
	Checking: { textParam: string };
	Goodness: { textParam: string };
	Profile: { post: string };
	Camera: undefined;
};

export type HomeScreenNavigation = CompositeScreenProps<
	BottomTabScreenProps<RootBottomTabNavigator, 'Home'>,
	StackScreenProps<RootStackParamList>
>;

export type AccountsScreenNavigation = CompositeScreenProps<
	BottomTabScreenProps<RootBottomTabNavigator, 'Accounts'>,
	StackScreenProps<RootStackParamList>
>;

export type CheckingScreenNavigation = StackScreenProps<RootStackParamList, 'Checking'>;
export type SavingsScreenNavigation = StackScreenProps<RootStackParamList, 'Savings'>;
export type GoodnessScreenNavigation = StackScreenProps<RootStackParamList, 'Goodness'>;
export type ProfieScreenNavigation = StackScreenProps<RootStackParamList, 'Profile'>;
export type CameraScreenNavigation = StackScreenProps<RootStackParamList, 'Camera'>;
export type ProfileScreenNavigation = StackScreenProps<RootStackParamList, 'Profile'>;
