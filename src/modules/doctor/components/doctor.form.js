import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import {DropDown} from '../../../core/components/dropDown';
import { doctorStyles } from '../style.doctor';
import { coreStyles } from '../../../core/components/style.core';
import {DoctorModel} from '../models/doctorModel';
import service from '../service';

export const DoctorForm = (props)=>{
    const doctorFormStyle = doctorStyles.doctorForm;
    const formStyle = coreStyles.formStyle;
    const [doctor, setDoctor] = useState({...(new DoctorModel), hospitalId:1});
    const isEdit = props.doctorId !== undefined;

    const onChange = (value)=>{
        const constructedValues = {...doctor, ...value};
        setDoctor(constructedValues);
    }

    useEffect(()=>{
        isEdit && fetchDoctor();
    },[]);

    const save = ()=>{
        (isEdit ? service.updateDoctor : service.addDoctor)(doctor).then(()=>{
            props.onAfterComplete();
        })
    }

    const fetchDoctor = ()=>{
        service.getDoctor(props.doctorId).then((data)=>{
            setDoctor(data);
        })
    };

    return (
        <ScrollView style={doctorFormStyle.container}>
            
            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Doctor Name</Text>
                <TextInput style={formStyle.textInput} value={doctor.doctorName} onChangeText={(value)=> onChange({doctorName: value})}/>
                <Text style={formStyle.formErrorMessage}>Required</Text>
            </View>

            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Phone Number</Text>
                <TextInput style={formStyle.textInput} value={doctor.phoneNo} onChangeText={(value)=> onChange({phoneNo: value})}/>
                <Text style={formStyle.formErrorMessage}>required</Text>
            </View>

            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Email</Text>
                <TextInput style={formStyle.textInput} value={doctor.email} onChangeText={(value)=> onChange({email: value})}/>
                <Text style={formStyle.formErrorMessage}>Required</Text>
            </View>

            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Address</Text>
                <TextInput style={formStyle.textInput} value={doctor.address} onChangeText={(value)=> onChange({address: value})}/>
            </View>

            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Gender</Text>
                <DropDown value={doctor.gender} onChangeValue={(value)=> onChange({gender: value})} items={[{label:'Male', value:1},{label:'Female',value:2}]} />
            </View>

            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Qualification</Text>
                <TextInput style={formStyle.textInput} value={doctor.qualification} onChangeText={(value)=> onChange({qualification: value})}/>
            </View>

            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Specialization</Text>
                <TextInput style={formStyle.textInput} value={doctor.specialization} onChangeText={(value)=> onChange({specialization: value})}/>
            </View>

            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Digital Singnature</Text>
                <TextInput style={formStyle.textInput} value={doctor.digitalSingnature} onChangeText={(value)=> onChange({digitalSingnature: value})}/>
            </View>


            <View style={formStyle.formActionButton}>
                <View style={formStyle.saveButtonWrapper}>
                    <TouchableOpacity style={formStyle.saveButton} onPress={save}> 
                        <Text style={formStyle.saveButtonFont}>
                            Save Changes
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    );
};