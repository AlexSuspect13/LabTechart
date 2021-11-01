import * as React from "react";
import { TouchableWithoutFeedback, StyleSheet, Button, View, Image, Modal, ScrollView, StatusBar } from "react-native";
import { AuthContext } from "./utils";
import { Surface, Text } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';



export function Giving({navigation}) {
	
	const { signOut } = React.useContext(AuthContext);
	return (
		<Surface style={styles.header}>
			<StatusBar backgroundColor="#ff1493" />
			<View style={styles.view}>
				{
					<TouchableOpacity>
						<Feather
							style={{ marginRight: 80 }}
							name="chevron-left"
							size={30}
							color={"white"}
							onPress={() => navigation.navigate("Home",{
								screen:"Home"
							})}
						/>
					</TouchableOpacity>
				}
			</View>
			<View style={styles.view}>
				<Image source={require("../assets/img/logo.png")} />
			</View>
			<View style={styles.view}>
				{
					<TouchableOpacity>
						<Image style={{ marginLeft: 70 }} source={require("../assets/img/oval.png")} />
					</TouchableOpacity>
				}
			</View>
		</Surface>
	);
}

const styles = StyleSheet.create({
	header: {
		justifyContent: "space-between",
		height: 50,
		alignItems: "center",
		backgroundColor: "#ff1493",
		flexDirection: "row",
		elevation: 4,
	},
	view: {
		flex: 1,
		margin: 5,
		alignItems: "center",
	},
	body: {
		backgroundColor: "#dcdcdc",
		height: "100%",
	},
	userMenuContent: {
		position: "absolute",

		right: 10,
		width: 100,
	},
});
