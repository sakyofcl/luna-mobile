import React from "react";
import { View, Text, TouchableNativeFeedback, Image } from "react-native";
import { hospitalStyles } from "../style.hospital";
import LocationIcon from '../../../assets/image/marker.png';
import PhoneIcon from '../../../assets/image/phone-flip.png';

export const HospitalCard = (props)=>{
    const hospitalCardStyle = hospitalStyles.hospitalFloatCard;
    const {data} = props;
    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#cedeff')} onPress={() => props.onClick(data.hospitalId)}>
            <View style={hospitalCardStyle.container}>
                <Image source={{uri:data.profileImage}} style={hospitalCardStyle.hospitalImage}/>
                <View style={hospitalCardStyle.info}>
                    <Text style={hospitalCardStyle.hospitalName}>{data.hospitalName}</Text>

                    <View style={hospitalCardStyle.infoWithIcon}>
                        <Image source={LocationIcon} style={hospitalCardStyle.infoIcon}/>
                        <Text style={hospitalCardStyle.infoName}>{data.hospitalAddress}</Text>
                    </View>

                    <View style={hospitalCardStyle.infoWithIcon}>
                        <Image source={PhoneIcon} style={hospitalCardStyle.infoIcon}/>
                        <Text style={hospitalCardStyle.infoName}>{data.phoneNumber}</Text>
                    </View>

                    <View style={hospitalCardStyle.infoLine}/>

                </View>
            </View>
        </TouchableNativeFeedback>
    );
}