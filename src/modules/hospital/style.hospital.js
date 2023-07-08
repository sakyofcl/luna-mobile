import { StyleSheet } from "react-native";
import {COLOR} from '../../core/enum/color';

export const hospitalStyles = StyleSheet.create({
    hospitalCard: {
        container: {
            width: "50%",
            height: "auto",
            padding:15,
            borderWidth: 1,
            borderColor: COLOR.primaryBorder,
            display: 'flex',
            backgroundColor: COLOR.primary,
            marginBottom:10
        },
        statusIndicator:{
            width: 15,
            height: 15,
            borderRadius: 50,
            backgroundColor: "#26d300",
        },
        statusIndicatorWrapper:{
            marginBottom:5,
            alignItems:'flex-end',
            width:"100%",
            height:"auto"
        },
        pharmacyTitle: {
            color:"#000",
            fontWeight:"bold",
            fontSize:18,
            marginBottom:8
        },
        pharmacyDuration:{
            display:"flex",
            flexDirection:"row",
            marginBottom:8
        },
        pharmacyDurationTime:{
            marginRight: 10,
            color:"#000"
        },
        pharmacyHospital:{
            marginBottom: 8,
            color:"#000"
        },
        pharmacyTotalPrescription:{
            marginBottom: 15,
            color:"#000"
        },
        viewPrescriptionButton:{
            width:"100%",
            height:50,
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            color:"#fff",
            backgroundColor:"#A60CFF",
            borderRadius: 5
        },
        viewPrescriptionButtonFont:{
            color:"#fff",
            fontWeight:"500"
        },
    },
    hospitalFloatCard:{
        container:{
            backgroundColor:"#fff",
            borderRadius:10,
            height:"auto",
            width:'100%',
            padding:15,
            flexDirection:'row',
            marginBottom:15,

            shadowColor: "#81b3ff",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity:  0.20,
            shadowRadius: 5.62,
            elevation: 7
        },

        hospitalImage:{
            borderRadius:10,
            height:100,
            width:100 
        },
        info:{  
            paddingLeft:12
        },
        infoIcon:{
            height:13,
            width:13,
            tintColor:COLOR.brandColor
        },
        infoName:{
            marginLeft:7,
            color:"#777777",
            flex: 1,
            flexWrap: 'wrap',
            fontSize:13
        },
        hospitalName:{
            color:"#000",
            fontWeight:'700',
            fontSize:15,
            marginBottom:10
        },
        infoWithIcon:{
            flexDirection:'row',
            alignItems:'center',
            marginBottom:5
        },
        infoLine:{
            height:1,
            width:'100%',
            backgroundColor:"#e0e0e0",
            marginTop:5,
            marginBottom:5
        }
    },
    viewHospital:{
        container:{
            flex: 1,
            backgroundColor: "#F6F9FF"
        },
        imageBox:{
            width:'100%',
            height:300,
            backgroundColor: "#F6F9FF",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,

            shadowColor: "#0065fd",
            shadowOffset: {
              width: 0,
              height: 18,
            },
            shadowOpacity:  0.25,
            shadowRadius: 20.00,
            elevation: 24
        },

        imageEle:{
            width:'100%',
            height:'100%',
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
        },
        hospitalInfo:{
            marginTop:10,
            padding:20,
            paddingBottom:0
        },
        titleWithRating:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        },
        titleText:{
            color:"#000",
            fontSize:20,
            fontWeight:"600"
        },
        ratingBox:{
            flexDirection:'row',
            alignItems:'center',
            backgroundColor: '#c9defc',
            borderRadius:15,
            paddingTop:3,
            paddingBottom:3,
            paddingLeft:8,
            paddingRight:8
        },
        ratingIcon:{
            width:13,
            height:13,
            tintColor: "#143566",
            marginRight: 5
        },
        ratingValue:{
            color: "#143566",
            fontSize:13,
            fontWeight:"700"
        },
        hospitalAddress:{
            color:"#000",
            fontSize:15,
            marginBottom:15
        },
        description:{
            color:"#777777",
            fontSize:15,
            lineHeight:22
        },
        hospitalActionButtons:{
            flexDirection:'row',
            alignItems:'center',
            padding:20,
            width:'100%',
            height:'auto',
            backgroundColor: "#F6F9FF"
        },
        callButtonWrapper:{
            width:'20%',
            height:'auto',
            backgroundColor: "#F6F9FF"
        },
        bookNowButtonWrapper:{
            width:'80%',
            height:'auto',
            backgroundColor: "#F6F9FF",
        },
        callButton:{
            height:50,
            width:50,
            backgroundColor:"#fff",
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:15,

            shadowColor: "#0065fd",
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: 24,
        },
        callButtonIcon:{
            width:25,
            height:25,
            tintColor: COLOR.brandColor
        },
        bookNowButton:{
            height:50,
            width:"100%",
            backgroundColor: COLOR.brandColor,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:15,

            shadowColor: "#0065fd",
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: 24,
        },
        bookNowButtonFont:{
            color:"#fff",
            fontSize:15,
            fontWeight:"700"
        },
        hospitalInfoLine:{
            height:1,
            width:'100%',
            backgroundColor:"#e0e0e0",
            marginTop:5,
            marginBottom:5
        },
        hospitalInfoLineWrapper:{
            paddingLeft:20,
            paddingRight:20
        },
        hospitalUnits:{
            padding:20,
            width:'100%',
            height:'auto',
            backgroundColor: "#F6F9FF"
        },
        unitTitle:{
            color:"#000",
            fontSize:18,
            fontWeight:"600",
            marginBottom:10
        },
        hospitalSummery:{
            flexDirection:'row',
            alignItems:'center',
            paddingTop:5,
            paddingBottom:10,
            width:'100%',
            height:'auto',
            backgroundColor: "#F6F9FF",
            marginBottom:10
        },
        summeryIconWithText:{
            width:'auto',
            height:'auto',
            flexDirection:'row',
            alignItems:'center',
            backgroundColor: "#F6F9FF",
            marginRight: 10
        },
        summeryIcon:{
            width:13,
            height:13,
            tintColor: "#e29700",
            marginRight: 3
        },
        summeryText:{
            color: "#777777",
            fontSize:12,
            fontWeight:"700"
        },
        unitListContainer:{
            flexDirection:'row',
            flexWrap:'wrap'
        },
        unitListItem:{
            width:'50%',
            height:'auto',
            padding: 5
        }
    },
    pharmacyListing: {
        container: {
            width: "100%",
            height: "auto",
            padding:15
        },
    }
});