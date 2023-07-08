import React from 'react';
import { ScrollView, View} from 'react-native';
import { PharmacyCard } from '../components/pharmacyCard';
import { pharmacyStyles } from '../style.pharmacy';

export const PharmacyListing = (props)=>{
    const pharmacyListingStyle = pharmacyStyles.pharmacyListing;
    return (
        <ScrollView style={pharmacyListingStyle.container}>
           <View style={pharmacyListingStyle.listContainer}>
                <View style={pharmacyListingStyle.listItem}>
                    <PharmacyCard onClick={()=> props.navigation.navigate('pharmacy', {screen:'prescription'})}/>
                </View>

                <View style={pharmacyListingStyle.listItem}>
                    <PharmacyCard onClick={()=> props.navigation.navigate('pharmacy', {screen:'prescription'})}/>
                </View>
                
                <View style={pharmacyListingStyle.listItem}>
                    <PharmacyCard onClick={()=> props.navigation.navigate('pharmacy', {screen:'prescription'})}/>
                </View>
                
            </View>
        </ScrollView>
    );
};