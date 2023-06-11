import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
//import { LoginScreen } from "../modules/auth/screens/login.screen";
//import { PatientRegisterScreen } from "../modules/patient/screens/patientRegister.screen";
import { HomeLandingScreen } from "../modules/home/screens/landing.screen";

export const App = ()=>{
    return (
        <SafeAreaView style={{height:"100%", backgroundColor:"#fff"}}>
            <ScrollView>
                <HomeLandingScreen/>
            </ScrollView>
        </SafeAreaView>
    );
};
