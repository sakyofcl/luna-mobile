import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity} from "react-native";
import CheckBox from 'expo-checkbox';
import { patientStyles } from "../style.patient";
import AppLogo from '../../../assets/image/app-logo.png';

export const PatientRegisterScreen = ()=>{
    const registerStyle = patientStyles.register;
    return (
        <View style={registerStyle.container}>
            
            <View style={registerStyle.appLogoArea}>
                <Image source={AppLogo} style={registerStyle.appLogoSize}/>
            </View>
            <View style={registerStyle.registerInfoMessage}>
                <Text style={registerStyle.registerInfoMessageTitle}>Sign Up Now</Text>
                <Text style={registerStyle.registerInfoMessageContent}>Please fill the details and create patient account</Text>
            </View>

            <View style={registerStyle.registerForm}>
                <TextInput placeholder="User Name" placeholderTextColor="#a0a0a0" style={registerStyle.registerFormFeild}/>
                <TextInput placeholder="Password" placeholderTextColor="#a0a0a0" style={registerStyle.registerFormFeild}/>
                <TextInput placeholder="Confirm Password" placeholderTextColor="#a0a0a0" style={registerStyle.registerFormFeild}/>
                <TextInput placeholder="Contact No" placeholderTextColor="#a0a0a0" style={registerStyle.registerFormFeild}/>
                <TextInput placeholder="Email" placeholderTextColor="#a0a0a0" style={registerStyle.registerFormFeild}/>
                <TextInput placeholder="Address" placeholderTextColor="#a0a0a0" style={registerStyle.registerFormFeild}/>
                <View style={registerStyle.patientGenderArea}>
                    <CheckBox value={true}/>
                    <Text style={registerStyle.patientGenderLabel}>Male</Text>
                    <CheckBox value={false}/>
                    <Text style={registerStyle.patientGenderLabel}>Female</Text>
                </View>
            </View>

            <TouchableOpacity style={registerStyle.registerButton}> 
                <Text style={registerStyle.registerButtonFont}>
                    Register
                </Text>
            </TouchableOpacity>

            <View style={registerStyle.signInArea}>
                <Text style={registerStyle.signInAreaContent}>Already have an account ?</Text>
                <Text style={registerStyle.signInButton}>Log In</Text>
            </View>

        </View>
    );
};