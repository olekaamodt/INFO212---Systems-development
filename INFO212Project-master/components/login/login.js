import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Facebook from 'expo-facebook';


//lager en buttom som henter Navigation stack når den blir trykket på
function LoginToButtonFacebook({ screenName, facebookLogin }) {
  const navigation = useNavigation();
  return (
    
    <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]} 
    title={`Go to ${screenName}`}
    
    //LoginFunction vil være facebook Login funksjonen
    onPress={() => facebookLogin(navigation, screenName)}>
    <View style={styles.socialButtonContent}>
      <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF'}}/>
      <Text style={styles.loginText}>Continue with facebook</Text>
    </View>
  </TouchableOpacity>
  );
}


function LoginToButtonGoogle({ screenName }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]} 
    title={`Go to ${screenName}`}
    onPress={() => navigation.navigate(screenName)}>
          <View style={styles.socialButtonContent}>
            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/google/androidL/40/FFFFFF'}}/>
            <Text style={styles.loginText}>Sign in with google</Text>
          </View>
      </TouchableOpacity>
  );
}


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn:false,
      setLoggedinStatus:false,
      userData:null,
      setUserData:null,
      isImageLoading:false,
      setImageLoadStatus:false,
      
    }

  }

  
  //funksjon som henter profildata fra Facebook når den blir kalt
  logInFacebook = async (nav, screenName) => {
    try {
      const {
        type,
        token,
        expirationDate,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync('321542369140869', {
        permissions: ['public_profile'],
      });
      console.log("test")
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`)
        .then(response => response.json())
        .then(data => nav.navigate(screenName, {email:data.email, name:data.name, image:data.picture.data.url}))
        
        
      } else {
        // type === 'cancel'
      }
    }
    catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }


//funksjon som blir kalt når man logger ut
logout = () => {
  //setter loggedInStatus til false
  this.state.setLoggedinStatus = false;
  //gjør om bruker data til null
  this.state.setUserData = null;
  //setter image til false
  this.state.setImageLoadStatus = false
}
  
  
  render() {
   
    return (
      <View style={styles.container}>
        <View>
            <Text style={styles.logo}>Flatmates</Text>
        </View>
    
        <LoginToButtonGoogle screenName="DetailsGoogle" />
        <LoginToButtonFacebook screenName="Details" facebookLogin = {this.logInFacebook}/>
        
      </View>
    );
  }
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:15,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  icon:{
    width:30,
    height:30,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: '#3498db',
  },
  fabookButton: {
    backgroundColor: "#3b5998",
  },
  googleButton: {
    backgroundColor: "#ff0000",
  },
  loginText: {
    color: 'white',
  },
  restoreButtonContainer:{
    width:250,
    marginBottom:15,
    alignItems: 'flex-end'
  },
  socialButtonContent:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  socialIcon:{
    color: "#FFFFFF",
    marginRight:5
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#9378FF",
    marginBottom:40,
    fontFamily:"Roboto"
  }
});