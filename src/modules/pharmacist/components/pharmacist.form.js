import React,{useState} from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import * as yup from 'yup';
import {DropDown} from '../../../core/components/dropDown';
import { pharmacistStyles } from '../style.pharmacist';
import { coreStyles } from '../../../core/components/style.core';

export const PharmacistForm = (props)=>{
    const pharmacistFormStyles = pharmacistStyles.pharmacistForm;
    const formStyle = coreStyles.formStyle;

    return (
        <ScrollView style={pharmacistFormStyles.container}>

            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Pharmacist Name</Text>
                <TextInput style={formStyle.textInput} onChange={(value) => onChange({ name: value })}/>
            </View>

            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Phone Number</Text>
                <TextInput style={formStyle.textInput}/>
            </View>

            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Address</Text>
                <TextInput style={formStyle.textInput}/>
            </View>

            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Gender</Text>
                <DropDown items={[{label:'Male', value:1},{label:'Female', value:2}]}/>
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