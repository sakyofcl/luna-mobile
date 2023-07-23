import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView} from "react-native";
import {PrescriptionCard} from '../components/prescriptionCard';
import {appointmentStyles} from '../style.appointment';
import DownloadIcon from '../../../assets/image/cloud-download-alt.png';
import PrintIcon from '../../../assets/image/print.png';
import NextIcon from '../../../assets/image/next.png';
import { COLOR } from "../../../core/enum/color";
import { PrescriptionModel } from "../models/prescriptionModel";
import service from '../service';
import WebView from "react-native-webview";

export const ViewPrescriptionScreen = (props)=>{
    const viewPrescriptionStyle = appointmentStyles.viewPrescription;
    const [prescription, setPrescription] = useState(new PrescriptionModel);
    const prescriptionId = props.route.params.prescriptionId;
    const scrollRef = useRef();

    useEffect(()=>{
        fetchSpecificPrescription();
    },[]);

    const fetchSpecificPrescription = ()=>{
        service.getPrescription(prescriptionId).then((data)=>{
            setPrescription(data);
        });
    };

    return (
        <ScrollView style={viewPrescriptionStyle.container} ref={scrollRef}>
          
            <View style={viewPrescriptionStyle.listContainer}>
                <View style={viewPrescriptionStyle.listItem}>
                    <PrescriptionCard data={prescription}/>
                </View>
            </View>

            <View style={viewPrescriptionStyle.prescriptionContainerWrapper}>
                <View style={viewPrescriptionStyle.prescriptionContainer}>
                    <Text style={viewPrescriptionStyle.prescriptionViewer}>Prescription Viewer</Text>
                    <WebView nestedScrollEnabled={true} style={viewPrescriptionStyle.pdfContainer} source={{ uri: 'https://drive.google.com/viewerng/viewer?embedded=true&url=http://www.africau.edu/images/default/sample.pdf' }} />
                </View>
            </View>


            <View style={viewPrescriptionStyle.LineBreakWrapper}>
                <View style={viewPrescriptionStyle.LineBreak}/>
            </View>
            
            <View style={viewPrescriptionStyle.actionButtonsBox}>
                <ButtonWithIcon bgColor={COLOR.warning} label='Print' icon={PrintIcon}/>
                <ButtonWithIcon bgColor={COLOR.success} label='Download' icon={DownloadIcon}/>
                <ButtonWithIcon bgColor={COLOR.brandColor} label='Next' icon={NextIcon} onClick={()=> scrollRef.current.scrollTo({x:0,y:0,animated: true})}/>
            </View>
        </ScrollView>
    );
}

const ButtonWithIcon = ({bgColor, icon, label, onClick})=>{
    const viewPrescriptionStyle = appointmentStyles.viewPrescription;
    return (
        <View style={viewPrescriptionStyle.ButtonWithIconWrapper}>
            <TouchableOpacity style={{...viewPrescriptionStyle.ButtonWithIcon, backgroundColor: bgColor, shadowColor: bgColor}} onPress={onClick}> 
                <Image source={icon} style={viewPrescriptionStyle.ButtonIcon}/>
                <Text style={viewPrescriptionStyle.ButtonFont}>
                    {label}
                </Text>
            </TouchableOpacity>
        </View>
    );
}