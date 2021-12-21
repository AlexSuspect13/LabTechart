import React from 'react';
import { StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import RNFS from 'react-native-fs';
import { useDispatch } from 'react-redux';
export const CameraScreen = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const [{ cameraRef }, { takePicture }] = useCamera();
	const captureHandle = async () => {
		try {
			const data = await takePicture();
			const filePath = data.uri;
			const newFilePath = RNFS.ExternalDirectoryPath + '/MyPhoto.jpg';
			RNFS.moveFile(filePath, newFilePath)
				.then(() => {
					console.log('IMAGE MOVED', filePath, '---to---', newFilePath);
					dispatch({ type: 'URI_USER_PHOTO', userPhoto: newFilePath });
				})
				.catch((e) => {
					console.log(e);
				});
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<View style={styles.container}>
			<RNCamera style={styles.camera} ref={cameraRef} type={RNCamera.Constants.Type.front} captureAudio={false}>
				<Feather
					style={styles.chevron}
					name="chevron-left"
					size={50}
					color={'white'}
					onPress={() => navigation.goBack()}
				/>

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
		flexDirection: 'column',
	},
	chevron: {
		alignSelf: 'flex-start',
		top: 60,
		left: 30,
	},
});
