import * as React from 'react';
import {Component } from "react";
import { StyleSheet, TextInput, Button, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';
import InfoForm from "./components/infoform/infoform"
import InfoformGoogle from "./components/infoform/infoformGoogle"
import Mapscreen from "./components/mapscreen/mapscreen"
import Profile from "./components/profile/profile"
import Friends from "./components/friends/friends"
import Login from "./components/login/login"
import Navbar from "./components/navbar/navbar"
import Chat from "./components/chat/chat"
import AdMaker from "./components/mapscreen/adMakerScreen"
import ProfileFriend from "./components/profile/profileFriend"
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
import * as Facebook from 'expo-facebook';
import FriendSearch from "./components/friendSearch/friendSearch"



const {height, width} = Dimensions.get("window")



const Stack = createStackNavigator();

Facebook.initializeAsync("321542369140869", "FlatmatesV2");


//making screens that can vaigate to other screens


function LoginScreen({ navigation }) {
  return (
    <View style={styles.containerLogin}>
      <Login />
    </View>
  );
}

//viser profilregistreringen
function ProfileDetailsScreen({ route, navigation }) {
  const email = route.params.email
  const name = route.params.name
  const image = route.params.image

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <InfoForm email = {email} fullName = {name} image = {image}/>
    </View>
  );
}

function ProfileDetailsScreenGoogle({navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <InfoformGoogle />
    </View>
  );
}



//viser kartskjermen
function Map({navigation}) {
  return (
    <View style = {{flex:1}}>

       <Mapscreen />
        
       <Navbar />

    </View>
  );
}





//viser venne skjermen
function FriendScreen({navigation}) {
  return (
    <View style = {{flex:1}}>
      <Friends />
       
      <Navbar />
  </View>
  );
}


//viser profil skjermen
function ProfileScreen({ navigation }) {
  return (
    <View style = {{flex:1}}>
      <Profile />
      <Navbar />
    </View>
  )
}


function ChatScreen({route, navigation}){
  const { profileImage } = route.params
  const { image } = route.params
  const { friendName } = route.params
  
  
  
  return (
    <View>
      <Chat 
      profileImage = {profileImage}
      friendImage={image}
      friendName = {friendName}
      />
      <Navbar />
    </View>
  )
}

function adMakerScreen({route, navigation}){
  const { address } = route.params
  const { city } = route.params
  return (
    <AdMaker 
    address = {address}
    city = {city} />
  )
}

function ProfileFriendScreen({ route, navigation}) {
  const { image } = route.params
  const { name } = route.params
  const { age } = route.params
  const { category } = route.params
  const { description } = route.params
  const { gender } = route.params
  return (
    <ProfileFriend 
    image = {image} 
    name = {name}
    age = {age}
    category = {category}
    description = { description }
    gender = {gender} />
  )
}


function FriendSearchScreen({route, navigation}){
  return(
    <FriendSearch />
  )
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Details" component={ProfileDetailsScreen} />
        <Stack.Screen name="DetailsGoogle" component={ProfileDetailsScreenGoogle} />
        <Stack.Screen name="Kart" component={Map} />
        <Stack.Screen name="Venner" component={FriendScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="AdMaker" component={adMakerScreen} />
        <Stack.Screen name="ProfileFriendScreen" component={ProfileFriendScreen} />
        <Stack.Screen name="Søk" component={FriendSearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





const styles = StyleSheet.create({
  textBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  infoForm: {
    display: "flex",
  },
  containerLogin: {
    padding: 8,
    backgroundColor: "#ffffff",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    bottom:53,
    flex:1,
    height:"95%"
    
  },
  rowContainer: {
    flexDirection: 'row',
    position:"absolute",
    
  }, 
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  container: {
    width: width,
    flexDirection: 'row',
    justifyContent:"center",
    position:'absolute',
    bottom:100,
    
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
  
});

export default App;