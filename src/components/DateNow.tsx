import React from "react";
import { StyleSheet, Text,View } from "react-native";
import moment from "moment";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";





function generateGreetings(){

  var currentHour =parseFloat( moment().format("HH"));

  if (currentHour >= 3 && currentHour < 12){
      return "Good Morning";
  } else if (currentHour >= 12 && currentHour < 15){
      return "Good Afternoon";
  }   else if (currentHour >= 15 && currentHour < 20){
      return "Good Evening";
  } else if (currentHour >= 20 && currentHour < 3){
      return "Good Night";
  } else {
      return "Hello"
  }

}

export default function DateNow(){
	const userName = useSelector((state: RootState) => state.userName.user);


  const date = moment().format("MMM DD,YYYY")
  
  return(
    <View style={styles.container}>
     
      <Text>{generateGreetings()} </Text>
      <Text style={styles.text}>{userName} </Text>
      <View style={styles.hairline}/>
      <Text>  {date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{

    padding: 15,
    color: "black",
    flexDirection: 'row'
  },
  text:{
    fontSize: 15,
  },
  hairline:{
    height:16,
    width:2,
    backgroundColor: 'black'
  }
})