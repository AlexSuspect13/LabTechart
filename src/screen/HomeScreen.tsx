import * as React from 'react';
import { StyleSheet, View, Image, SafeAreaView, StatusBar, Animated } from 'react-native';
import { Surface } from 'react-native-paper';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { UserMenu } from '../components/userMenu';
import { AccountOverview } from '../components/AccountOverview';
import { VideoCards } from '../components/goodnesCard';
import { Card } from '../components/cards';

type onViewItemsCnaged = {
	viewableItems: any;
	changed: any;
};

const viewabilityConfig = {
	viewAreaCoveragePercentThreshold: 100,
};
const data = [
	{
		kidsPhoto: require('../../assets/img/rectangle2.png'),
	},
	{
		video: require('../../assets/video/video1.mp4'),
		kidsPhotoForVideo: require('../../assets/img/rectangle.png'),
	},
	{
		kidsPhoto: require('../../assets/img/rectangle2.png'),
	},
];

type renderItem = {
	item: any;
};
export function HomeTabs() {
	const [isPause, setIsPaused] = React.useState(true);
	const onViewableItemsChanged = ({ viewableItems, changed }: onViewItemsCnaged) => {
		if (viewableItems[0]?.isViewable && viewableItems[0]?.index == data[0].index) {
			setIsPaused(false);
		} else {
			setIsPaused(true);
		}
	};

	const renderItem = ({ item }: renderItem) => {
		return (
			<>
				<Card kidsImg={item.kidsPhoto} />

				<VideoCards video={item.video} isPaused={isPause} kidsPhotoForVideo={item.kidsPhotoForVideo} />
				<Card kidsImg={item.kidsPhoto} />
			</>
		);
	};

	return (
		<SafeAreaView>
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
					viewabilityConfig={viewabilityConfig}
					onViewableItemsChanged={onViewableItemsChanged}
					ListHeaderComponent={AccountOverview}
					data={data}
					renderItem={renderItem}
				/>
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
