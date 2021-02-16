import * as React from 'react';
import { Component } from "react";
import { StyleSheet, TextInput, Button, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const {height, width} = Dimensions.get("window")


//gjør at screen name som blir brukt i selve View blir navigert til
//det funker fordi funksjonen blir kalt i app.js
function GoToButton({ screenName }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
    title={`${screenName}`}
    onPress={() => navigation.navigate(screenName)}onPress={() => navigation.navigate(screenName)}
    >
          <View >
            <Text style= {{paddingTop: 25, fontSize:20}} >{screenName}</Text>
          </View>
      </TouchableOpacity>
  );
}



class Navbar extends Component {
    render() {
    return (
      <View style = {styles.container}> 
        
          <GoToButton screenName = "Venner" />
          <GoToButton screenName = "Søk" />
          <GoToButton screenName = "Kart" />
          <GoToButton screenName = "Grupper" />
          <GoToButton screenName = "Profile" />
        
      </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flexDirection: 'row',
    justifyContent:"center",
    position:'absolute',
    bottom:0,
    position: "absolute",
    backgroundColor: "#ffffff",
    justifyContent:"space-between",
    height:"10%",
    
  },
  rowContainer: {
    flexDirection: 'row',
    position:"absolute",
    
  } ,
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    }
  
  
    
    
  });
export default Navbar