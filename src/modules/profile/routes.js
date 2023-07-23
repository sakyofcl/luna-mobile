import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ProfileScreen} from './screens/profile.screen';
import {DoctorFloatListing} from '../doctor/screens/doctorFloatListing';
import {ConsultingUnitFloatListing} from '../unit/screens/consultingUnitFloatListing';
import {PharmacyFloatListing} from '../pharmacy/screens/pharmacyFloatListing';
import {PharmacistFloatListing} from '../pharmacist/screens/pharmacistFloatListing';
import {ManageDoctor} from '../doctor/screens/manageDoctor';
import { ManageConsultingUnit } from '../unit/screens/manageConsultingUnit';
import { ManagePharmacy } from '../pharmacy/screens/managePharmacy';
import { ManagePharmacist } from '../pharmacist/screens/managePharmacist';
const Stack = createNativeStackNavigator();

export function ProfileRoutes() {
    return (
        <Stack.Navigator initialRouteName="index" screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" component={ProfileScreen} />
            <Stack.Screen name="doctor" component={DoctorFloatListing} />
            <Stack.Screen name="unit" component={ConsultingUnitFloatListing} />
            <Stack.Screen name="pharmacy" component={PharmacyFloatListing} />
            <Stack.Screen name="pharmacist" component={PharmacistFloatListing} />
            
            <Stack.Screen name="manageDoctor" component={ManageDoctor} />
            <Stack.Screen name="manageUnit" component={ManageConsultingUnit} />
            <Stack.Screen name="managePharmacy" component={ManagePharmacy} />
            <Stack.Screen name="managePharmacist" component={ManagePharmacist} />
        </Stack.Navigator>
    );
}