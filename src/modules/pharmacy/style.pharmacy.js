import { StyleSheet } from "react-native";
import {COLOR} from '../../core/enum/color';

export const pharmacyStyles = StyleSheet.create({
    pharmacyCard: {
        container: {
            width: "100%",
            height: "auto",
            padding:15,
            borderBottomWidth: 1,
            borderColor: COLOR.primaryBorder,
            borderRadius: 5,
            display: 'flex',
            backgroundColor: COLOR.primary,
            marginBottom:10,
        },
        statusIndicator:{
            width: 15,
            height: 15,
            borderRadius: 50,
            backgroundColor: COLOR.info,
        },
        statusIndicatorWrapper:{
            marginBottom:5,
            alignItems:'flex-end',
            width:"100%",
            height:"auto"
        },
        pharmacyTitle: {
            color:COLOR.onPrimary,
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
            color:COLOR.onPrimaryLight
        },
        pharmacyHospital:{
            marginBottom: 8,
            color:COLOR.onPrimaryLight
        },
        pharmacyTotalPrescription:{
            marginBottom: 15,
            color:COLOR.onPrimaryLight
        },
        viewPrescriptionButton:{
            width:"100%",
            height:50,
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            color:COLOR.brandColor,
            backgroundColor:COLOR.primaryLight,
            borderRadius: 5
        },
        viewPrescriptionButtonFont:{
            color:COLOR.brandColor,
            fontWeight:"500"
        },
    },
    pharmacyListing: {
        container: {
            width: "100%",
            height: "auto",
            padding:15,
            backgroundColor:COLOR.primary
        },
    }
});