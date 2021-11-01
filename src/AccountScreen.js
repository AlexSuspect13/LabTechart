import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import { Surface, Text } from 'react-native-paper';
import { TouchableOpacity } from "react-native-gesture-handler";



export function Account({navigation}) {

	return (
		<View>
			<Surface style={styles.header}>
          <View style={styles.view}>
            {
              <TouchableOpacity>
                <Feather style={{marginRight: 80}} name="chevron-left" size={30} color={"white"} onPress={() => navigation.navigate("Home")}/>
              </TouchableOpacity>
            }
          </View>
          <View style={styles.view}>
            <Text>Account</Text>
          </View>
          <View style={styles.view}>
          {
              <TouchableOpacity >
                 <Image style={{marginLeft: 70}} source={require("../assets/img/oval.png")}/>
              </TouchableOpacity>
            }
          </View>
      </Surface>
      
		</View>
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
  view:{
    flex: 1,
    margin: 5,
    alignItems: 'center'
  },
  
});


