import React from "react";
import { View, Text, TouchableNativeFeedback, Image } from "react-native";
import { hospitalStyles } from "../style.hospital";
import HospitalImage from '../../../assets/image/hospitalImage.jpg';
import LocationIcon from '../../../assets/image/marker.png';
import PhoneIcon from '../../../assets/image/phone-flip.png';

export const HospitalCard = (props)=>{
    const hospitalCardStyle = hospitalStyles.hospitalFloatCard;
    
    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#cedeff')} onPress={props.onClick}>
            <View style={hospitalCardStyle.container}>
                <Image source={HospitalImage} style={hospitalCardStyle.hospitalImage}/>
                <View style={hospitalCardStyle.info}>
                    <Text style={hospitalCardStyle.hospitalName}>Creasent Hospital Pvt ltd</Text>

                    <View style={hospitalCardStyle.infoWithIcon}>
                        <Image source={LocationIcon} style={hospitalCardStyle.infoIcon}/>
                        <Text style={hospitalCardStyle.infoName}>Kottukkara, Kondotty, Kerala 673638, India</Text>
                    </View>

                    <View style={hospitalCardStyle.infoWithIcon}>
                        <Image source={PhoneIcon} style={hospitalCardStyle.infoIcon}/>
                        <Text style={hospitalCardStyle.infoName}>+94 757630782</Text>
                    </View>

                    <View style={hospitalCardStyle.infoLine}/>

                </View>
            </View>
        </TouchableNativeFeedback>
    );
}