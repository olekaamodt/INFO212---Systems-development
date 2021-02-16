import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

class FriendSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchText:"",
            users:null,
            loaded:false,
        }
    }

    handleSearch = (text) => {
        console.log(text)
        this.setState({searchText : text})
    }

    getUserData = () => {
        fetch('localhost:3000/Users')
        .then(res => res.json())
        .then(userData => {
            this.setState({users:userData})
            this.setState({loaded : true})
            })
        .catch( e => console.log(e));
    }

    componentDidMount(){
        this.getUserData()
        
        
    }

    filterList(list) {
        return list.filter(listItem => listItem.name.toLowerCase().includes(this.state.searchText.toLowerCase()));
      }

    render(){
        if (this.state.loaded){
        return(
            <View>
                <SearchBar
                    searchIcon={{ size: 24 }}
                    onChangeText={this.handleSearch}
                    placeholder="type here"
                    value={this.state.searchText}
                    onClear={this.handleSearch}
                    />
                
                
                {this.filterList(this.state.users).map((listItem, index) => (
                    
                    <Text key={index}>{listItem.name}</Text>

                ))}
                

                
            </View>
        )
    } else {
        return(<View>
            <Text>Loading</Text>
        </View>)
        }
    }
}

export default FriendSearch
