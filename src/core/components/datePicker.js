import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import DatePicker from 'react-native-date-picker';
import { coreStyles } from './style.core';
import DateIcon from '../../assets/image/calendar.png';
import moment from 'moment/moment';

export default (props) => {
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState(props.date || new Date())
    const formStyle = coreStyles.formStyle;

    const onDateConfirm = (e)=>{
        setDate(e);
        setOpen(false);
        props.onDateChange && props.onDateChange(e); 
    }

    const getDateByMode = (mode='datetime')=>{
        const d = moment(date || new Date());
        switch (mode) {
            case 'datetime':
                return d.format("YYYY/MMM/DD HH:mm:ss");
            case 'date':
                return d.format("YYYY/MMM/DD");
            default:
                return d.format("hh:mm A");
        }
    }
    console.log(open);

    return (
        <>
        <TouchableOpacity style={formStyle.datePicker} onPress={() => setOpen(true)}>
            <Text style={formStyle.datePickerText}>{getDateByMode(props.mode)}</Text>
            <View style={formStyle.datePickerButtonWrapper}>
                <View style={formStyle.datePickerButton}> 
                    <Image source={DateIcon} style={formStyle.datePickerIcon}/>
                </View>
            </View>
        </TouchableOpacity>
        <DatePicker modal open={open} date={date} onConfirm={(x)=> onDateConfirm(x)} onCancel={() => { setOpen(false) }} mode={props.mode || 'datetime'}/>
        </>
    );
}