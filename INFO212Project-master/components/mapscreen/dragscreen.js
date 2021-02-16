import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from "react-native-reanimated"
const AnimatedView = Animated.View

const Dragscreen = ({ data }) => {

  const renderContent = () => (
    <AnimatedView
      style={{
        backgroundColor: 'white',
        padding: 15,
        paddingTop:0,
        height: "100%",
        display:"flex"
        
      }}
    > 
      <Text style = {{paddingBottom:"20%", textAlign:"center"}}>_____</Text>
      <AnimatedView style={{width: "90%", height: "30%", alignItems:"center", paddingBottom:"10%"}}>
        <Image style={{width: "100%", height: "100%", position:"relative", backgroundColor: '#333', borderRadius:10}} source={{uri: "https://" + data.image}} />
        
      </AnimatedView>

      <AnimatedView style={{paddingBottom:"5%"}}>
        <Text>addresse: {data.address}</Text>
        <Text>by: {data.city}</Text>
        <Text>informasjon: {data.description}</Text>
      </AnimatedView>

      <View style={{flexDirection:"row", alignItems:"center"}}>
        <Text style={{marginRight:"9%", marginLeft:"15%", padding:3, paddingLeft:6, borderWidth:2, borderRadius:5, borderColor:"#DEB887", color:"#DEB887"}}>Billig</Text>
        <Text style={styles.infoText}>Student</Text>
        <Text style={styles.infoText}>Felles areal</Text>
      </View>

      <View style={{flexDirection:"column", alignItems:"center"}}>
        
        <Image 
        source={{uri:"https://scontent.fsvg2-1.fna.fbcdn.net/v/t1.30497-1/s960x960/84628273_176159830277856_972693363922829312_n.jpg?_nc_cat=1&ccb=2&_nc_sid=12b3be&_nc_ohc=tHzppsgeLCYAX_WOyWJ&_nc_ht=scontent.fsvg2-1.fna&tp=7&oh=b5737142c9ec39c16d85132e3fc95bee&oe=5FC5443D"}}
        style={{height:"30%", width:"20%", backgroundColor: '#333', position:"relative", margin:"5%", borderRadius:100}}
        ></Image>
        <Text style={{marginBottom:"5%"}}>Ola Normann</Text>

        <TouchableHighlight style= {styles.buttonContainer}>
            <View >
              <Text>Knytt Kontakt</Text>
            </View>
        </TouchableHighlight>
      

      </View>

      
    </AnimatedView>
  );

  const sheetRef = React.useRef(null);
  return (
    <>
      
      <BottomSheet 
        ref={sheetRef}
        //snapPoints er hvor dragskjermen start så her vil den starte på 100%
        snapPoints={["13%", "92%", "13%"]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  )
}

const styles = StyleSheet.create({
  image:{
    height:"5%",
    width:"5%",
    position:"absolute"
  },
  buttonContainer: {
    paddingTop: 10,
    paddingBottom: 10,  
    borderRadius:30,
    backgroundColor:"#8A2BE2",
    justifyContent: 'center',
    alignItems: 'center',
    width:250,
  },
  infoText:{
    marginRight:"9%",  
    borderWidth:2, 
    borderRadius:5, 
    padding:3, 
    paddingLeft:6, 
    borderColor:"#DEB887", 
    color:"#DEB887"}
  
})

export default Dragscreen

