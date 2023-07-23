import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { pharmacyStyles } from '../style.pharmacy';
import {FloatItemCard} from '../../../core/components/FloatItemCard';

export const PharmacyFloatListing = (props)=>{
    const pharmacyFloatListingStyle = pharmacyStyles.pharmacyFloatListing;

    const onClickManagePharmacy = ()=>{
        props.navigation.navigate('profile', {screen: 'managePharmacy'});
    }
    
    return (
        <ScrollView style={pharmacyFloatListingStyle.container}>
            <View style={pharmacyFloatListingStyle.createButtonContainer}>
                <View style={pharmacyFloatListingStyle.addButtonWrapper}>
                    <TouchableOpacity style={pharmacyFloatListingStyle.addButton} onPress={onClickManagePharmacy}> 
                        <Text style={pharmacyFloatListingStyle.addButtonFont}>
                            ADD
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={pharmacyFloatListingStyle.floatListWrapper}>
                <View style={pharmacyFloatListingStyle.floatList}>
                    <FloatItemCard title="Main Pharmacy " subTitle="#PM-01, 7am - 5pm" onClick={onClickManagePharmacy}/>
                    <FloatItemCard title="Pharmacy 2" subTitle="#PM-05, 7am - 5pm"/>
                </View>
            </View>
        </ScrollView>
    );
};