import {StyleSheet} from 'react-native';

export const patientStyles = StyleSheet.create({
    register : {
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
        registerInfoMessage:{
            width:"100%",
            display:"flex",
            alignItems:"center",
            marginBottom:35
        },
        registerInfoMessageTitle:{
            fontSize:20,
            color:"#000",
            marginBottom:8,
            fontWeight:"bold"
        },
        registerInfoMessageContent:{
            fontSize:13,
            color:"#757575"
        },
        registerForm:{
            marginTop:10
        },
        registerFormFeild:{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#dddddd',
            marginBottom: 15,
            padding:10,
            color:"#000"  
        },
        registerButton:{
            width:"100%",
            height:50,
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            color:"#fff",
            backgroundColor:"#A60CFF",
            borderRadius: 5
        },
        registerButtonFont:{
            color:"#fff"
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
        patientGenderArea:{
            marginBottom: 15,
            display:"flex",
            flexDirection:"row"
        },
        patientGenderLabel:{
            color:"#a0a0a0",
            marginLeft:10,
            marginRight:10
        }
    }
});