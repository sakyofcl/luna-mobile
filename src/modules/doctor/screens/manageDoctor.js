import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { doctorStyles } from '../style.doctor';
import { DoctorForm } from '../components/doctor.form';
import { showAlert } from '../../../core/components/alertBox';
import service from '../service';

export const ManageDoctor = (props)=>{
    const manageDoctorStyle = doctorStyles.manageDoctor;
    const doctorId = props.route.params.doctorId;
    const isEdit = doctorId !== undefined;
    const onAfterComplete = ()=>{
        props.navigation.goBack();
    };

    const onRemoveDoctor = ()=>{
        showAlert('Delete doctor','Are you sure you want to delete this doctor?',()=> removeDoctor());
    }

    const removeDoctor = ()=>{
        service.deleteDoctor(doctorId).then(()=>{
            onAfterComplete();
        });
    }

    return (
        <ScrollView style={manageDoctorStyle.container}>
            <View style={manageDoctorStyle.titleWithAction}>
                <Text style={manageDoctorStyle.titleLabel}>{isEdit ? 'Edit' :'Add'} Doctor</Text>
                {isEdit &&
                    <View style={manageDoctorStyle.removeButtonWrapper}>
                        <TouchableOpacity style={manageDoctorStyle.removeButton} onPress={onRemoveDoctor}> 
                            <Text style={manageDoctorStyle.removeButtonFont}>
                                REMOVE
                            </Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
            <View style={manageDoctorStyle.formContainer}>
                <DoctorForm doctorId={doctorId} onAfterComplete={onAfterComplete}/>
            </View>
        </ScrollView>
    );
};