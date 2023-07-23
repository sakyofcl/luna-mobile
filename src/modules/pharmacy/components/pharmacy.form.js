import React from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import {DropDown} from '../../../core/components/dropDown';
import { pharmacyStyles } from '../style.pharmacy';
import { coreStyles } from '../../../core/components/style.core';
import DatePicker from '../../../core/components/datePicker';

export const PharmacyForm = (props)=>{
    const pharmacyFormStyle = pharmacyStyles.PharmacyForm;
    const formStyle = coreStyles.formStyle;

    return (
        <ScrollView style={pharmacyFormStyle.container}>

            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Pharmacy Name</Text>
                <TextInput style={formStyle.textInput}/>
                <Text style={formStyle.formErrorMessage}>required</Text>
            </View>

            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Pharmacy Code</Text>
                <TextInput style={formStyle.textInput}/>
            </View>

            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Open Time</Text>
                <DatePicker mode="time"/>
            </View>

            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Close Time</Text>
                <DatePicker mode="time"/>
            </View>

            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Status</Text>
                <DropDown items={[{label:'Active', value:1},{label:'Inactive', value:2}]}/>
            </View>

            <View style={formStyle.formActionButton}>
                <View style={formStyle.saveButtonWrapper}>
                    <TouchableOpacity style={formStyle.saveButton}> 
                        <Text style={formStyle.saveButtonFont}>
                            Save Changes
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    );
};