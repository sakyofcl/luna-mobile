import React from 'react';
import { View } from 'react-native';
import { AppointmentCard } from '../components/appointmentCard';
import { appointmentStyles } from '../style.appointment';

export const AppointmentListing = ()=>{
    const appointmentListingStyle = appointmentStyles.appointmentListing;
    return (
        <View style={appointmentListingStyle.container}>
            <AppointmentCard/>
            <AppointmentCard/>
            <AppointmentCard/>
            <AppointmentCard/>
            <AppointmentCard/>
            <AppointmentCard/>
            <AppointmentCard/>
            <AppointmentCard/>
            <AppointmentCard/>
        </View>
    );
};