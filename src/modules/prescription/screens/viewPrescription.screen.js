import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView} from "react-native";
import {PrescriptionCard} from '../components/prescriptionCard';
import {appointmentStyles} from '../style.appointment';
import DownloadIcon from '../../../assets/image/cloud-download-alt.png';
import PrintIcon from '../../../assets/image/print.png';
import NextIcon from '../../../assets/image/next.png';
import { COLOR } from "../../../core/enum/color";
import SamplePrescription from '../../../assets/image/sample-prescription.png';

export const ViewPrescriptionScreen = ()=>{

    const viewPrescriptionStyle = appointmentStyles.viewPrescription;
    
    return (
        <ScrollView style={viewPrescriptionStyle.container}>
          
            <View style={viewPrescriptionStyle.listContainer}>
                <View style={viewPrescriptionStyle.listItem}>
                    <PrescriptionCard/>
                </View>
            </View>

            <View style={viewPrescriptionStyle.prescriptionContainer}>
                <Image source={SamplePrescription} style={viewPrescriptionStyle.samplePrescription} resizeMode={'center'}/>
            </View>

            <View style={viewPrescriptionStyle.LineBreakWrapper}>
                <View style={viewPrescriptionStyle.LineBreak}/>
            </View>
            
            <View style={viewPrescriptionStyle.actionButtonsBox}>
                <ButtonWithIcon bgColor={COLOR.warning} label='Print' icon={PrintIcon}/>
                <ButtonWithIcon bgColor={COLOR.success} label='Download' icon={DownloadIcon}/>
                <ButtonWithIcon bgColor={COLOR.brandColor} label='Next' icon={NextIcon}/>
            </View>
        </ScrollView>
    );
}

const ButtonWithIcon = ({bgColor, icon, label})=>{
    const viewPrescriptionStyle = appointmentStyles.viewPrescription;
    return (
        <View style={viewPrescriptionStyle.ButtonWithIconWrapper}>
            <TouchableOpacity style={{...viewPrescriptionStyle.ButtonWithIcon, backgroundColor: bgColor, shadowColor: bgColor}}> 
                <Image source={icon} style={viewPrescriptionStyle.ButtonIcon}/>
                <Text style={viewPrescriptionStyle.ButtonFont}>
                    {label}
                </Text>
            </TouchableOpacity>
        </View>
    );
}