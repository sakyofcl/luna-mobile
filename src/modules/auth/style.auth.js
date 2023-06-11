import {StyleSheet} from 'react-native';

export const authStyles = StyleSheet.create({
    login : {
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
            marginBottom:35
        },
        appLogoSize:{
            height:80,
            width:80
        },
        loginInfoMessage:{
            width:"100%",
            display:"flex",
            alignItems:"center",
            marginBottom:35
        },
        loginInfoMessageTitle:{
            fontSize:20,
            color:"#000",
            marginBottom:8,
            fontWeight:"bold"
        },
        loginInfoMessageContent:{
            fontSize:13,
            color:"#757575"
        },
        loginForm:{
            marginTop:10
        },
        loginFormFeild:{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#dddddd',
            marginBottom: 15,
            padding:10,
            color:"#000"  
        },
        forgotPasswordArea:{
            display: "flex",
            alignItems: "flex-end",
            marginBottom:30
        },
        forgotPasswordAreaText:{
            fontSize:13,
            color:"#212121"
        },
        loginButton:{
            width:"100%",
            height:50,
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            color:"#fff",
            backgroundColor:"#A60CFF",
            borderRadius: 5
        },
        loginButtonFont:{
            color:"#fff"
        },
        signUpArea:{
            marginTop:15,
            display:"flex",
            flexDirection:"row",
            justifyContent:"center"
        },
        signUpAreaContent:{
            color:"#757575"
        },
        signUpButton:{
            marginLeft:10,
            color:"#A60CFF"
        }
    }
});