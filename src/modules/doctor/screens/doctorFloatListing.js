import React,{useState, useEffect} from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { doctorStyles } from '../style.doctor';
import {FloatItemCard} from '../../../core/components/FloatItemCard';
import service from '../service';

export const DoctorFloatListing = (props)=>{
    const doctorFloatListingStyle = doctorStyles.doctorFloatListing;

    const [items, setItems] = useState([]);

    useEffect(()=>{
        const unsubscribe = props.navigation.addListener('focus', () => {
            fetchDoctors();
        });
        return unsubscribe;
    },[props.navigation]);

    const fetchDoctors = ()=>{
        service.getHospitalDoctor(1).then((data)=>{
            setItems(data);
        });
    };

    const renderRow = (doctor, i)=>{
        return(
            <View style={doctorFloatListingStyle.floatList} key={i}>
                <FloatItemCard title={doctor.doctorName} subTitle={doctor.phoneNo} onClick={()=> onClickManageDoctor(doctor.doctorId)}/>
            </View>
        );  
    };

    const onClickManageDoctor = (id)=>{
        props.navigation.navigate('profile', {screen: 'manageDoctor', params:{doctorId: id}});
    }


    return (
        <ScrollView style={doctorFloatListingStyle.container}>
            <View style={doctorFloatListingStyle.createButtonContainer}>
                <View style={doctorFloatListingStyle.addButtonWrapper}>
                    <TouchableOpacity style={doctorFloatListingStyle.addButton} onPress={()=> onClickManageDoctor()}>
                        <Text style={doctorFloatListingStyle.addButtonFont}>
                            ADD
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={doctorFloatListingStyle.floatListWrapper}>
                {items.map(renderRow)}
            </View>
        </ScrollView>
    );
};