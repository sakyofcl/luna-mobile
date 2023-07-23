import { StyleSheet } from "react-native";
import {COLOR} from '../../core/enum/color';

export const unitStyles = StyleSheet.create({
    unitCard: {
        container: {
            width: "100%",
            height: "auto",
            padding:15,
            borderColor: COLOR.primaryBorder,
            display: 'flex',
            backgroundColor: COLOR.primary,
            marginBottom:10,
            borderBottomWidth: 1,
        },
        statusIndicator:{
            width: 15,
            height: 15,
            borderRadius: 50,
            backgroundColor: COLOR.success,
        },
        statusIndicatorWrapper:{
            marginBottom:5,
            alignItems:'flex-end',
            width:"100%",
            height:"auto"
        },
        unitTitle: {
            color:COLOR.onPrimary,
            fontWeight:"bold",
            fontSize:20,
            marginBottom:8,
            fontFamily: "Roboto,Arial,sans-serif"
        },
        unitDescription:{
            marginBottom:8,
            textAlign:"justify",
            color:COLOR.onPrimaryLight,
            fontFamily: "Roboto,Arial,sans-serif"
        },
        unitDuration:{
            display:"flex",
            flexDirection:"row",
            marginBottom:8,
            fontFamily: "Roboto,Arial,sans-serif"
        },
        unitDurationTime:{
            marginRight: 10,
            color:COLOR.onPrimaryLight,
            fontFamily: "Roboto,Arial,sans-serif"
        },
        unitHospital:{
            marginBottom: 8,
            color:COLOR.onPrimaryLight
        },
        unitTotalAppointment:{
            marginBottom: 15,
            color:COLOR.onPrimaryLight
        },
        makeAppointmentStartButton:{
            width:"100%",
            height:50,
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            color:COLOR.onPrimary,
            backgroundColor:COLOR.primaryLight,
            borderRadius: 5
        },
        makeAppointmentStartFont:{
            color:COLOR.brandColor,
            fontWeight:"500"
        },
    },
    unitCardNew:{
        container: {
            width: "100%",
            height: "auto",
            padding:15,
            display: 'flex',
            backgroundColor: '#FFF',
            borderRadius: 15
        },
        unitOpenCloseTime:{
            color:"#777777",
            fontSize:13,
            fontWeight:'500',
            marginBottom: 7
        },
        unitName:{
            color:"#000",
            fontSize:17,
            fontWeight:"600",
            marginRight: 10,
            marginBottom: 5
        },
        totalBooking:{
            width:'auto',
            height:'auto',
            flexDirection:'row',
            alignItems:'center',
            marginRight: 10
        },
        totalBookingIcon:{
            width:13,
            height:13,
            tintColor: COLOR.brandColor,
            marginRight: 3
        },
        totalBookingValue:{
            color: COLOR.brandColor,
            fontSize:12,
            fontWeight:"700"
        },
        ActionAndStatusBox:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginBottom:10
        },
        StatusBox:{
            flexDirection:'row',
            alignItems:'center',
            borderRadius:5,
            paddingTop:2,
            paddingBottom:2,
            paddingLeft:8,
            paddingRight:8
        },
        StatusBoxText:{
            color: "#FFF",
            fontSize:10,
            fontWeight:"700"
        },

    },
    unitListing: {
        container: {
            backgroundColor: "#F6F9FF",
            flex: 1
        },
        unitListContainer:{
            backgroundColor: "#F6F9FF",
            padding:15,
            height:'100%'
        },
        unitListItem:{
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
        },
        hospitalName:{
            color:"#000",
            fontSize:17,
            fontWeight:"600",
            marginBottom: 20
        }
    },
    consultingUnitFloatListing:{
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
    unitForm:{
        container: {
            flex: 1,
            backgroundColor: "#fff",
            paddingBottom:20,
        },
    },

    manageUnit:{
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