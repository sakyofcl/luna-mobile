import React from "react";
import { View, Text, Image,TouchableNativeFeedback } from "react-native";
import moment from "moment/moment";
import { unitStyles } from "../style.unit";
import PatientsIcon from '../../../assets/image/patients-filled.png';
import { RadioButton } from "../../../core/components/radioButton";
import { COLOR } from "../../../core/enum/color";

export const UnitCard = ({selectedUnitId, onClick, data, isNeedCheck=false})=>{
    const unitCardStyle = unitStyles.unitCardNew;
    const openTime = moment.utc(data.openTime).format('hh A');
    const closeTime = moment.utc(data.closeTime).format('hh A');
    
    const isUnitOpen = ()=>{
        return true;
    };
    
    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#cedeff')} onPress={onClick}>
            <View style={unitCardStyle.container}>
                <View style={unitCardStyle.ActionAndStatusBox}>
                    <View style={{...unitCardStyle.StatusBox, backgroundColor: isUnitOpen() ? COLOR.success : COLOR.danger}}>
                        <Text style={unitCardStyle.StatusBoxText}>{isUnitOpen() ? 'OPEN' : 'CLOSE'}</Text>
                    </View>
                    {isUnitOpen() && isNeedCheck && <RadioButton isChecked={selectedUnitId === data.consultingUnitId}/>}
                </View>
                <Text style={unitCardStyle.unitName}>{data.unitName}</Text>
                <Text style={unitCardStyle.unitOpenCloseTime}>{openTime} - {closeTime}</Text>
                <View style={unitCardStyle.totalBooking}>
                    <Image source={PatientsIcon} style={unitCardStyle.totalBookingIcon}/>
                    <Text style={unitCardStyle.totalBookingValue}>{data.currentAppoinmentCount}</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
}