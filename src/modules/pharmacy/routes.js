import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {PharmacyListing} from './screens/pharmacyListing.screen';
import {PrescriptionListing} from '../prescription/screens/prescriptionListing.screen';

const Stack = createNativeStackNavigator();

export function PharmacyRoutes() {
    return (
        <Stack.Navigator initialRouteName="index" screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" component={PharmacyListing} />
            <Stack.Screen name="prescription" component={PrescriptionListing} />
            
        </Stack.Navigator>
    );
  }