import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

class ProfileFriendView extends Component {
  constructor(props){
    super(props)
    this.state = {
        image: this.props.image,
        name: this.props.name,
        age: this.props.age,
        category: this.props.category,
        description:this.props.description,
        gender:this.props.gender,
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={{uri: this.state.image}}/>
                <Text style={styles.name}>
                  {this.props.name}
                </Text>
            </View>
          </View>

          <View style={styles.profileDetail}>
            <View style={styles.detailContent}>
                <Text style={styles.title}>Kategori</Text>
                <Text style={styles.count}>{this.state.category}</Text>
            </View>
            <View style={styles.detailContent}>
                <Text style={styles.title}>Alder</Text>
                <Text style={styles.count}>{this.state.age}</Text>
            </View>
            <View style={styles.detailContent}>
                <Text style={styles.title}>Kjønn</Text>
                <Text style={styles.count}>{this.state.gender}</Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>
            <Text style={styles.description}>{this.state.description}</Text>
               
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

export default ProfileFriendView    