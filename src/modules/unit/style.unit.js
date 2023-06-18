import { StyleSheet } from "react-native";
import { coreStyle } from "../../core/style/coreStyle";

export const unitStyles = StyleSheet.create({
    unitCard: {
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
        unitTitle: {
            color:"#000",
            fontWeight:"bold",
            fontSize:18,
            marginBottom:8
        },
        unitDescription:{
            marginBottom:8,
            textAlign:"justify",
            color:"#000"
        },
        unitDuration:{
            display:"flex",
            flexDirection:"row",
            marginBottom:8,
            
        },
        unitDurationTime:{
            marginRight: 10,
            color:"#000"
        },
        unitHospital:{
            marginBottom: 8,
            color:"#000"
        },
        unitTotalAppointment:{
            marginBottom: 15,
            color:"#000"
        },
        makeAppointmentStartButton:{
            width:"100%",
            height:50,
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            color:"#fff",
            backgroundColor:"#A60CFF",
            borderRadius: 5
        },
        makeAppointmentStartFont:{
            color:"#fff",
            fontWeight:"500"
        },
    },
    unitListing: {
        container: {
            width: "100%",
            height: "auto",
            padding:15
        },
    }
});