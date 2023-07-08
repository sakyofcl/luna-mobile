import React from "react";
import { View, Text, Image,TouchableNativeFeedback } from "react-native";
import { unitStyles } from "../style.unit";
import PatientsIcon from '../../../assets/image/patients-filled.png';
import { RadioButton } from "../../../core/components/radioButton";
import { COLOR } from "../../../core/enum/color";

export const UnitCard = ({isOpen, isSelected, onClick})=>{
    const unitCardStyle = unitStyles.unitCardNew;
    
    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#cedeff')} onPress={onClick}>
            <View style={unitCardStyle.container}>
                <View style={unitCardStyle.ActionAndStatusBox}>
                    <View style={{...unitCardStyle.StatusBox, backgroundColor: isOpen ? COLOR.success : COLOR.danger}}>
                        <Text style={unitCardStyle.StatusBoxText}>{isOpen ? 'OPEN' : 'CLOSE'}</Text>
                    </View>
                    {isOpen && <RadioButton isChecked={isSelected}/>}
                </View>
                <Text style={unitCardStyle.unitName}>Xray Unit bgbgbg</Text>
                <Text style={unitCardStyle.unitOpenCloseTime}>11am - 1pm</Text>
                <View style={unitCardStyle.totalBooking}>
                    <Image source={PatientsIcon} style={unitCardStyle.totalBookingIcon}/>
                    <Text style={unitCardStyle.totalBookingValue}>25</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
}