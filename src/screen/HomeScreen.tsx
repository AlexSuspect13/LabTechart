import * as React from 'react';
import { StyleSheet, View, Image, SafeAreaView, StatusBar, FlatList, ImageRequireSource } from 'react-native';
import { Surface } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { UserMenu } from '../components/userMenu';
import { AccountOverview } from '../components/AccountOverview';
import { VideoCards } from '../components/goodnesCard';
import { Card } from '../components/cards';

type onViewItemsCnaged = {
	viewableItems: any;
	changed: any;
};
type Item = {
	photo: ImageRequireSource;
	video?: ImageRequireSource;
};
const data: Item[] = [
	{
		photo: require('../../assets/img/rectangle2.png'),
	},
	{
		video: require('../../assets/video/video1.mp4'),
		photo: require('../../assets/img/rectangle.png'),
	},
	{
		photo: require('../../assets/img/rectangle2.png'),
	},
];

export function Home() {
	const [isPaused, setIsPaused] = React.useState(true);

	const onViewableItemsChanged = React.useCallback(({ changed }: onViewItemsCnaged) => {
		changed.forEach((item: any) => {
			if (item.index === 1) {
				setIsPaused(!item.isViewable);
			}
		});
	}, []);

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
				<FlatList<Item>
					onViewableItemsChanged={onViewableItemsChanged}
					viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
					ListHeaderComponent={AccountOverview}
					data={data}
					renderItem={({ item }) => (
						<>
							{item.video ? (
								<VideoCards video={item.video} isPaused={isPaused} kidsPhotoForVideo={item.photo} />
							) : (
								<Card kidsImg={item.photo} />
							)}
						</>
					)}
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
		height: '94%',
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
