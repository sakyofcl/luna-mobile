import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { authStyles } from "../style.auth";
import AppLogo from '../../../assets/image/app-logo.png';

export const LoginScreen = ()=>{
    const loginStyle = authStyles.login;
    return (
        <View style={loginStyle.container}>
            
            <View style={loginStyle.appLogoArea}>
                <Image source={AppLogo} style={loginStyle.appLogoSize}/>
            </View>
            <View style={loginStyle.loginInfoMessage}>
                <Text style={loginStyle.loginInfoMessageTitle}>Log In Now</Text>
                <Text style={loginStyle.loginInfoMessageContent}>Please login to continue using our app</Text>
            </View>

            <View style={loginStyle.loginForm}>
                <TextInput placeholder="User Name" style={loginStyle.loginFormFeild}/>
                <TextInput placeholder="Password" style={loginStyle.loginFormFeild}/>
            </View>

            <View style={loginStyle.forgotPasswordArea}>
                <Text style={loginStyle.forgotPasswordAreaText}>Forgot Password?</Text>
            </View>

            <TouchableOpacity style={loginStyle.loginButton}> 
                <Text style={loginStyle.loginButtonFont}>
                    Log In
                </Text>
            </TouchableOpacity>

            <View style={loginStyle.signUpArea}>
                <Text style={loginStyle.signUpAreaContent}>Don't have an account ?</Text>
                <Text style={loginStyle.signUpButton}>Sign Up</Text>
            </View>

            
        </View>
    );
};