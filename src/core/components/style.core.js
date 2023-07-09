import { StyleSheet } from "react-native";
import {COLOR} from '../enum/color';
export const coreStyles = StyleSheet.create({
    bottomNav:{
        container:{
            height:60,
            width:"100%",
            backgroundColor:"#fff",
            display:"flex",
            flexDirection:"row",
            borderTopWidth: 1,
            borderColor: "#eaeaea"
        },
        navItem:{
            width:"25%",
            height:"100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }
        ,
        navItemIcon:{
            height:30,
            width:30
        },
        navItemActive:{
            backgroundColor:"#A60CFF"
        },
        navItemActiveIcon:{
            tintColor:"#A60CFF"
        }
    },
    bottomNavigation:{
        container:{
            height:60,
            width:"100%",
            backgroundColor: "#F6F9FF",
            display:"flex",
            flexDirection:"row",
            borderTopWidth:0.5,
            borderColor:COLOR.primaryBorder
        },
        navItem:{
            width:"25%",
            height:"100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        },
        navItemIcon:{
            height:18,
            width:18,
            marginBottom:4
        },
        navActiveIndicator:{
            width: 3,
            height: 3,
            borderRadius: 3 / 2,
            backgroundColor: COLOR.brandColor,
            marginTop:4
        },
        navItemLabel:{
            color:'#000',
            fontSize:13,
            fontWeight:'500',
            textTransform:"capitalize"
        }
    },
    appSafeArea:{
        backgroundColor: "#F6F9FF",
        height:"100%"
    },
    authenticatedLayout:{
        container:{
            flex:1,
            backgroundColor: "#F6F9FF",
        } 
    },
    radioButton:{
        img:{
            height:20,
            width: 20,
            tintColor: COLOR.brandColor
        },
        btn:{
            flexDirection: 'row'
        }
    },
    drawingBoard:{
        container:{
            width:'100%',
            height:'100%',
            backgroundColor: "#FFF",

            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
        }
    }
});