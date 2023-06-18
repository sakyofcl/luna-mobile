import React from 'react';
import { View, Text } from 'react-native';
import { UnitCard } from '../components/unitCard';
import { unitStyles } from '../style.unit';

export const UnitListing = ()=>{
    const unitListingStyle = unitStyles.unitListing;
    return (
        <View style={unitListingStyle.container}>
            <UnitCard/>
            <UnitCard/>
            <UnitCard/>
            <UnitCard/>
        </View>
    );
};