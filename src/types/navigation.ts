import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootBottomTabNavigator = {
	Home: undefined;
	Account: undefined;
	Giving: undefined;
	Payments: undefined;
	Card: undefined;
};
export type RootStackParamList = {
	Saving: undefined;
};

export type HomeScreenNavigation = BottomTabNavigationProp<RootBottomTabNavigator, "Home">;
export type AccountScreenNavigation = BottomTabNavigationProp<RootBottomTabNavigator, "Account">;
export type GivingScreenNavigation = BottomTabNavigationProp<RootBottomTabNavigator, "Giving">;
export type PaymentsScreenNavigation = BottomTabNavigationProp<RootBottomTabNavigator, "Payments">;
export type CardScreenNavigation = BottomTabNavigationProp<RootBottomTabNavigator, "Card">;
