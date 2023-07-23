import React,{useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { coreStyles } from './style.core';

export const DropDown = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(props.items || []);
    const formStyle = coreStyles.formStyle;

    useEffect(()=>{
        setValue(props.value);
    },[]);

    useEffect(()=>{
        props.onChangeValue(value);
    },[value]);

    return (
        <DropDownPicker open={open} value={value} setItems={setItems} setValue={setValue} setOpen={setOpen} items={items} listMode='SCROLLVIEW' itemKey="value" dropDownContainerStyle={formStyle.dropDownContainer} style={{...formStyle.formDropdown, ...props.style}} {...props.rest} dropDownDirection="TOP"/>   
    );
};