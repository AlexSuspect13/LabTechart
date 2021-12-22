import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { CameraScreenNavigation } from '../types/navigation';
const PendingView = () => (
	<View style={styles.pendingView}>
		<Text>Waiting</Text>
	</View>
);
interface CameraScreenProps extends CameraScreenNavigation {}
export const CameraScreen = ({ navigation }: CameraScreenProps) => {
	const takePictures = async function (camera: any) {
		const options = { quality: 0.1, base64: true };
		const data = await camera.takePictureAsync(options);

		navigation.navigate({
			name: 'Profile',
			params: { post: data.uri },
		});
	};
	return (
		<RNCamera style={styles.container} type={RNCamera.Constants.Type.front} flashMode={RNCamera.Constants.FlashMode.on}>
			{({ camera, status }) => {
				if (status !== 'READY') {
					return <PendingView />;
				}
				return (
					<View>
						<TouchableOpacity onPress={() => takePictures(camera)}>
							<View style={styles.button} />
						</TouchableOpacity>
					</View>
				);
			}}
		</RNCamera>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	button: {
		width: 70,
		height: 70,
		borderRadius: 100,
		backgroundColor: 'white',
		alignSelf: 'center',
		marginBottom: 30,
	},
	pendingView: {
		flex: 1,
		backgroundColor: 'lightgreen',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
