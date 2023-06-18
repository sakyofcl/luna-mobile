import { StyleSheet } from "react-native";
import { coreStyle } from "../../core/style/coreStyle";

export const pharmacyStyles = StyleSheet.create({
    pharmacyCard: {
        container: {
            width: "100%",
            height: "auto",
            padding:15,
            borderWidth: 1,
            borderColor: "#eaeaea",
            borderRadius: 5,
            display: 'flex',
            backgroundColor:"#fff",
            marginBottom:10,
            ...coreStyle.coreBoxShadow
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
    pharmacyListing: {
        container: {
            width: "100%",
            height: "auto",
            padding:15
        },
    }
});