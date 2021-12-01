import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateNow from './DateNow';
import { InfoBlock } from './infoBloks';

export const AccountOverview = () => {
	return (
		<>
		<DateNow/>
		<View style={styles.container}>
			<View style={styles.headInfo}>
				<Text style={styles.mainText}>Accounts Overview</Text>
				<View style={styles.moneyInfo}>
					<Icon size={26} name="dollar" />
					<Text style={styles.money}>
						7,000<Text style={{ fontSize: 16, color: '#000' }}>.80</Text>
					</Text>
				</View>
				<Text style={styles.totalCash}>Total Avaliable cash</Text>
			</View>
			<View>
				<InfoBlock  text="Checking" infotxt="Main account|...0353|" dollar="1,500" cent="20" />
				<View style={styles.hairline} />
				<InfoBlock  text="Savings" infotxt="Buy a house|...4044|" dollar="5,000" cent="20" />
				<View style={styles.hairline} />
			</View>
		</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		borderWidth: 1,
		backgroundColor: 'white',
		color: 'black',
		borderRadius: 7,
		borderColor: '#DCDCDC',
		margin: 15,
	},
	headInfo: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
	},
	mainText: {
		fontSize: 17,
		padding: 10,
		fontWeight: '500',
		color: '#000',
	},
	moneyInfo: {
		flexDirection: 'row',
	},
	money: {
		fontSize: 24,
		fontWeight: '300',
		marginLeft: 5,
		color: '#000',
	},
	totalCash: {
		color: '#c0c0c0',
		fontSize: 11,
	},
	infoBlock: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
	},
	infoAbtPage: {
		padding: 10,
		flexDirection: 'column',
	},
	infAbtAccount: {
		fontSize: 20,
	},
	hairline: {
		backgroundColor: '#c0c0c0',
		height: 1,
		width: '100%',
		marginBottom: 20,
	},
	Accountinf: {
		flexDirection: 'row',
		alignContent: 'flex-end',
	},
});
/*{
	<InfoBlock screenname="Savings" text="Goodnes" infotxt="Cash Rewards" dollar="500" cent="40" />
	<View style={styles.hairline} />
}*/