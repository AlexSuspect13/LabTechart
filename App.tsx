/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { Button, ThemeProvider } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const theme = {
  Button: {
    titleStyle: {
      color: 'blue',
    },
    Avatar: {
      rounded: true,
    },
    Badge: {
      textStyle: { fontSize: 30 },
    },
  },
};


 

  const App =()=>{
    return (
      <View style={styles.sectionContainer}>
        <Text style={{fontFamily: 'SF-Pro-Rounded-Bold'}}>This is my project</Text>
        <Text style={{fontFamily: 'SF-Pro-Rounded-Medium'}}>This is my project</Text>
        <Text style={{fontFamily: 'SF-Pro-Rounded-Ultralight'}}> This is my project</Text>
        <Text style={{fontFamily: 'SF Pro Rounded Regular'}}>This is my project</Text>
        <Image
        source={require('./assets/img/circleButtonPay.png')}/>
        <ThemeProvider theme={theme}>
          <Button title="My Button" titleStyle={{ color: 'pink' }} />
        </ThemeProvider>
      </View>

    );
  };



const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
