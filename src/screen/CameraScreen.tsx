import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import { Button } from 'react-native-elements';
export const CameraScreen = () => {
	const [{ cameraRef }, { takePicture }] = useCamera(null);
	const captureHandle = async () => {
		try {
			const data = await takePicture();
			console.log(data.uri);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<View style={styles.container}>
			<RNCamera style={styles.camera} ref={cameraRef} type={RNCamera.Constants.Type.front} captureAudio={false}>
				<Button
					buttonStyle={styles.button}
					onPress={() => {
						captureHandle();
					}}
				/>
			</RNCamera>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		width: 70,
		height: 70,
		borderRadius: 100,
		backgroundColor: 'white',
		alignSelf: 'center',
		marginBottom: 30,
	},
	camera: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
});
