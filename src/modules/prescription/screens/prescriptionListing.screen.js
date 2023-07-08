import React from 'react';
import { ScrollView, View } from 'react-native';
import { PrescriptionCard } from '../components/prescriptionCard';
import { appointmentStyles } from '../style.appointment';

export const PrescriptionListing = (props)=>{
    const prescriptionListingStyle = appointmentStyles.prescriptionListing;

    return (
        <ScrollView style={prescriptionListingStyle.container}>
            <View style={prescriptionListingStyle.listContainer}>
                <View style={prescriptionListingStyle.listItem}>
                    <PrescriptionCard/>
                </View>
                <View style={prescriptionListingStyle.listItem}>
                    <PrescriptionCard/>
                </View>
                <View style={prescriptionListingStyle.listItem}>
                    <PrescriptionCard/>
                </View>
                <View style={prescriptionListingStyle.listItem}>
                    <PrescriptionCard/>
                </View>
                <View style={prescriptionListingStyle.listItem}>
                    <PrescriptionCard/>
                </View>
                <View style={prescriptionListingStyle.listItem}>
                    <PrescriptionCard/>
                </View>
                <View style={prescriptionListingStyle.listItem}>
                    <PrescriptionCard/>
                </View>
            </View>
        </ScrollView>
    );
};