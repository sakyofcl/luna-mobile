import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { unitStyles } from '../style.unit';
import { ConsultingUnitForm } from '../components/consultingUnit.form';
import { showAlert } from '../../../core/components/alertBox';
import service from '../service';

export const ManageConsultingUnit = (props)=>{
    const manageUnitStyle = unitStyles.manageUnit;

    const consultingUnitId = props.route.params.consultingUnitId;
    const isEdit = consultingUnitId !== undefined;
    const onAfterComplete = ()=>{
        props.navigation.goBack();
    };

    const onRemoveConsultingUnit = ()=>{
        showAlert('Delete Consulting Unit','Are you sure you want to delete this Consulting Unit?',()=> removeConsultingUnit());
    }

    const removeConsultingUnit = ()=>{
        service.removeConsultingUnit(consultingUnitId).then(()=>{
            onAfterComplete();
        });
    }


    return (
        <ScrollView style={manageUnitStyle.container}>
            <View style={manageUnitStyle.titleWithAction}>
                <Text style={manageUnitStyle.titleLabel}>{isEdit ? 'Edit' :'Add'} Consulting Unit</Text>
                {isEdit &&
                    <View style={manageUnitStyle.removeButtonWrapper}>
                        <TouchableOpacity style={manageUnitStyle.removeButton} onPress={onRemoveConsultingUnit}> 
                            <Text style={manageUnitStyle.removeButtonFont}>
                                REMOVE
                            </Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
            <View style={manageUnitStyle.formContainer}>
                <ConsultingUnitForm consultingUnitId={consultingUnitId} onAfterComplete={onAfterComplete}/>
            </View>
        </ScrollView>
    );
};