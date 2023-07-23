import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { UnitCard } from '../components/unitCard.component';
import { unitStyles } from '../style.unit';
import service from '../service';

export const UnitListing = (props)=>{
    const unitListingStyle = unitStyles.unitListing;
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetchUnits();
    },[]);

    const fetchUnits = ()=>{
        service.GetHospitalUnits(1).then((data)=>{
            setItems(data);
        });
    };

    const renderUnits = (unit, i)=>{
        return(
            <View style={unitListingStyle.unitListItem} key={i}>
                <UnitCard data={unit} onClick={()=> props.navigation.navigate('unit', {screen:'appointments', params: {consultingUnitId: unit.consultingUnitId}})}/>
            </View>
        );  
    };

    return (
        <ScrollView style={unitListingStyle.container}>
            <View style={unitListingStyle.unitListContainer}>
                <Text style={unitListingStyle.hospitalName}>AMH Kalmunai</Text>
                {items.map(renderUnits)}
            </View>
        </ScrollView>
    );
};