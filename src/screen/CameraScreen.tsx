import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import { useNavigation } from '@react-navigation/core';
import RNFS from 'react-native-fs';
import { useDispatch } from 'react-redux';

export const CameraScreen = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const PendingView = () => (
		<View
			style={{
				flex: 1,
				backgroundColor: 'lightgreen',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Text>Waiting</Text>
		</View>
	);
	const takePictures = async function (camera: any) {
		const options = { quality: 0.1, base64: true };
		const data = await camera.takePictureAsync(options);
		dispatch({ type: 'SET_PHOTO', image: data.uri });
		navigation.goBack();
	};
	return (
		<RNCamera style={styles.container} type={RNCamera.Constants.Type.front} flashMode={RNCamera.Constants.FlashMode.on}>
			{({ camera, status }) => {
				if (status !== 'READY') return <PendingView />;
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
});
