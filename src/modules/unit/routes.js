import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {UnitListing} from './screens/unitListing.screen';
import { AppointmentListing } from '../appointment/screens/appointmentListing.screen';

const Stack = createNativeStackNavigator();

export function UnitRoutes() {
    return (
        <Stack.Navigator initialRouteName='index' screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" component={UnitListing} />
            <Stack.Screen name="appointments" component={AppointmentListing} />
        </Stack.Navigator>
    );
  }