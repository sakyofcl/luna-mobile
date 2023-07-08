import React from "react";
import { View, Text, TouchableNativeFeedback, Image} from "react-native";
import { pharmacyStyles } from "../style.pharmacy";
import ViewButtonIcon from '../../../assets/image/angle-small-right.png';
import PharmacyFilledIcon from '../../../assets/image/receipt-icon.png';

export const PharmacyCard = (props)=>{
    const pharmacyCardStyle = pharmacyStyles.pharmacyCard;
    
    return (
        <View>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#cedeff')} onPress={props.onClick}>
                <View style={pharmacyCardStyle.container}>
                    <View style={pharmacyCardStyle.appointmentInfoBox}>
                        <Text style={pharmacyCardStyle.patientName}>Phamarcy 01</Text>
                        <View style={pharmacyCardStyle.patientInfo}>
                            <View style={pharmacyCardStyle.PriorityStatus}/>
                            <View style={pharmacyCardStyle.Dot} />
                            <Text style={pharmacyCardStyle.QNumber}>PN-23</Text>
                            <View style={pharmacyCardStyle.Dot} />
                            <Text style={pharmacyCardStyle.patientInfoGender}>AMH Hospital</Text>
                        </View>
                        <View style={pharmacyCardStyle.appointmentStatusBox}>

                            <View style={pharmacyCardStyle.appointmentStatusWrapper}>
                                <Text style={pharmacyCardStyle.appointmentStatusFont}>OPEN</Text>
                            </View>
                            <View style={pharmacyCardStyle.totalBooking}>
                                <Image source={PharmacyFilledIcon} style={pharmacyCardStyle.totalBookingIcon}/>
                                <Text style={pharmacyCardStyle.totalBookingValue}>25</Text>
                            </View>
                            <View style={pharmacyCardStyle.Dot} />
                            <Text style={pharmacyCardStyle.appointmentStatusTime}>3.30pm - 4pm</Text>

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