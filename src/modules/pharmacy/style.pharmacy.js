import { StyleSheet } from "react-native";
import {COLOR} from '../../core/enum/color';

export const pharmacyStyles = StyleSheet.create({
    pharmacyCard: {
        container: {
            width: "100%",
            height: "auto",
            display: 'flex',
            backgroundColor: "#FFF",
            flexDirection: 'row',
            padding:10,
            borderRadius: 15
        },
        appointmentInfoBox:{
            paddingLeft:10,
            width:"80%",
        },    
        patientName:{
            color:COLOR.onPrimary,
            fontWeight:"600",
            fontSize:16,
            marginBottom: 3
        },
        patientInfo:{
            display: 'flex',
            flexDirection: 'row',
            alignItems : "center",
            marginBottom: 7
        },
        patientInfoGender:{
            color: "#777777",
            fontSize:13,
        },
        QNumber:{
            color: "#777777",
            fontSize:13,
        },
        patientInfoPriorityLabel:{
            color:COLOR.onPrimaryLight,
        },
        appointmentStatusBox:{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        PriorityStatus:{
            backgroundColor:COLOR.info,
            height:10,
            width:10,
            borderRadius:50,
            marginTop:2
        },
        appointmentStatus:{
            color:"#000",
        },
        appointmentStatusWrapper:{
            backgroundColor:COLOR.success,
            borderRadius:5,
            padding: 2,
            paddingLeft:10,
            paddingRight:10,
            display: 'flex',
            justifyContent: 'center',
            alignItems : "center",
        },
        appointmentStatusFont:{
            color:"#FFF",
        },
        appointmentStatusTime:{
            color:"#777777",
            fontSize:13
        },
        Dot:{
            height:3,
            width:3,
            borderRadius:50,
            backgroundColor:"#000",
            marginLeft:5,
            marginRight:5
        },
        viewButton:{
            width:"20%",
            justifyContent:"center",
            alignItems:'center'
        },
        viewButtonIcon:{
            tintColor: COLOR.brandColor,
            height:25,
            width:25
        },
        totalBooking:{
            width:'auto',
            height:'auto',
            flexDirection:'row',
            alignItems:'center',
            marginLeft:5
        },
        totalBookingIcon:{
            width:13,
            height:13,
            tintColor:  "#777777",
            marginRight: 3
        },
        totalBookingValue:{
            color:  "#777777",
            fontSize:13
        },
    },
    pharmacyListing: {
        container: {
            flex: 1,
            backgroundColor: "#F6F9FF",
            padding:10
        },
        listContainer:{
            backgroundColor: "#F6F9FF",
            padding:15,
            height:'100%'
        },
        listItem:{
            width:'100%',
            height:'auto',
            marginBottom:20,
            backgroundColor: "#F6F9FF",
            borderRadius:15,

            shadowColor: COLOR.brandColor,
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: 24
        }
    }
});