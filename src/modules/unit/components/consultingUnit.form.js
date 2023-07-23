import React,{useState, useEffect} from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import DatePicker from '../../../core/components/datePicker';
import {DropDown} from '../../../core/components/dropDown';
import { unitStyles } from '../style.unit';
import { coreStyles } from '../../../core/components/style.core';
import service from '../service';
import { ConsultingUnitModel } from '../models/consultingUnitModel';

export const ConsultingUnitForm = (props)=>{
    const unitFormStyle = unitStyles.unitForm;
    const formStyle = coreStyles.formStyle;

    const [consultingUnit, setConsultingUnit] = useState({...(new ConsultingUnitModel), hospitalId:1});
    const isEdit = props.consultingUnitId !== undefined;

    const onChange = (value)=>{
        const constructedValues = {...consultingUnit, ...value};
        setConsultingUnit(constructedValues);
    }

    useEffect(()=>{
        isEdit && fetchUnit();
    },[]);

    const save = ()=>{
        (isEdit ? service.editConsultingUnit : service.addConsultingUnit)(consultingUnit).then(()=>{
            props.onAfterComplete();
        })
    }

    const fetchUnit = ()=>{
        service.getConsultingUnit(props.consultingUnitId).then((data)=>{
            setConsultingUnit(data);
        })
    };

    return (
        <ScrollView style={unitFormStyle.container}>

            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Unit Name</Text>
                <TextInput style={formStyle.textInput} value={consultingUnit.unitName} onChangeText={(value)=> onChange({unitName: value})}/>
                <Text style={formStyle.formErrorMessage}>required</Text>
            </View>

            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Open Time</Text>
                <DatePicker mode="time" date={consultingUnit.openTime} onDateChange={(value)=> onChange({openTime: value})}/>
            </View>

            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Close Time</Text>
                <DatePicker mode="time" date={consultingUnit.closeTime} onDateChange={(value)=> onChange({closeTime: value})}/>
            </View>

            <View style={formStyle.formGroup}>
                <Text style={formStyle.formLabel}>Status</Text>
                <DropDown value={consultingUnit.status} onChangeValue={(value)=> onChange({status: value})} items={[{label:'Active', value:1},{label:'Inactive', value:2}]}/>
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