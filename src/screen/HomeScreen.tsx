import * as React from 'react';
import { StyleSheet, View, Image, FlatList, ImageRequireSource, FlatListProps } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { UserMenu } from '../components/userMenu';
import { AccountOverview } from '../components/AccountOverview';
import { VideoCards } from '../components/goodnessCard';
import { Card } from '../components/cards';
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

	const onViewableItemsChanged = React.useCallback<NonNullable<FlatListProps<Item>['onViewableItemsChanged']>>(
		({ changed }) => {
			changed.forEach((item) => {
				if (item.index === 1) {
					setIsPaused(!item.isViewable);
				}
			});
		},
		[],
	);

	const insets = useSafeAreaInsets();
	return (
		<SafeAreaView style={styles.container} edges={['right', 'left']}>
			<View style={{ paddingTop: insets.top, backgroundColor: '#ff1493' }}>
				<View style={styles.header}>
					<View>
						<TouchableOpacity>
							<Feather name="menu" size={24} color={'white'} />
						</TouchableOpacity>
					</View>
					<View>
						<Image source={require('../../assets/img/logo.png')} />
					</View>
					<View>
						<UserMenu />
					</View>
				</View>
			</View>

			<FlatList<Item>
				onViewableItemsChanged={onViewableItemsChanged}
				viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
				ListHeaderComponent={AccountOverview}
				data={data}
				renderItem={({ item }) => {
					if (item.video) {
						return <VideoCards video={item.video} isPaused={isPaused} preview={item.photo} />;
					}
					return <Card preview={item.photo} />;
				}}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	header: {
		alignItems: 'center',
		flexDirection: 'row',
		elevation: 4,
		justifyContent: 'space-between',
		marginHorizontal: 15,
	},
	container: { flex: 1 },
});
