import React,{useState, useEffect} from 'react';
import { ScrollView, View} from 'react-native';
import { PharmacyCard } from '../components/pharmacyCard';
import { pharmacyStyles } from '../style.pharmacy';
import service from '../service';

export const PharmacyListing = (props)=>{
    const pharmacyListingStyle = pharmacyStyles.pharmacyListing;

    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetchPharmacy();
    },[]);

    const fetchPharmacy = ()=>{
        service.getHospitalPharmacy(1).then((data)=>{
            setItems(data);
        });
    };

    const renderPharmacy = (pharmacy, i)=>{
        return(
            <View style={pharmacyListingStyle.listItem} key={i}>
                <PharmacyCard data={pharmacy} onClick={()=> props.navigation.navigate('pharmacy', {screen:'prescription', params: {pharmacyId: pharmacy.pharmacyId} })}/>
            </View>
        );  
    };

    return (
        <ScrollView style={pharmacyListingStyle.container}>
           <View style={pharmacyListingStyle.listContainer}>
                {items.map(renderPharmacy)}               
            </View>
        </ScrollView>
    );
};