import React from 'react';
import { View} from 'react-native';
import { PharmacyCard } from '../components/pharmacyCard';
import { pharmacyStyles } from '../style.pharmacy';

export const PharmacyListing = ()=>{
    const pharmacyListingStyle = pharmacyStyles.pharmacyListing;
    return (
        
        <View style={pharmacyListingStyle.container}>
            <PharmacyCard/>
            <PharmacyCard/>
            <PharmacyCard/>
            <PharmacyCard/>
            <PharmacyCard/>
        </View>
    );
};