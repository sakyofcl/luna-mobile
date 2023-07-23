import React from "react";
import { View, Text, TouchableNativeFeedback, Image } from "react-native";
import { appointmentStyles } from "../style.appointment";
import PrescriptionIcon from '../../../assets/image/receipt-icon.png';
import DoctorIcon from '../../../assets/image/doctor.png';
import CalendarIcon from '../../../assets/image/calendar.png';
import moment from "moment";

export const PrescriptionCard = (props)=>{
    const prescriptionCardStyle = appointmentStyles.prescriptionCard;
    const data = props.data;
    return (
        <View>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#cedeff')} onPress={props.onClick}>
                <View style={prescriptionCardStyle.container}>
                    <View style={prescriptionCardStyle.patientProfileBox}>
                        <Image source={PrescriptionIcon} style={prescriptionCardStyle.patientProfile}/> 
                    </View>
                    <View style={prescriptionCardStyle.appointmentInfoBox}>
                        <Text style={prescriptionCardStyle.patientName}>#{data.prescriptionId}</Text>
                        <View style={prescriptionCardStyle.patientInfo}>
                            <View style={prescriptionCardStyle.PriorityStatus}/>
                            <View style={prescriptionCardStyle.Dot} />
                            <Text style={prescriptionCardStyle.QNumber}>QN-{data.referenceNumber}</Text>
                            <View style={prescriptionCardStyle.Dot} />
                            <Text style={prescriptionCardStyle.patientInfoGender}>{data.patientName}</Text>
                        </View>
                        <View style={prescriptionCardStyle.appointmentStatusBox}>
                            <View style={prescriptionCardStyle.TextWithIconBox}>
                                <Image source={DoctorIcon} style={prescriptionCardStyle.IconBox}/>
                                <Text style={prescriptionCardStyle.TextValue}>{data.doctorName}</Text>
                            </View>
                            <View style={prescriptionCardStyle.TextWithIconBox}>
                                <Image source={CalendarIcon} style={prescriptionCardStyle.IconBox}/>
                                <Text style={prescriptionCardStyle.TextValue}>{moment(data.prescriptionDate).format('DD/MMM/YYYY')}</Text>
                            </View>

                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}