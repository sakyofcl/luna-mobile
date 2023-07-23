import React,{useEffect, useState} from 'react';
import { ScrollView, View } from 'react-native';
import { PrescriptionCard } from '../components/prescriptionCard';
import { appointmentStyles } from '../style.appointment';
import service from '../service';

export const PrescriptionListing = (props)=>{
    const prescriptionListingStyle = appointmentStyles.prescriptionListing;
    const pharmacyId = props.route.params.pharmacyId;
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetchPrescriptions();
    },[]);

    const fetchPrescriptions = ()=>{
        service.getPharmacyPrescription(pharmacyId).then((data)=>{
            setItems(data);
        });
    };

    const renderPrescriptions = (prescription, i)=>{
        return(
            <View style={prescriptionListingStyle.listItem} key={i}>
                <PrescriptionCard data={prescription} onClick={()=> props.navigation.navigate('pharmacy', {screen:'viewPrescription', params: {prescriptionId: prescription.prescriptionId}  })}/>
            </View>
        );  
    };


    return (
        <ScrollView style={prescriptionListingStyle.container}>
            <View style={prescriptionListingStyle.listContainer}>
                {items.map(renderPrescriptions)}  
            </View>
        </ScrollView>
    );
};