import {StyleSheet} from 'react-native';

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
    } 
});