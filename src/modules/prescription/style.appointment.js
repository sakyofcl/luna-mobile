import { StyleSheet } from "react-native";
import {COLOR} from '../../core/enum/color';

export const appointmentStyles = StyleSheet.create({
    prescriptionCard: {
        container: {
            width: "100%",
            height: "auto",
            display: 'flex',
            backgroundColor: "#fff",
            flexDirection: 'row',
            padding:10,
            borderRadius: 15
        },
        patientProfileBox:{
            width:50,
            height:50,
            borderRadius:50,
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        },
        patientProfile:{
            width:30,
            height:30,
        },
        appointmentInfoBox:{
            paddingLeft:10
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
            fontWeight:"600",
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
            backgroundColor:COLOR.warning,
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
            marginLeft:5,
        },
        Dot:{
            height:3,
            width:3,
            borderRadius:50,
            backgroundColor:"#000",
            marginLeft:5,
            marginRight:5
        },
        TextWithIconBox:{
            width:'auto',
            height:'auto',
            flexDirection:'row',
            alignItems:'center',
            marginRight:10
        },
        IconBox:{
            width:13,
            height:13,
            tintColor:  "#777777",
            marginRight: 3
        },
        TextValue:{
            color:  "#777777",
            fontSize:13
        },
    },
    prescriptionListing: {
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
    },
    viewPrescription:{
        container:{
            flex: 1,
            backgroundColor: "#F6F9FF"
        },
        listContainer:{
            backgroundColor: "#F6F9FF",
            padding:15
        },
        listItem:{
            width:'100%',
            height:'auto',
            marginBottom:0,
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
        prescriptionContainerWrapper:{
            padding:15
        },
        prescriptionViewer:{
            color:'#777777',
            fontSize:13,
            marginBottom:6
        },
        prescriptionContainer:{
            height:'auto',
            width:'100%',
            backgroundColor:"#FFF",
            padding:10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,
            elevation: 2,
        },
        pdfContainer:{
            width: '100%',
            height: 400,
            backgroundColor:"#F6F9FF",
            borderWidth:1,
            borderColor:'#000'
        },
        samplePrescription:{
            width: '100%',
            height: 400
        },
        actionButtonsBox:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            width:'100%',
            height:'auto',
            paddingTop:20,
            paddingBottom:20,
            backgroundColor:"#F6F9FF"
        },
        ButtonWithIconWrapper:{
            width:'30%',
            height:'auto',
            backgroundColor: "#F6F9FF",
            marginRight:5
        },
        ButtonWithIcon:{
            height:50,
            width:"100%",
            backgroundColor: COLOR.brandColor,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:15,
            flexDirection:'row',

            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: 24
        },
        ButtonFont:{
            color:"#fff",
            fontSize:15,
            fontWeight:"700"
        },
        ButtonIcon:{
            width:20,
            height:20,
            tintColor: "#fff",
            marginRight:5
        },
        LineBreak:{
            height:1,
            width:'100%',
            backgroundColor:"#e0e0e0",
            marginTop:5,
            marginBottom:5
        },
        LineBreakWrapper:{
            paddingLeft:20,
            paddingRight:20
        }
    }
});