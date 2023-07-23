import React from "react";
import moment from "moment";
import { View, Text, TouchableNativeFeedback, Image} from "react-native";
import { pharmacyStyles } from "../style.pharmacy";
import ViewButtonIcon from '../../../assets/image/angle-small-right.png';
import PharmacyFilledIcon from '../../../assets/image/receipt-icon.png';


export const PharmacyCard = (props)=>{
    const pharmacyCardStyle = pharmacyStyles.pharmacyCard;
    const data = props.data;
    const openTime = moment.utc(data.openTime).format('hh A');
    const closeTime = moment.utc(data.closeTime).format('hh A');

    return (
        <View>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#cedeff')} onPress={props.onClick}>
                <View style={pharmacyCardStyle.container}>
                    <View style={pharmacyCardStyle.appointmentInfoBox}>
                        <Text style={pharmacyCardStyle.patientName}>{data.pharmacyName}</Text>
                        <View style={pharmacyCardStyle.patientInfo}>
                            <View style={pharmacyCardStyle.PriorityStatus}/>
                            <View style={pharmacyCardStyle.Dot} />
                            <Text style={pharmacyCardStyle.QNumber}>PN-{data.pharmacyId}</Text>
                            <View style={pharmacyCardStyle.Dot} />
                            <Text style={pharmacyCardStyle.patientInfoGender}>{data.hospitalName}</Text>
                        </View>
                        <View style={pharmacyCardStyle.appointmentStatusBox}>

                            <View style={pharmacyCardStyle.appointmentStatusWrapper}>
                                <Text style={pharmacyCardStyle.appointmentStatusFont}>OPEN</Text>
                            </View>
                            <View style={pharmacyCardStyle.totalBooking}>
                                <Image source={PharmacyFilledIcon} style={pharmacyCardStyle.totalBookingIcon}/>
                                <Text style={pharmacyCardStyle.totalBookingValue}>{data.totalPrescription}</Text>
                            </View>
                            <View style={pharmacyCardStyle.Dot} />
                            <Text style={pharmacyCardStyle.appointmentStatusTime}>{openTime} - {closeTime}</Text>

                        </View>
                    </View>

                    <View style={pharmacyCardStyle.viewButton}>
                        <Image source={ViewButtonIcon} style={pharmacyCardStyle.viewButtonIcon}/>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}