import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { UnitCard } from '../components/unitCard.component';
import { unitStyles } from '../style.unit';

export const UnitListing = (props)=>{
    const unitListingStyle = unitStyles.unitListing;
    return (
        <ScrollView style={unitListingStyle.container}>

            <View style={unitListingStyle.unitListContainer}>
                <Text style={unitListingStyle.hospitalName}>Amh Hospital Kalmunai</Text>
                <View style={unitListingStyle.unitListItem}>
                    <UnitCard isOpen={true} isSelected={true} onClick={()=> props.navigation.navigate('unit', {screen:'appointments'})}/>
                </View>
                <View style={unitListingStyle.unitListItem}>
                    <UnitCard isOpen={true} isSelected={true} onClick={()=> props.navigation.navigate('unit', {screen:'appointments'})}/>
                </View>

            </View>

        </ScrollView>
    );
};