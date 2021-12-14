import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';

type VideoCards = {
	video: any;
	isPaused: boolean;
	kidsPhotoForVideo: any;
};
export const VideoCards = ({ video, isPaused, kidsPhotoForVideo }: VideoCards) => {
	const [muted, setMuted] = React.useState(true);

	const volumeIcon = () => {
		return muted ? 'volume-off' : 'volume-up';
	};

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Image source={require('../../assets/img/avatar.png')} />
				<View style={styles.infoAboutPost}>
					<Text style={styles.text}> Yuor Giving Impact</Text>
					<View style={styles.dateName}>
						<Text style={styles.text}> St Jude</Text>
						<View style={styles.point} />
						<Text style={styles.text}> 4 hrs Ago</Text>
					</View>
				</View>
			</View>
			{isPaused ? (
				<Image style={styles.kidsimg} source={kidsPhotoForVideo} />
			) : (
				<View style={styles.videoContainer}>
					<Video style={styles.videos} muted={muted} controls source={video} paused={isPaused} />
					<TouchableOpacity
						onPress={() => {
							setMuted(!muted);
						}}
						style={{ backgroundColor: 'black', opacity: 1 }}>
						<Icon style={styles.videoicon} color={'#fff'} size={30} name={volumeIcon()} />
					</TouchableOpacity>
				</View>
			)}
			<Text style={styles.textAboutKids}>
				Danny, Your donation helped 5 amazing kids get much needed cancer sergery, thanks for being amazing!
			</Text>
			<Button
				title="Share to spread the word"
				buttonStyle={styles.cardButton}
				icon={<Icon color={'#fff'} size={13} name="share" />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		borderWidth: 1,
		backgroundColor: 'white',
		borderRadius: 7,
		borderColor: '#DCDCDC',
		margin: 15,
	},
	videos: {
		height: 200,
		width: '100%',
	},
	videoicon: {
		position: 'absolute',
		right: 15,
		bottom: 15,
		opacity: 0.4,
	},
	headerContainer: {
		flexDirection: 'row',
		padding: 10,
	},
	kidsimg: { width: '100%' },
	infoAboutPost: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center',
	},

	videoContainer: {
		justifyContent: 'flex-end',
	},
	text: {
		color: '#000',
	},
	textAboutKids: {
		padding: 10,
		color: '#000',
	},
	point: {
		height: 5,
		width: 5,
		backgroundColor: '#ff1493',
		borderRadius: 40,
		alignSelf: 'center',
		margin: 5,
	},
	dateName: {
		flexDirection: 'row',
	},
	cardButton: {
		fontSize: 10,
		margin: 20,
		backgroundColor: '#ff1493',
		borderRadius: 20,
	},
});
