import React from "react";
import { View, Text, ScrollView, Image, TextInput } from "react-native";
import { homeStyles } from "../style.home";
import { HospitalCard } from "../../hospital/components/hospitalCard";
import Profile from '../../../assets/image/profile.jpg';
import SearchIcon from '../../../assets/image/search.png';

export const HomeScreen = (props)=>{
    const homeScreenStyle = homeStyles.homeScreen;

    return (
        <ScrollView style={homeScreenStyle.container}>
            <View style={homeScreenStyle.homeHeaderSection}>
                <View style={homeScreenStyle.greetingSection}>
                    <Text style={homeScreenStyle.greetingUser}>Hello Sakeen!</Text>
                    <Text style={homeScreenStyle.greetingMessage}>Find Your</Text>
                    <Text style={homeScreenStyle.greetingMessage}>Best Hospital</Text>
                </View>
                <View style={homeScreenStyle.profileSection}>
                    <Image source={Profile} style={homeScreenStyle.profileImage}/>
                </View>
            </View>

            <View style={homeScreenStyle.searchBox}>
                <Image source={SearchIcon} style={homeScreenStyle.searchIcon}/>
                <TextInput placeholder="Search your hospital" style={homeScreenStyle.searchInput} underlineColorAndroid="transparent" placeholderTextColor="#bcbcbc"/>
            </View>

            <View style={homeScreenStyle.sectionTitleBox}>
                <Text style={homeScreenStyle.sectionTitleText}>All Hospitals</Text>
            </View>

            <View style={homeScreenStyle.hospitalListBox}>
                <HospitalCard onClick={()=> props.navigation.navigate('home', {screen:'viewHospital'})}/>
                <HospitalCard onClick={()=> props.navigation.navigate('home', {screen:'viewHospital'})}/>
                <HospitalCard onClick={()=> props.navigation.navigate('home', {screen:'viewHospital'})}/>
            </View>

        </ScrollView>
    );
};