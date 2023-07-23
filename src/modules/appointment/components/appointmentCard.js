import React from "react";
import { View, Text, TouchableNativeFeedback, Image } from "react-native";
import { appointmentStyles } from "../style.appointment";

export const AppointmentCard = (props)=>{
    const appointmentCardStyle = appointmentStyles.appointmentCard;
    const data = props.data;
    const gender = data.gender === 1 ? 'Male' : 'Female';
    const appointmentStatus = data.appointmentStatus === 1 ? 'Waiting' : 'Completed';

    return (
        <View>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#cedeff')}>
                <View style={appointmentCardStyle.container}>
                    <View style={appointmentCardStyle.patientProfileBox}>
                        <Image source={{uri: data.patientProfile}} style={appointmentCardStyle.patientProfile}/> 
                    </View>
                    <View style={appointmentCardStyle.appointmentInfoBox}>
                        <Text style={appointmentCardStyle.patientName}>{data.patientName}</Text>
                        <View style={appointmentCardStyle.patientInfo}>
                            <View style={appointmentCardStyle.PriorityStatus}/>
                            <View style={appointmentCardStyle.Dot} />
                            <Text style={appointmentCardStyle.QNumber}>QN-{data.appointmentNumber}</Text>
                            <View style={appointmentCardStyle.Dot} />
                            <Text style={appointmentCardStyle.patientInfoGender}>{gender}</Text>
                        </View>
                        <View style={appointmentCardStyle.appointmentStatusBox}>
                            <Text style={appointmentCardStyle.appointmentStatusWrapper}>
                                <Text style={appointmentCardStyle.appointmentStatusFont}>{appointmentStatus}</Text>
                            </Text>
                            <Text style={appointmentCardStyle.appointmentStatusTime}> 5:20</Text>
                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}