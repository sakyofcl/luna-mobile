import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { pharmacistStyles } from '../style.pharmacist';
import {FloatItemCard} from '../../../core/components/FloatItemCard';

export const PharmacistFloatListing = (props)=>{
    const pharmacistFloatListingStyle = pharmacistStyles.pharmacistFloatListing;
    const onClickManagePharmacist = ()=>{
        props.navigation.navigate('profile', {screen: 'managePharmacist'});
    }
    return (
        <ScrollView style={pharmacistFloatListingStyle.container}>
            <View style={pharmacistFloatListingStyle.createButtonContainer}>
                <View style={pharmacistFloatListingStyle.addButtonWrapper}>
                    <TouchableOpacity style={pharmacistFloatListingStyle.addButton} onPress={onClickManagePharmacist}> 
                        <Text style={pharmacistFloatListingStyle.addButtonFont}>
                            ADD
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={pharmacistFloatListingStyle.floatListWrapper}>
                <View style={pharmacistFloatListingStyle.floatList}>
                    <FloatItemCard title="Ajaz Khan" subTitle="Male, 0770856672" onClick={onClickManagePharmacist}/>
                </View>
            </View>
        </ScrollView>
    );
};