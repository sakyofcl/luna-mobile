import React,{useState, useEffect} from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { unitStyles } from '../style.unit';
import {FloatItemCard} from '../../../core/components/FloatItemCard';
import service from '../service';

export const ConsultingUnitFloatListing = (props)=>{
    const consultingUnitFloatListingStyle = unitStyles.consultingUnitFloatListing;
    const [items, setItems] = useState([]);

    useEffect(()=>{
        const unsubscribe = props.navigation.addListener('focus', () => {
            fetchUnits();
        });
        return unsubscribe;
    },[props.navigation]);

    const fetchUnits = ()=>{
        service.GetHospitalUnits(1).then((data)=>{
            setItems(data);
        });
    };

    const renderRow = (unit, i)=>{
        const openTime = moment.utc(unit.openTime).format('hh A');
        const closeTime = moment.utc(unit.closeTime).format('hh A');
        return(
            <View style={consultingUnitFloatListingStyle.floatList} key={i}>
                <FloatItemCard title={unit.unitName} subTitle={`${openTime} - ${closeTime}`} onClick={()=> onClickManageUnit(unit.consultingUnitId)}/>
            </View>
        );  
    };

    const onClickManageUnit = (id)=>{
        props.navigation.navigate('profile', {screen: 'manageUnit', params:{consultingUnitId: id}});
    }


    return (
        <ScrollView style={consultingUnitFloatListingStyle.container}>
            <View style={consultingUnitFloatListingStyle.createButtonContainer}>
                <View style={consultingUnitFloatListingStyle.addButtonWrapper}>
                    <TouchableOpacity style={consultingUnitFloatListingStyle.addButton} onPress={()=> onClickManageUnit()}> 
                        <Text style={consultingUnitFloatListingStyle.addButtonFont}>
                            ADD
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={consultingUnitFloatListingStyle.floatListWrapper}>
                {items.map(renderRow)}
            </View>
        </ScrollView>
    );
};