import { StyleSheet } from "react-native";
import {COLOR} from '../../core/enum/color';

export const doctorStyles = StyleSheet.create({
    doctorFloatListing:{
        container: {
            flex: 1,
            backgroundColor: "#F6F9FF",
            padding:10
        },
        floatList:{
            width:'100%',
            height:'auto',
            backgroundColor: "#fff",
        },
        floatListWrapper:{
            backgroundColor: "#fff",
            padding:10,
            paddingBottom:20
        },
        createButtonContainer:{
            flexDirection: 'row',
            justifyContent:'flex-end',
            backgroundColor: "#fff",
            padding:10
        },
        addButtonWrapper:{
            width:'auto',
            height:'auto',
            backgroundColor: "#FFF",
            marginRight:5
        },
        addButton:{
            height:40,
            width: 80,
            backgroundColor: COLOR.brandColor,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10,
            flexDirection:'row'
        },
        addButtonFont:{
            color:"#fff",
            fontSize:15,
            fontWeight:"700"
        },
    },
    doctorForm:{
        container: {
            flex: 1,
            backgroundColor: "#fff",
            paddingBottom:20,
        },
    },
    manageDoctor:{
        container: {
            flex: 1,
            backgroundColor: "#F6F9FF",
            padding:20,
        },
        titleWithAction:{
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems:'center',
            backgroundColor: "#fff",
            padding:10,
            paddingBottom:20,
            borderBottomWidth:1,
            borderColor:'#e0e0e0'
        },
        removeButtonWrapper:{
            width:'auto',
            height:'auto',
            backgroundColor: "#FFF",
            marginRight:5
        },
        removeButton:{
            height:40,
            width: 'auto',
            paddingLeft:20,
            paddingRight:20,
            backgroundColor: COLOR.danger,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10,
            flexDirection:'row'
        },
        removeButtonFont:{
            color:"#fff",
            fontSize:15,
            fontWeight:"700"
        },
        titleLabel:{
            color:"#000",
            fontSize:16,
            fontWeight:"700" 
        },
        formContainer:{
            paddingTop:15,
            backgroundColor: "#fff",
        }
    }
});