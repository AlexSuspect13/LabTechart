import React from "react";
import { View, Text, StyleSheet,Image } from "react-native"
import { Button} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';






export const Card = ({kidsImg})=>{
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
    <Image style={styles.kidsPhoto} source={kidsImg}></Image>
    <Text style={styles.textAboutKids}>Danny, Your donation helped 5 amazing kids get much needed cancer sergery, thanks for being amazing! </Text>
  
      <Button title={'Share to spread the word'} buttonStyle={styles.cardButton} icon={
       <Icon color={'#fff'} size={13} name = 'share'/>
       }/>
       

  </View>
  )
  
}



const styles = StyleSheet.create({
  container:{
    display: 'flex',
    borderWidth: 1,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 7,
    borderColor: "#DCDCDC",
    margin: 15
  },
  headerContainer:{
    flexDirection: 'row',
    padding: 10,
},
infoAboutPost:{
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center'
},
kidsPhoto:{
width: '100%'
},

textAboutKids:{
padding: 10
},
point:{
  height:5,
  width:5,
  backgroundColor: "#ff1493",
  borderRadius: 40,

},
dateName:{
  flexDirection: 'row'
},
cardButton:{
fontSize: 10,
margin: 20,
backgroundColor: '#ff1493',
borderRadius: 20
}
})