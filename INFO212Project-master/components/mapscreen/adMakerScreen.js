import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image, Alert, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import postAddress from "./postRequest"


//lager en button som henter dataene fra openstreetmap og så navigerer tilbake til map
function AddAddress({ screenName , address, city, description, hybelUrl}) {
    const navigation = useNavigation();
    var split_address = address.split(" ");
    if (split_address.length > 2) {
        split_address = [(split_address[0] + split_address[1]), split_address[2]]
    }

    var url = "https://nominatim.openstreetmap.org/search/?street=" + split_address[1] + "+" + split_address[0] +"&city=" + city + "&country=no&format=json&addressdetails=1&limit=1"
    console.log(url)
    return (
        //lager button som sender oss tilbake til skjermen og gir dataene til postAddress funkjsonen
      <TouchableHighlight
      title={`${screenName}`}
      onPress={async () => fetch(url)
      .then(response => response.json())
      //fortsett her
      .then((data) => postAddress({
        address:address,
        city:city,
        description:description,
        url:hybelUrl,
    }, data))
      .then(navigation.navigate(screenName))
      .catch(e => console.log(e))}
      >
            <View >
              <Text style= {{paddingTop: 25, fontSize:20}} >Opprett Annonse</Text>
            </View>
        </TouchableHighlight>
    );
  }




export default class SignUpView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: this.props.address,
      city: this.props.city,
      picture: '',
      description: '',
      url:'',
      keywords: []
    }

    this.address = this.props.address
    this.city = this.props.city
  }

  handleAddress = (text) => {
    console.log(text)
    this.setState({ address: text })
  }

  handleCity = (text) => {
      console.log(text)
    this.setState({ city: text })
  }

  handleDescription = (text) => {
    console.log(text)
  this.setState({ description: text })
}

handleUrl = (text) => {
  console.log(text)
this.setState({ url: text })
}

handleKeywords = (text) => {
  var joined = this.state.keywords.concat(text)
  this.setState({keywords:joined})
}


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              value={this.address}
              onChangeText = {this.handleAddress}
              underlineColorAndroid='transparent'
              />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              value={this.city}
              onChangeText = {this.handleCity}
              underlineColorAndroid='transparent'
              />
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <Picker style={styles.inputs}
              placeholder="Interesser"
              onValueChange={this.handleKeywords}
              
              
              underlineColorAndroid='transparent'>
                <Picker.Item label="Billig" value="Billig" />
                <Picker.Item label="Stort" value="Stort" />
                <Picker.Item label="Felles areal" value="Felles areal" />
                <Picker.Item label="inkludert internett" value="Inkludert internett" />
                <Picker.Item label="Sosialt" value="Sosialt" />
              </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <Text>{this.state.keywords.map((item) => item + ", ")}</Text>
          
    
              
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="url"
              underlineColorAndroid='transparent'
              onChangeText = {this.handleUrl}
              />
        </View>
        

        <View style={styles.DescriptionContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.descriptionInputs}
              placeholder="Beskrivelse"
              multiline = {true}
              numberOfLines = {20}
              underlineColorAndroid='transparent'
              onChangeText={(description) => this.handleDescription(description)}
              />
        </View>

            <AddAddress screenName="Map" address = {this.state.address} city = {this.state.city} description = {this.state.description} hybelUrl = {this.state.url}/>

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
  },
  DescriptionContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:"60%",
    height:"40%",
},
descriptionInputs:{
  height:"10%",
  marginLeft:16,
  borderBottomColor: '#FFFFFF',
},
});