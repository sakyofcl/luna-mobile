import { StyleSheet } from "react-native";

export const appointmentStyles = StyleSheet.create({
    appointmentCard: {
        container: {
            width: "100%",
            height: "auto",
            borderBottomWidth: 1,
            borderColor: "#eaeaea",
            display: 'flex',
            backgroundColor:"#fff",
            flexDirection: 'row',
            padding:10
        },
        QNBox:{
            width:80,
            height:80,
            borderRadius:50,
            backgroundColor:'#e2e2e2',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        },
        QNBoxFont:{
            color:"#000",
            fontWeight:"bold",
            fontSize:18
        },
        appointmentInfoBox:{
            paddingLeft:10
        },    
        patientName:{
            color:"#000",
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
            color:"#000",
            marginRight: 5
        },
        patientInfoPriorityLabel:{
            color:"#000",
        },
        appointmentStatusBox:{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        PriorityStatus:{
            backgroundColor:"#c4c4c4",
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
            backgroundColor:"#f2f2f2",
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
            color:"#000",
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