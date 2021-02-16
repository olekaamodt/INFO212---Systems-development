import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const {height, width} = Dimensions.get("window")

//sender profilebildet og bilde til vennen du trykker på til chat skermen , så riktg
//bildet popper opp i chatten
function GoToChatOrProfile({ screenName, friends, profileImage }) {
  const navigation = useNavigation();
  
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(screenName.split(",")[0],
        // sender friends.image og friends.name til chat skjermen,
        // så navnet og bildet til personen du trykker på vises i chatten
        { profileImage: profileImage ,
          image: friends.image,
          name:friends.username})}>
      <View style={styles.box}>

        <Image style={styles.image} source={{uri: friends.image}}/>
        <Text style={styles.username}>{friends.username + "," + friends.age}</Text>

      </View>
    </TouchableOpacity>


    {/*legger til button some tar deg til vennen sin profil*/ }
    <TouchableOpacity
    onPress={() => navigation.navigate(screenName.split(",")[1],
    // sender friends.image og friends.name til chat skjermen,
    // så navnet og bildet til personen du trykker på vises i chatten
    { image: friends.image,
      name:friends.username,
      age:friends.age,
      category:friends.category,
      description:friends.desc,
      gender:friends.gender})}>
      <View style={styles.box}>
        <Text style={styles.username}>se profil</Text>
      </View>
  </TouchableOpacity>
  </View>
  );
}

const PLACEHOLDER = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"

class Friends extends Component {

  constructor(props) {
    super(props);
    this.state = {
      friends: [
         {id:1, image: PLACEHOLDER, username:"Vetle", age:"22", category:"Work", desc:"hei jeg har nettop flyttet til bergen og ser etter noen kule folk å bo med", gender:"Mann"},
         {id:2, image: PLACEHOLDER, username:"Markus", age:"20", category:"student", desc:"nytilflyttet i bergen, liker gaming, programmering og generelt alt som har med data å gjøre", gender:"Mann"},
         {id:3, image: PLACEHOLDER, username:"Maia", age:"25", category:"Work", desc:"skriv description i friends.js", gender:"Kvinne"},
         {id:4, image: PLACEHOLDER, username:"Simen", age:"19", category:"student", desc:"skriv description i friends.js", gender:"Mann"},
      ],
      profileImage : "https://bootdey.com/img/Content/avatar/avatar1.png",
      firstName: "Helge",
      latname: "Bjørnson"
      
    };
  }

  render() {
      
    return (
      <View style={styles.container}>
          

          <View style={styles.body}>
            <FlatList 
              style={styles.container} 
              enableEmptySections={true}
              data={this.state.friends}
              keyExtractor= {(item) => {
                return item.id;
              }}
              renderItem={({item}) => {
                return (
                  <GoToChatOrProfile screenName = "Chat,ProfileFriendScreen"
                  friends= {item}
                  profileImage = {this.state.profileImage} />
                )
            }}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:"100%",
    width:"100%"
  },
  header:{
    backgroundColor: "#20B2AA",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    marginBottom:10,
  },
  image:{
    width: 60,
    height: 60,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body: {
    padding:30,
    backgroundColor :"#E6E6FA",
  },
  box: {
    padding:5,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
  username:{
    color: "#20B2AA",
    fontSize:22,
    alignSelf:'center',
    marginLeft:10
  }
});



export default Friends
