import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TextInput } from "react-native";
import { homeStyles } from "../style.home";
import { HospitalCard } from "../../hospital/components/hospitalCard";
import Profile from '../../../assets/image/profile.jpg';
import SearchIcon from '../../../assets/image/search.png';
import hospitalService from '../../hospital/service';

export const HomeScreen = (props)=>{
    const homeScreenStyle = homeStyles.homeScreen;
    const [items, setItems] = useState([]);
    
    useEffect(()=>{
        fetchAllHospital();
    },[]);

    const fetchAllHospital = ()=>{
        hospitalService.getFilteredHospital().then((data)=>{
            setItems(data);
        });
    }

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
                {items.map((e,i)=> <HospitalCard key={i} data={e} onClick={(id)=> props.navigation.navigate('home', {screen:'viewHospital', params: {hospitalId: id} })}/>)}
            </View>

        </ScrollView>
    );
};