import React from 'react';
import { ScrollView } from 'react-native';
import { AppointmentCard } from '../components/appointmentCard';
import { appointmentStyles } from '../style.appointment';

export const AppointmentListing = ()=>{
    const appointmentListingStyle = appointmentStyles.appointmentListing;
    return (
        <ScrollView style={appointmentListingStyle.container}>
                <AppointmentCard/>
                <AppointmentCard/>
                <AppointmentCard/>
                <AppointmentCard/>
                <AppointmentCard/>
                <AppointmentCard/>
                <AppointmentCard/>
                <AppointmentCard/>
                <AppointmentCard/>
        </ScrollView>
    );
};