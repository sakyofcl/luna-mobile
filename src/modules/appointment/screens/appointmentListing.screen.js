import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { AppointmentCard } from '../components/appointmentCard';
import { appointmentStyles } from '../style.appointment';
import service from '../service';

export const AppointmentListing = (props)=>{
    const appointmentListingStyle = appointmentStyles.appointmentListing;
    const consultingUnitId = props.route.params.consultingUnitId;
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetchAppointments();
    },[]);

    const fetchAppointments = ()=>{
        service.GetAppointments(consultingUnitId).then((data)=>{
            setItems(data);
        });
    };

    const renderAppointments = (appointment, i)=>{
        return(
            <View style={appointmentListingStyle.listItem} key={i}>
                <AppointmentCard data={appointment}/>
            </View>
        );  
    };


    return (
        <ScrollView style={appointmentListingStyle.container}>
            <View style={appointmentListingStyle.listContainer}>
                {items.map(renderAppointments)}
            </View>
        </ScrollView>
    );
};