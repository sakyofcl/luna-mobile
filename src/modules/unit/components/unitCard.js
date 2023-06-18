import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { unitStyles } from "../style.unit";

export const UnitCard = ()=>{
    const unitCardStyle = unitStyles.unitCard;
    
    return (
        <View style={unitCardStyle.container}>

            <View style={unitCardStyle.statusIndicatorWrapper}>
                <View style={unitCardStyle.statusIndicator}/>
            </View>
            <Text style={unitCardStyle.unitTitle}>Eye Checkup Unit</Text>
            <Text style={unitCardStyle.unitDescription}>An eye checkup unit is a specialized facility or department within a healthcare setting that focuses on providing comprehensive eye examinations and diagnostic tests to assess the health and visual acuity of the eyes.</Text>
            <View style={unitCardStyle.unitDuration}>
                <Text style={unitCardStyle.unitDurationTime}>⌚ 09.00 AM</Text>
                <Text style={unitCardStyle.unitDurationTime}>to</Text>
                <Text style={unitCardStyle.unitDurationTime}>05.00 PM</Text>
            </View>
            <Text style={unitCardStyle.unitHospital}>📍 AMH Hospital Kalmunai GH</Text>
            <Text style={unitCardStyle.unitTotalAppointment}>🤒 Today 10 appointments</Text>
            <TouchableOpacity style={unitCardStyle.makeAppointmentStartButton}> 
                <Text style={unitCardStyle.makeAppointmentStartFont}>
                    Make Appointment
                </Text>
            </TouchableOpacity>
            
        </View>
    );
}