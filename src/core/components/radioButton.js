import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { coreStyles } from "./style.core";
import RadioSelected from '../../assets/image/radio-selected.png';
import RadioUnSelected from '../../assets/image/radio-unselected.png';

export const RadioButton = ({label, isChecked})=>{
    const radioButtonStyles = coreStyles.radioButton;
    return (
        <View>
            {isChecked ?
                <TouchableOpacity style={radioButtonStyles.btn}>
                    <Image style={radioButtonStyles.img} source={RadioSelected}/>
                    <Text>{label}</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={radioButtonStyles.btn}>
                    <Image style={radioButtonStyles.img} source={RadioUnSelected} />
                    <Text>{label}</Text>
                </TouchableOpacity>
            }
        </View>
    )
};
