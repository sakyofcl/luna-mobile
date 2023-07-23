import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Linking, Platform, Alert} from "react-native";
import { hospitalStyles } from "../style.hospital";
import RatingIcon from '../../../assets/image/star.png';
import PhoneIcon from '../../../assets/image/phone-flip.png';
import DoctorFilledIcon from '../../../assets/image/doctor-v1-filled.png';
import PharmacyIcon from '../../../assets/image/medicine-filled.png'; 
import PatientsFilled from '../../../assets/image/patients-filled.png'; 
import {UnitCard} from '../../unit/components/unitCard.component';
import service from "../service";
import { HospitalModel } from "../models/hospitalModel";
import unitService from '../../unit/service';
import {QueueModel} from '../../appointment/models/queueModel';
import queueService from '../../appointment/service';

export const ViewHospitalScreen = (props)=>{
    const [hospital, setHospital] = useState(new HospitalModel);
    const [units, setUnits] = useState([]); 
    const [queueModel, setQueueModel] = useState(new QueueModel);
    const [selectedUnit, setSelectedUnit] = useState(null);

    const viewHospitalStyle = hospitalStyles.viewHospital;
    
    useEffect(()=>{
        fetchHospital();
        fetchHospitalUnits();
    },[]);

    const fetchHospital = ()=>{
        service.getHospital(props.route.params.hospitalId).then((data)=>{
            setHospital(HospitalModel.toHospitalModel(data));
        })
    }

    const fetchHospitalUnits = ()=>{
        unitService.GetHospitalUnits(props.route.params.hospitalId).then((data)=>{
            setUnits(data);
        });
    };

    const onClickCall = ()=>{
        let phoneNumber = Platform.OS === 'android' ? `tel:${hospital.phoneNumber}` : `telprompt:${hospital.phoneNumber}`;
        Linking.openURL(phoneNumber);
    };

    const renderUnitsCard = (unitItem, i)=>{
        return (
            <View style={viewHospitalStyle.unitListItem} key={i}>
                <UnitCard data={unitItem} selectedUnitId={selectedUnit} isNeedCheck={true} onClick={()=> setSelectedUnit(unitItem.consultingUnitId) }/>
            </View>
        );
    }

    const onBookClick = (queueData)=>{
        if(selectedUnit){
            queueData.consultingUnitId = selectedUnit;
            queueData.patientId = 1;
            queueService.AddQueue(queueData).then((data)=>{
                Alert.alert('Sucess', 'Adeed.');
            });
        }
        else{
            Alert.alert('Warrning', 'Must be select consulting unit.');
        }
    };
    
    return (
        <ScrollView style={viewHospitalStyle.container}>
            <View style={viewHospitalStyle.imageBox}>
                <Image source={{uri:hospital.profileImage}} style={viewHospitalStyle.imageEle}/>
            </View>

            <View style={viewHospitalStyle.hospitalInfo}>
                <View style={viewHospitalStyle.titleWithRating}>
                    <Text style={viewHospitalStyle.titleText} >{hospital.hospitalName}</Text>
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
                    {hospital.hospitalAddress}
                </Text>
                <Text style={viewHospitalStyle.description}>
                    {hospital.description}
                </Text>
            </View>

            <View style={viewHospitalStyle.hospitalUnits}>
                <Text style={viewHospitalStyle.unitTitle}>Hospital Units</Text>
                <View style={viewHospitalStyle.unitListContainer}>
                    {units.map((e,i)=> renderUnitsCard(e,i))}
                </View>
            </View>

            <View style={viewHospitalStyle.hospitalInfoLineWrapper}>
                <View style={viewHospitalStyle.hospitalInfoLine}/>
            </View>
            
            
            <View style={viewHospitalStyle.hospitalActionButtons}>
                <View style={viewHospitalStyle.callButtonWrapper}>
                    <TouchableOpacity style={viewHospitalStyle.callButton} onPress={onClickCall}> 
                        <Image source={PhoneIcon} style={viewHospitalStyle.callButtonIcon}/>
                    </TouchableOpacity>
                </View>
                <View style={viewHospitalStyle.bookNowButtonWrapper}>
                    <TouchableOpacity style={viewHospitalStyle.bookNowButton} onPress={()=> onBookClick(queueModel)}> 
                        <Text style={viewHospitalStyle.bookNowButtonFont}>
                            Book now
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}