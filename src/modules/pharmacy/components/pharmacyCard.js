import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { pharmacyStyles } from "../style.pharmacy";

export const PharmacyCard = ()=>{
    const pharmacyCardStyle = pharmacyStyles.pharmacyCard;
    
    return (
        <View style={pharmacyCardStyle.container}>
            <View style={pharmacyCardStyle.statusIndicatorWrapper}>
                <View style={pharmacyCardStyle.statusIndicator}/>
            </View>
            <Text style={pharmacyCardStyle.pharmacyTitle}>Eye Checkup Unit</Text>
            <View style={pharmacyCardStyle.pharmacyDuration}>
                <Text style={pharmacyCardStyle.pharmacyDurationTime}>⌚ 09.00 AM</Text>
                <Text style={pharmacyCardStyle.pharmacyDurationTime}>to</Text>
                <Text style={pharmacyCardStyle.pharmacyDurationTime}>05.00 PM</Text>
            </View>
            <Text style={pharmacyCardStyle.pharmacyHospital}>📍 AMH Hospital Kalmunai GH</Text>
            <Text style={pharmacyCardStyle.pharmacyTotalPrescription}>💊 Not Collected Prescriptions 10</Text>
            <TouchableOpacity style={pharmacyCardStyle.viewPrescriptionButton}> 
                <Text style={pharmacyCardStyle.viewPrescriptionButtonFont}>
                    View Prescriptions
                </Text>
            </TouchableOpacity>
            
        </View>
    );
}