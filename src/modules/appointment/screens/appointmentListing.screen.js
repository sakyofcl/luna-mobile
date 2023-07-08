import React from 'react';
import { ScrollView, View } from 'react-native';
import { AppointmentCard } from '../components/appointmentCard';
import { appointmentStyles } from '../style.appointment';

export const AppointmentListing = (props)=>{
    const appointmentListingStyle = appointmentStyles.appointmentListing;

    return (
        <ScrollView style={appointmentListingStyle.container}>
            <View style={appointmentListingStyle.listContainer}>
                <View style={appointmentListingStyle.listItem}>
                    <AppointmentCard/>
                </View>
                <View style={appointmentListingStyle.listItem}>
                    <AppointmentCard/>
                </View>
                <View style={appointmentListingStyle.listItem}>
                    <AppointmentCard/>
                </View>
                <View style={appointmentListingStyle.listItem}>
                    <AppointmentCard/>
                </View>
                <View style={appointmentListingStyle.listItem}>
                    <AppointmentCard/>
                </View>
            </View>
        </ScrollView>
    );
};