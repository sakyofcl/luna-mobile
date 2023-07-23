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
        height:"100%",
        flex:1
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
    },
    floatItemCard:{
        floatCardWrapper:{
            width:"100%",
            backgroundColor: "#FFF",
        },
        floatCardItem:{
            backgroundColor: "#fff",
            width:"100%",
            flexDirection:'row',
            alignItems:'center',
            padding:10,
            paddingTop:15,
            paddingBottom:15,
            justifyContent:'space-between',
            borderBottomWidth:1,
            borderColor:"#dbdbdb"
        },
        floatCardContentWrapper:{
            height:'100%',
            width:'auto'
        },
        floatCardArrowIcon:{
            height:20,
            width:20,
            tintColor:"#2d2d2d",
        },
        title:{
            color: "#000",
            fontSize:17,
            marginBottom:2,
            fontWeight:'400'
        },
        subTitle:{
            color: "#686868",
            fontSize:13,
            fontWeight:'400'
        },
    },
    Loading:{
        container:{
            /*
            textAlign: 'center',
            maxHeight: 20,
            lineHeight: 0,
            background: '#e4e4e4',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: -6
            */
            flex:1
        },
        loaderAnimation:{
            flex:1,
            width:"100%",
            height:"100%",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:'#000',
        } 
    },
    formStyle:{
        textInput:{
            borderRadius: 5,
            marginBottom: 5,
            padding:10,
            color:"#000",
            backgroundColor:'#fff',
            borderWidth: 1,
            borderColor: '#dddddd',
            width:'100%'
        },
        formGroup:{
            padding:10,
            backgroundColor: "#fff",
            height:'auto'
        },
        formErrorMessage:{
            color:COLOR.danger,
            fontSize:13
        },
        formLabel:{
            color: '#000',
            fontSize:14,
            marginBottom:10
        },
        formActionButton:{
            flexDirection:'row',
            justifyContent:'flex-end',
            padding:5
        },
        saveButtonWrapper:{
            width:'auto',
            height:'auto',
            backgroundColor: "#F6F9FF",
            marginRight:5
        },
        saveButton:{
            height:50,
            width:"auto",
            backgroundColor: COLOR.brandColor,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10,
            flexDirection:'row',
            paddingLeft:15,
            paddingRight:15
        },
        saveButtonFont:{
            color:"#fff",
            fontSize:15,
            fontWeight:"700"
        },
        formDropdown:{
            borderRadius: 5,
            marginBottom: 5,
            padding:10,
            color:"#000",
            backgroundColor:'#fff',
            borderWidth: 1,
            borderColor: '#dddddd',
            width:'100%'
        },
        dropDownContainer:{
            borderColor: '#dddddd',
            borderRadius: 5,
            backgroundColor: "#F6F9FF",
        },
        datePicker:{
            flexDirection:'row',
            borderRadius: 5,
            marginBottom: 5,
            padding:10,
            paddingTop:15,
            paddingBottom:15,
            color:"#000",
            backgroundColor:'#fff',
            borderWidth: 1,
            borderColor: '#dddddd',
            width:'100%',
            justifyContent:'space-between',
            alignItems:'center'
        },
        datePickerIcon:{
            height:20,
            width:20
        },
        datePickerText:{
            color:"#000",
            fontSize:14
        }
    },
    NotificationBox:{
        container:{
            margin:10,
            borderRadius:10,

            shadowColor: COLOR.brandColor,
            shadowOffset: {
                width: 0,
                height: 11,
            },
            shadowOpacity: 0.57,
            shadowRadius: 15.19,
            elevation: 23,
        }
    }
});