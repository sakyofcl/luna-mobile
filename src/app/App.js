import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
//import { LoginScreen } from "../modules/auth/screens/login.screen";
//import { PatientRegisterScreen } from "../modules/patient/screens/patientRegister.screen";
//import { HomeLandingScreen } from "../modules/home/screens/landing.screen";
//import { HomeScreen } from "../modules/home/screens/home.screen";
//import { UnitListing } from "../modules/unit/screens/unitListing.screen";
//import {AppointmentListing} from '../modules/appointment/screens/appointmentListing.screen';
import {PharmacyListing} from '../modules/pharmacy/screens/pharmacyListing.screen';
import {BottomNav} from '../core/components/bottomNav';
export const App = ()=>{
    return (
        <SafeAreaView style={{height:"100%", backgroundColor:"#fff"}}>
            <ScrollView>
                <PharmacyListing/>
            </ScrollView>
            <BottomNav/>
        </SafeAreaView>
    );
};
