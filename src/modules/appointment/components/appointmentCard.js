import React from "react";
import { View, Text, TouchableNativeFeedback, Image } from "react-native";
import { appointmentStyles } from "../style.appointment";
import PatientProfile from '../../../assets/image/profile.jpg';

export const AppointmentCard = (props)=>{
    const appointmentCardStyle = appointmentStyles.appointmentCard;

    return (
        <View>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#cedeff')}>
                <View style={appointmentCardStyle.container}>
                    <View style={appointmentCardStyle.patientProfileBox}>
                        <Image source={PatientProfile} style={appointmentCardStyle.patientProfile}/> 
                    </View>
                    <View style={appointmentCardStyle.appointmentInfoBox}>
                        <Text style={appointmentCardStyle.patientName}>Mohamed Sakeen</Text>
                        <View style={appointmentCardStyle.patientInfo}>
                            <View style={appointmentCardStyle.PriorityStatus}/>
                            <View style={appointmentCardStyle.Dot} />
                            <Text style={appointmentCardStyle.QNumber}>QN-1021</Text>
                            <View style={appointmentCardStyle.Dot} />
                            <Text style={appointmentCardStyle.patientInfoGender}>Male</Text>
                        </View>
                        <View style={appointmentCardStyle.appointmentStatusBox}>
                            <Text style={appointmentCardStyle.appointmentStatusWrapper}>
                                <Text style={appointmentCardStyle.appointmentStatusFont}>Waiting</Text>
                            </Text>
                            <Text style={appointmentCardStyle.appointmentStatusTime}> 5:20</Text>
                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}