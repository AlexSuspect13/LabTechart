import * as React from 'react';
import { StyleSheet } from 'react-native';
import { HomeScreenNavigation } from '../types/navigation';
import { useDispatch } from 'react-redux';
import ComingSoon from '../components/comingSoon';

interface HomeScreenProps {
	navigation: HomeScreenNavigation;
}

export function Giving() {
	return <ComingSoon />;
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: 'pink',
		height: '100%',
		width: '100%',
	},
	header: {
		justifyContent: 'space-between',
		height: 50,
		alignItems: 'center',
		backgroundColor: '#ff1493',
		flexDirection: 'row',
		elevation: 4,
	},
	view: {
		flex: 1,
		margin: 5,
		alignItems: 'center',
	},
	body: {
		backgroundColor: '#dcdcdc',
		height: '100%',
	},
	userMenuContent: {
		position: 'absolute',

		right: 10,
		width: 100,
	},
	userMenuOverlay: StyleSheet.absoluteFillObject,
});
