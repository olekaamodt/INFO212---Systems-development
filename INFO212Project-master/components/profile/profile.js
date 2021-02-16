import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const facebookIMG = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"

const oldProfiles =  {old_friends:[
  {id:1, image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Vetle", age:"22", category:"Work", desc:"skriv description i friends.js", gender:"Mann"},
  {id:2, image: "https://bootdey.com/img/Content/avatar/avatar2.png", username:"Markus", age:"20", category:"student", desc:"skriv description i friends.js", gender:"Mann"},
  {id:3, image: "https://bootdey.com/img/Content/avatar/avatar3.png", username:"Maia", age:"25", category:"Work", desc:"skriv description i friends.js", gender:"Kvinne"},
  {id:4, image: "https://bootdey.com/img/Content/avatar/avatar4.png", username:"Simen", age:"19", category:"student", desc:"skriv description i friends.js", gender:"Mann"},
]};

class ProfileView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: [
         {id:1, image: facebookIMG, username:"Vetle", age:"22", category:"Work", desc:"skriv description i friends.js", gender:"Mann"},
         {id:2, image: facebookIMG, username:"Markus", age:"20", category:"student", desc:"skriv description i friends.js", gender:"Mann"},
         {id:3, image: facebookIMG, username:"Maia", age:"25", category:"Work", desc:"skriv description i friends.js", gender:"Kvinne"},
         {id:4, image: facebookIMG, username:"Simen", age:"19", category:"student", desc:"skriv description i friends.js", gender:"Mann"},
      ],
      profileImage : facebookIMG,
      firstName: "Ole Kristian",
      lastname: "Aamodt"
      
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={{uri: this.state.profileImage}}/>
                <Text style={styles.name}>
                  {this.state.firstName + " " + this.state.lastname}
                </Text>
            </View>
          </View>

          <View style={styles.profileDetail}>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Kategori</Text>
              <Text style={styles.count}>Student</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Alder</Text>
              <Text style={styles.count}>23</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Kjønn</Text>
              <Text style={styles.count}>Mann</Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.description}>Hei jeg er en sprudlene og glad person som ser etter folk å bo med :D</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Rediger Profil</Text>  
              </TouchableOpacity> 
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%"
  },
  header:{
    backgroundColor: "#00CED1",
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
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  profileDetail:{
    alignSelf: 'center',
    marginTop:200,
    alignItems: 'center',
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff",
    borderRadius: 10
  },
  detailContent:{
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:20,
    color: "#00CED1"
  },
  count:{
    fontSize:18,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
    marginTop:40
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00CED1",
  },
  description:{
    fontSize:20,
    color: "#00CED1",
    marginTop:10,
    textAlign: 'center'
  },
});

export default ProfileView                                      