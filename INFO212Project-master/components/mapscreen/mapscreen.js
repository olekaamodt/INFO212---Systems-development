import React, { Component } from 'react';
import MapView, { AnimatedRegion, Callout, Marker, Camera }  from 'react-native-maps';
import { StyleSheet, TextInput, Button, View, Text , Dimensions, FlatList, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ScreenDragger from "./dragscreen"
import { useNavigation } from '@react-navigation/native';



function CustomCallout({screenName, address}) {
  const navigation = useNavigation();

  return (
  <Callout tooltip
      onPress={() => navigation.navigate(screenName, {
      address:address.split(" ")[1] + " " + address.split(" ")[2],
      city:address.split(" ")[0]
  })}>
    <TouchableOpacity
              style = {styles.button}
              title={`${screenName}`}
              >
                    <View >
                      <Text style= {{padding: 5, fontSize:20}} >Opprett Annonse</Text>
                    </View>
                </TouchableOpacity>  
  </Callout>
  )

}



//gets the dimensions of the screen
const {width, height} = Dimensions.get("window")
const SCREEN_HEIGHT = height
const Screen_WIDTH = width
const ASPECT_RATION = width / height
const LATTITUDE_DELTA = 0.0922
const LONGTITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATION



class Map extends Component {
  //finner geolokasjonen til brukeren når brukeren åpner kartet
  constructor(props) {
    super(props);
    this.state = {
      showDragScreen: false,
      loaded: false,
      address:"",
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      }}
      this.watchID = null
      this.markers = [
        
      ]
      this.search = false
    };

    handleAddress = (text) => {
      this.state.address = text
      
    }


  async fetchLocations(){
    await fetch('localhost:3000/Addresses')
    .then(response => response.json())
    .then(locations => {
      this.setState({markers:locations})
      this.setState({loaded:true})
      })
    .catch( e => console.log(e))
  }

 

  componentDidMount() {
    this.fetchLocations();

    //får tak i nåværende posisjon
    navigator.geolocation.getCurrentPosition((position) => {
      //parser lattitude og longtitude koordinater 
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      //setter de nye koordinaene til å bli regionen som vises på kartet
      var initialRegion = {
        latitude:lat,
        longitude:long,
        latitudeDelta:LATTITUDE_DELTA,
        longitudeDelta:LONGTITUDE_DELTA
      }
      //setter den nye tilstanden til initialPosition som initalRegion objektet
      this.setState({ initialPosition:initialRegion })

    }, (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

    /*this.watchID = navigator.geolocation.watchPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var lastRegion = {
        latitude:lat,
        longitude:long,
        latitudeDelta:LATTITUDE_DELTA,
        longitudeDelta:LONGTITUDE_DELTA
      }

      this.setState({initialPosition:lastRegion})

    })*/
    }
    componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchID)
    }

    /*
    getCords = async (addressData) => {
      const split_address = addressData.split(" ")
      fetch("https://nominatim.openstreetmap.org/?addressdetails&q=" + split_address[1]  + "+" + split_address[0]+"&country=no&format=json")
      .then(response => response.json())
      .then(data => console.log(data))
      .then(this.markers.push(
        {
          coordinates : { 
            latitude:data.lat, 
            longitude:data.lon
          }, 
          address:addressData
        }))
      //logs the error of it does not find the data
      .catch(e => console.log(e));
    }
    */

    // Søke funksjon 
    mapSearch = async (searchVal) => {
      const split_address = searchVal.split(" ")
      for (var i=0; i < this.markers.length; i++)
      {
        if (this.markers[i].search == true)
        {this.markers.pop(i)}
      }
      
      fetch("https://nominatim.openstreetmap.org/search/?street=" + split_address[1] + "+" + split_address[2] +"&city=" + split_address[0] + "&country=no&format=json&addressdetails=1&limit=1")
      .then(response => response.json())
      .then(data => ( this.markers.push({
            coordinates : { 
              latitude: parseFloat(data[0].lat), 
              longitude: parseFloat(data[0].lon),
            }, 
            address:searchVal,
            search:true,
            pincolor:"#00FFFF",
            ref:this.setMarkerRef}), 
            this.search=true,
        this.setState({initialPosition: { 
        latitude: parseFloat(data[0].lat), 
        longitude: parseFloat(data[0].lon),
        latitudeDelta:LATTITUDE_DELTA,
        longitudeDelta:LONGTITUDE_DELTA} })))

      //logs the error of it does not find the data
      .catch(e => console.log(e));
    }

    //  workaround for å vise callouten til søk 
    setMarkerRef = (ref) => {
      this.marker = ref
      }

    renderCallout() {
      if (this.search == true) {
        this.marker.showCallout()
    }
}


    render() {
      if (this.state.loaded){
      return (
        <View style = {styles.container}>

          <View style = {styles.searchContainer}>
              {/* Søk formatert med <By> <adresse> <husnummer> 
              eksempel: "Bergen Furubakken 5" eller "Oslo Jernbanetorget 6" */}
            <TextInput style = {styles.SearchBar}  placeholder = {"Search..."} 
            onChangeText = {this.handleAddress}
            onSubmitEditing = {(event) => this.mapSearch(event.nativeEvent.text)} ></TextInput>
            
         
            </View>

          <MapView
          style = {styles.mapStyle}
          region = {this.state.initialPosition}
          onRegionChange = {() => this.renderCallout()}
          >
            
            {this.markers.map((item) => (

          <Marker
            key={"kukkern12"}
            coordinate={{latitude: item.coordinates.latitude, longitude: item.coordinates.longitude}}
            pinColor={item.pincolor}
            ref={item.ref}
          >
            {item.search == true &&
              <CustomCallout screenName="AdMaker" address = {item.address}/>
            }
          </Marker>
          ))}

          {this.state.markers.map((item) => (

          <Marker
            key={item.address}
            coordinate={{latitude: item.coordinates.latitude, longitude: item.coordinates.longitude}}
            pinColor={item.pincolor}
            ref={item.ref}
            onPress = {() => [this.setState({dragscreenData: item}), this.setState({showDragScreen:true})]}
            
          >
            
          </Marker>
          ))}

          </MapView>

          {this.state.showDragScreen&&<ScreenDragger data = {this.state.dragscreenData} />}
          
      </View>
      );
    }

    else {
      return (
      <View>
        <Text>Loading</Text>
      </View>
      )
    }
    }
  }





var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:"100%",
    width:"100%",
  },
  mapStyle: {
    width:"100%",
    height:"90%",
  },
  button: {
    backgroundColor: '#3498db',
    justifyContent: "center",
  },
  SearchBar: {
        borderWidth: 1,
        width: 200,
  },
  searchContainer: {
    flexDirection:"row"
  }
});



export default Map
