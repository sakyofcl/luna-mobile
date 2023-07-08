import { StyleSheet } from "react-native";
import {COLOR} from '../../core/enum/color';

export const appointmentStyles = StyleSheet.create({
    appointmentCard: {
        container: {
            width: "100%",
            height: "auto",
            borderBottomWidth: 1,
            borderColor: COLOR.primaryBorder,
            display: 'flex',
            backgroundColor: COLOR.primary,
            flexDirection: 'row',
            padding:10
        },
        QNBox:{
            width:80,
            height:80,
            borderRadius:50,
            backgroundColor:COLOR.primaryLight,
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        },
        QNBoxFont:{
            color: COLOR.onPrimary,
            fontWeight:"bold",
            fontSize:18
        },
        appointmentInfoBox:{
            paddingLeft:10
        },    
        patientName:{
            color:COLOR.onPrimary,
            fontWeight:"500",
            fontSize:18,
            marginBottom: 3
        },
        patientInfo:{
            display: 'flex',
            flexDirection: 'row',
            alignItems : "center",
            marginBottom: 7
        },
        patientInfoGender:{
            color:COLOR.onPrimaryLight,
            marginRight: 5
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
            marginLeft:5,
            borderRadius:50,
            marginTop:2
        },
        appointmentStatus:{
            color:"#000",
        },
        appointmentStatusWrapper:{
            backgroundColor:COLOR.primaryLight,
            borderRadius:5,
            padding: 2,
            paddingLeft:10,
            paddingRight:10,
            display: 'flex',
            justifyContent: 'center',
            alignItems : "center",
        },
        appointmentStatusFont:{
            color:"#00d326",
        },
        appointmentStatusTime:{
            color:COLOR.onPrimaryLight,
            marginLeft:5,
        }
    },
    appointmentListing: {
        container: {
            width: "100%",
            height: "auto"
        },
    }
});