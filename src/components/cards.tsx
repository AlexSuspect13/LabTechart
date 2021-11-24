import React from "react";
import { View, Text, StyleSheet,Image } from "react-native"
import { Button} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

export const Card = ()=>{
  return(
    <View style = {styles.container}>
    <View style = {styles.headerContainer}>
        <Image source={require("../../assets/img/avatar.png")}/>
        <View style = {styles.infoAboutPost}>
            <Text> Yuor Giving Impact</Text>
            <View style={styles.dateName}>
              <Text> St Jude</Text>
              <View style={styles.point}/>
              <Text> 4 hrs Ago</Text>
            </View>
        </View>
    </View>
    <Image source={require("../../assets/img/rectangle2.png")}></Image>
    <Text>Danny, Your donation helped 5 fvfxing kids get much needed cancer sergery, thanks for being amazing! </Text>
    <Button icon={
      <Icon name = 'ios-arrow-redo-outline'/>
    }></Button>
  </View>
  )
  
}



const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 5,
  },
  headerContainer:{
    flexDirection: 'column'
},
infoAboutPost:{
  flexDirection: 'row',
  alignItems: 'flex-start'
  
},
point:{
  height:1,
  width:1,
  backgroundColor: "#ff1493"
},
dateName:{
  flexDirection: 'column'
}
})