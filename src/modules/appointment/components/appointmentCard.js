import React from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";
import { appointmentStyles } from "../style.appointment";

export const AppointmentCard = ()=>{
    const appointmentCardStyle = appointmentStyles.appointmentCard;

    return (
        <View>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#cecece")}>
                <View style={appointmentCardStyle.container}>
                    <View style={appointmentCardStyle.QNBox}>
                        <Text style={appointmentCardStyle.QNBoxFont}>102</Text>
                    </View>
                    <View style={appointmentCardStyle.appointmentInfoBox}>
                        <Text style={appointmentCardStyle.patientName}>Mohamed Sakeen</Text>
                        <View style={appointmentCardStyle.patientInfo}>
                            <Text style={appointmentCardStyle.patientInfoGender}>Male</Text>
                            <Text style={appointmentCardStyle.patientInfoPriorityLabel}>Priority</Text>
                            <View style={appointmentCardStyle.PriorityStatus}/>
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