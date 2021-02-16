class Friends extends Component {

    constructor(props) {
      super(props);
      this.state = {
        friends: [
           {id:1, image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Vetle", age:"22", category:"Work", desc:"skriv description i friends.js", gender:"Mann"},
           {id:2, image: "https://bootdey.com/img/Content/avatar/avatar2.png", username:"Markus", age:"20", category:"student", desc:"skriv description i friends.js", gender:"Mann"},
           {id:3, image: "https://bootdey.com/img/Content/avatar/avatar3.png", username:"Maia", age:"25", category:"Work", desc:"skriv description i friends.js", gender:"Kvinne"},
           {id:4, image: "https://bootdey.com/img/Content/avatar/avatar4.png", username:"Simen", age:"19", category:"student", desc:"skriv description i friends.js", gender:"Mann"},
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
