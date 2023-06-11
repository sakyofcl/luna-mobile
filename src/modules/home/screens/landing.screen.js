import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { homeStyles } from "../style.home";
import AppLogo from '../../../assets/image/app-logo.png';
import LandingImage from '../../../assets/image/landing-screen-image.jpg';

export const HomeLandingScreen = ()=>{
    const landingScreenStyle = homeStyles.landingScreen;

    return (
        <View style={landingScreenStyle.container}>
            <View style={landingScreenStyle.appLogoArea}>
                <Image source={AppLogo} style={landingScreenStyle.appLogoSize}/>
            </View>

            <View style={landingScreenStyle.landingImageArea}>
                <Image source={LandingImage} style={landingScreenStyle.landingImage}/>
            </View>

            <View style ={landingScreenStyle.welcomeMessageArea}>
                <Text style ={landingScreenStyle.welcomeMessageTitle}>Welcome</Text>
                <Text style ={landingScreenStyle.welcomeMessageContent}>Create an account and quickly consult a doctor!</Text>
            </View>

            <TouchableOpacity style={landingScreenStyle.gettingStartButton}> 
                <Text style={landingScreenStyle.gettingStartButtonFont}>
                    Getting Started
                </Text>
            </TouchableOpacity>

            <View style={landingScreenStyle.signInArea}>
                <Text style={landingScreenStyle.signInAreaContent}>Already have an account ?</Text>
                <Text style={landingScreenStyle.signInButton}>Log In</Text>
            </View>
        </View>
    );
};