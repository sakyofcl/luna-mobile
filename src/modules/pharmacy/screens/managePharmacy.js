import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { pharmacyStyles } from '../style.pharmacy';
import { PharmacyForm } from '../components/pharmacy.form';

export const ManagePharmacy = (props)=>{
    const managePharmacyStyle = pharmacyStyles.managePharmacy;

    return (
        <ScrollView style={managePharmacyStyle.container}>
            <View style={managePharmacyStyle.titleWithAction}>
                <Text style={managePharmacyStyle.titleLabel}>Add Pharmacy</Text>
                <View style={managePharmacyStyle.removeButtonWrapper}>
                    <TouchableOpacity style={managePharmacyStyle.removeButton}> 
                        <Text style={managePharmacyStyle.removeButtonFont}>
                            REMOVE
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={managePharmacyStyle.formContainer}>
                <PharmacyForm/>
            </View>
        </ScrollView>
    );
};