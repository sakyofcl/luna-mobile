import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { pharmacistStyles } from '../style.pharmacist';
import { PharmacistForm } from '../components/pharmacist.form';

export const ManagePharmacist = (props)=>{
    const managePharmacistStyle = pharmacistStyles.managePharmacist;

    return (
        <ScrollView style={managePharmacistStyle.container}>
            <View style={managePharmacistStyle.titleWithAction}>
                <Text style={managePharmacistStyle.titleLabel}>Add Pharmacist</Text>
                <View style={managePharmacistStyle.removeButtonWrapper}>
                    <TouchableOpacity style={managePharmacistStyle.removeButton}> 
                        <Text style={managePharmacistStyle.removeButtonFont}>
                            REMOVE
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={managePharmacistStyle.formContainer}>
                <PharmacistForm/>
            </View>
        </ScrollView>
    );
};