import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { UnitCard } from '../components/unitCard.component';
import { unitStyles } from '../style.unit';

export const UnitListing = ()=>{
    const unitListingStyle = unitStyles.unitListing;
    return (
        <ScrollView style={unitListingStyle.container}>

            <View style={unitListingStyle.unitListContainer}>
                <Text style={unitListingStyle.hospitalName}>Amh Hospital Kalmunai</Text>
                <View style={unitListingStyle.unitListItem}>
                    <UnitCard isOpen={true} isSelected={true}/>
                </View>
                <View style={unitListingStyle.unitListItem}>
                    <UnitCard isOpen={true} isSelected={true}/>
                </View>

                <Text style={unitListingStyle.hospitalName}>Jameel Memorial Hospital Ampara</Text>
                <View style={unitListingStyle.unitListItem}>
                    <UnitCard isOpen={true} isSelected={true}/>
                </View>

            </View>

        </ScrollView>
    );
};