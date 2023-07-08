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
            height:50,
            width:"100%",
            backgroundColor: COLOR.primary,
            display:"flex",
            flexDirection:"row",
            borderTopWidth: 1,
            borderColor: COLOR.primaryBorder
        },
        navItem:{
            width:"25%",
            height:"100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        },
        navItemIcon:{
            height:20,
            width:20
        },
        navActiveIndicator:{
            width: 3,
            height: 3,
            borderRadius: 3 / 2,
            backgroundColor: COLOR.brandColor,
            marginTop:4
        }
    },
    appSafeArea:{
        backgroundColor:COLOR.primary,
        height:"100%"
    },
    authenticatedLayout:{
        container:{
            flex:1,
            backgroundColor:COLOR.primary
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
    }
});