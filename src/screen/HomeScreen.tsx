import * as React from 'react';
import { StyleSheet, View, Image, SafeAreaView, StatusBar } from 'react-native';
import { Surface, Title } from 'react-native-paper';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { HomeScreenNavigation } from '../types/navigation';
import { UserMenu } from '../components/userMenu';
import { Card } from '../components/cards';
import { Text } from 'react-native-elements';
import { AccountOverview } from '../components/AccountOverview';

interface HomeScreenProps extends HomeScreenNavigation {}


const Data=[
  {
   img: require("../../assets/img/rectangle2.png")	
	},
	{
   img: require("../../assets/img/rectangle.png")	
  },
	{
   img: require("../../assets/img/rectangle.png")	
  },
	{
   img: require("../../assets/img/rectangle2.png")	
  },
	{
   img: require("../../assets/img/rectangle.png")	
  },
	{
    img: require("../../assets/img/rectangle.png")	
  },
	{
    img: require("../../assets/img/rectangle2.png")	
  },
	{
  	img: require("../../assets/img/rectangle2.png")	
  },
	{
   img: require("../../assets/img/rectangle2.png")	
	}
]




export function HomeTabs({ navigation }: HomeScreenProps) {



	const renderItem=({item})=>{
return (
	<Card kidsImg ={item.img}/>
)
	}


	return (
		<SafeAreaView >
			<Surface style={styles.header}>
				<StatusBar backgroundColor="#ff1493" />
				<View style={styles.view}>
					<TouchableOpacity>
						<Feather style={styles.goBack} name="menu" size={24} color={'white'} />
					</TouchableOpacity>
				</View>
				<View style={styles.view}>
					<Image source={require('../../assets/img/logo.png')} />
				</View>
				<View style={styles.view}>
					<UserMenu />
				</View>
			</Surface>
			
			<View style={styles.body}>
				<FlatList
				ListHeaderComponent={AccountOverview}
				data={Data}
				renderItem={renderItem}/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	header: {
		justifyContent: 'space-between',
		height: 50,
		alignItems: 'center',
		backgroundColor: '#ff1493',
		flexDirection: 'row',
		elevation: 4,
	},
	goBack: { marginRight: 80 },
	view: {
		flex: 1,
		margin: 5,
		alignItems: 'center',
	},
	body: {
		backgroundColor: '#F8F8FF',
		height: '100%',
	},
	userMenuContent: {
		position: 'absolute',

		right: 10,
		width: 100,
	},
	userPhoto: { marginLeft: 70 },
	userMenuOverlay: StyleSheet.absoluteFillObject,
	item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
