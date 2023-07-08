import {StyleSheet} from 'react-native';
import {COLOR} from '../../core/enum/color';
import { coreStyle } from '../../core/style/coreStyle';

export const homeStyles = StyleSheet.create({
    landingScreen : {
        container: {
            width: "100%",
            height: "auto",
            padding:10
        },
        appLogoArea: {
            width:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems: "center",
            marginTop:25,
            marginBottom:30
        },
        appLogoSize:{
            height:60,
            width:60
        },
        landingImageArea:{
            width: '100%',
            height: 260,
            marginBottom:30
        },
        landingImage:{
            flex: 1,
            width: undefined,
            height: undefined,
            resizeMode: 'cover'
        },
        welcomeMessageArea:{
            width: '100%',
            display:"flex",
            alignItems:"center",
            marginBottom:20
        },
        welcomeMessageTitle:{
            fontSize:20,
            color:"#000",
            marginBottom:8,
            fontWeight:"bold"
        },
        welcomeMessageContent:{
            fontSize:13,
            color:"#757575"
        },
        signInArea:{
            marginTop:15,
            display:"flex",
            flexDirection:"row",
            justifyContent:"center"
        },
        signInAreaContent:{
            color:"#757575"
        },
        signInButton:{
            marginLeft:10,
            color:"#A60CFF"
        },

        gettingStartButton:{
            width:"100%",
            height:50,
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            color:"#fff",
            backgroundColor:"#A60CFF",
            borderRadius: 5
        },
        gettingStartButtonFont:{
            color:"#fff"
        },
    },
    homeScreen:{
        container:{
            flex: 1,
            backgroundColor: "#F6F9FF"
        },
        homeHeaderSection:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            padding:20
        },
        greetingSection:{
            display:'flex'
        },
        greetingUser:{
            color:"#777777",
            fontSize:15,
            fontWeight:"500",
            marginBottom:15,
            marginTop:15
        },
        greetingMessage:{
            color:"#000",
            fontWeight:"bold",
            fontSize:28,
            lineHeight:38
        },
        profileSection:{
            height:45,
            width:45,
            borderRadius:10,
            marginTop:15,
            marginRight:7,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
        },
        profileImage:{
            height:'100%',
            width:'100%',
            borderRadius:10
        },
        searchBox:{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            height: 50,
            borderRadius: 10,
            margin:20,
            shadowColor: "#b8b8b8",
            shadowOffset: {
              width: 0,
              height: 18,
            },
            shadowOpacity:  0.25,
            shadowRadius: 20.00,
            elevation: 18
        }
        ,
        searchIcon:{
            padding: 10,
            margin: 5,
            height:15,
            width: 15,
            resizeMode: 'stretch',
            alignItems: 'center',
            marginLeft:15,
            tintColor:"#bcbcbc"
        },
        searchInput:{
            flex: 1,
            color:"#000"
        },
        sectionTitleBox:{
            paddingLeft:20,
            paddingRight:20
        },
        sectionTitleText:{
            color: "#262626",
            fontSize:17,
            fontWeight:"700"
        },
        hospitalListBox:{
            padding:20
        }
    } 
});