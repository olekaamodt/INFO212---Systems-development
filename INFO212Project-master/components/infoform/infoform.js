import * as React from 'react';
import { Component } from "react";
import { useNavigation } from '@react-navigation/native';
import {StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image, Alert, Picker} from 'react-native';
import postUsers from "./postUsers"


function GoToButton({ screenName, data }) {
  const navigation = useNavigation();

  return (
   <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} 
   title={`Go to ${screenName}`}
   onPress={async () => await postUsers(data).then(navigation.navigate(screenName))}>
   <Text style={styles.signUpText}>Oppdater</Text>
  </TouchableHighlight>
  );
}

class InfoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.fullName,
      email: this.props.email,
      image:this.props.image,
      gender:'',
      age:"",
      category:"",
      interests:[],
      description:"",
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  handleGender = (text) => {
    console.log(text)
    this.setState({ gender: text })
  }

  handleAge = (text) => {
    console.log(text)
    this.setState({ age: text })
  }

  handleCategory = (text) => {
    console.log(text)
    this.setState({ category: text })
  }

  handleInterests = (text) => {
    var joined = this.state.interests.concat(text);
    this.setState({interests:joined})
    console.log(this.state.interests)
    
  }

  handleDescription = (text) => {
    console.log(text)
    this.setState({ description: text })
  }

  

  
  render() {
    return (
      <View style={styles.container}>
        
          <Image style={styles.imageIcon} source={{uri: this.state.image}}/>
        

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              value={this.state.name}
              keyboardType="email-address"
              underlineColorAndroid='transparent'/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              value={this.state.email}
              keyboardType="email-address"
              underlineColorAndroid='transparent'/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <Picker style={styles.inputs}
              placeholder="Kjønn"
              onValueChange = {this.handleGender}
              selectedValue = {this.state.gender}
              underlineColorAndroid='transparent'
              >
                <Picker.Item label="Mann" value="mann" />
                <Picker.Item label="Kvinne" value="kvinne" />
              </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Alder"
              onChangeText={this.handleAge}
              
              underlineColorAndroid='transparent'
              />
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <Picker style={styles.inputs}
              placeholder="Student/Arbeid"
              onValueChange = {this.handleCategory}
              
              underlineColorAndroid='transparent'>
                <Picker.Item label="Student" value="student" />
                <Picker.Item label="Arbeid" value="arbeid" />
              </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <Picker style={styles.inputs}
              placeholder="Interesser"
              onValueChange={this.handleInterests }
              
              
              underlineColorAndroid='transparent'>
                <Picker.Item label="Sport" value="Sport" />
                <Picker.Item label="Gaming" value="Gaming" />
                <Picker.Item label="Fest" value="Fest" />
                <Picker.Item label="Filmer" value="Filmer" />
                <Picker.Item label="Sosial" value="Sosial" />
              </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <Text>{this.state.interests.map((item) => item + ", ")}</Text>
          
    
              
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Info"
              onChangeText = {this.handleDescription}
              
              underlineColorAndroid='transparent'/>
        </View>
        

        <GoToButton screenName="Kart" data={this.state}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec',
    height:"100%",
    width:"100%"
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  imageContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    width:80,
    height:100,
    marginBottom:20,
    alignItems:'center'
  },
  imageIcon:{
    width:100,
    height:100,
    marginLeft:15,
    marginBottom:"10%",
    justifyContent: 'center',
    borderRadius:100,

    
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
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
  signupButton: {
    backgroundColor: "#FF4DFF",
  },
  signUpText: {
    color: 'white',
  }
});


export default InfoForm