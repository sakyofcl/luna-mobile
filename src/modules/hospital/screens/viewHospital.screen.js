import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView} from "react-native";
import { hospitalStyles } from "../style.hospital";
import HospitalImage from '../../../assets/image/hospitalImage.jpg';
import RatingIcon from '../../../assets/image/star.png';
import PhoneIcon from '../../../assets/image/phone-flip.png';
import DoctorFilledIcon from '../../../assets/image/doctor-v1-filled.png';
import PharmacyIcon from '../../../assets/image/medicine-filled.png'; 
import PatientsFilled from '../../../assets/image/patients-filled.png'; 
import {UnitCard} from '../../unit/components/unitCard.component';
export const ViewHospitalScreen = ()=>{
    const viewHospitalStyle = hospitalStyles.viewHospital;
    
    return (
        <ScrollView style={viewHospitalStyle.container}>
            <View style={viewHospitalStyle.imageBox}>
                <Image source={HospitalImage} style={viewHospitalStyle.imageEle}/>
            </View>

            <View style={viewHospitalStyle.hospitalInfo}>
                <View style={viewHospitalStyle.titleWithRating}>
                    <Text style={viewHospitalStyle.titleText}>AMH Hospital Kalmunai</Text>
                    <View style={viewHospitalStyle.ratingBox}>
                        <Image source={RatingIcon} style={viewHospitalStyle.ratingIcon}/>
                        <Text style={viewHospitalStyle.ratingValue}>4.5</Text>
                    </View>
                </View>
                <View style={viewHospitalStyle.hospitalSummery}>
                    <View style={viewHospitalStyle.summeryIconWithText}>
                        <Image source={DoctorFilledIcon} style={viewHospitalStyle.summeryIcon}/>
                        <Text style={viewHospitalStyle.summeryText}>20 Doctor</Text>
                    </View>
                    <View style={viewHospitalStyle.summeryIconWithText}>
                        <Image source={PharmacyIcon} style={viewHospitalStyle.summeryIcon}/>
                        <Text style={viewHospitalStyle.summeryText}>5 Pharmacy</Text>
                    </View>
                    <View style={viewHospitalStyle.summeryIconWithText}>
                        <Image source={PatientsFilled} style={viewHospitalStyle.summeryIcon}/>
                        <Text style={viewHospitalStyle.summeryText}>2K Visitors</Text>
                    </View>
                </View>
                <Text style={viewHospitalStyle.hospitalAddress}>
                    Kottukkara, Kondotty, Kerala 673638, India
                </Text>
                <Text style={viewHospitalStyle.description}>
                    In your example, if the two buttons are in the question box, you need to set border radius on the button and the container. If not then using borderBottomLeftRadius and borderBottomRightRadius should do the trick.
                </Text>
            </View>

            <View style={viewHospitalStyle.hospitalUnits}>
                <Text style={viewHospitalStyle.unitTitle}>Hospital Units</Text>
                <View style={viewHospitalStyle.unitListContainer}>
                    <View style={viewHospitalStyle.unitListItem}>
                        <UnitCard/>
                    </View>
                    <View style={viewHospitalStyle.unitListItem}>
                        <UnitCard isOpen={true}/>
                    </View>
                    <View style={viewHospitalStyle.unitListItem}>
                        <UnitCard isOpen={true} isSelected={true}/>
                    </View>
                    <View style={viewHospitalStyle.unitListItem}>
                        <UnitCard/>
                    </View>
                </View>
            </View>

            <View style={viewHospitalStyle.hospitalInfoLineWrapper}>
                <View style={viewHospitalStyle.hospitalInfoLine}/>
            </View>
            
            
            <View style={viewHospitalStyle.hospitalActionButtons}>
                <View style={viewHospitalStyle.callButtonWrapper}>
                    <TouchableOpacity style={viewHospitalStyle.callButton}> 
                        <Image source={PhoneIcon} style={viewHospitalStyle.callButtonIcon}/>
                    </TouchableOpacity>
                </View>
                <View style={viewHospitalStyle.bookNowButtonWrapper}>
                    <TouchableOpacity style={viewHospitalStyle.bookNowButton}> 
                        <Text style={viewHospitalStyle.bookNowButtonFont}>
                            Book now
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}