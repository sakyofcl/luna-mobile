import React from 'react';
import { ScrollView, View} from 'react-native';
import { PharmacyCard } from '../components/pharmacyCard';
import { pharmacyStyles } from '../style.pharmacy';

export const PharmacyListing = ()=>{
    const pharmacyListingStyle = pharmacyStyles.pharmacyListing;
    return (
        <ScrollView style={pharmacyListingStyle.container}>
            
            <PharmacyCard/>
            <PharmacyCard/>
            <PharmacyCard/>
            <PharmacyCard/>
            <PharmacyCard/>
           
        </ScrollView>
    );
};