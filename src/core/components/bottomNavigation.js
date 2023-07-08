import React from "react";
import { View, Image, TouchableNativeFeedback, Text} from "react-native";
import { coreStyles } from "./style.core";
import HomeIcon from '../../assets/image/home-heart.png';
import HomeIconFilled from '../../assets/image/home-heart-filled.png';
import UnitIcon from '../../assets/image/pulse-icon.png';
import UnitIconFilled from '../../assets/image/pulse-filled.png';
import PharmacyIcon from '../../assets/image/medicine.png';
import PharmacyIconFilled from '../../assets/image/medicine-filled.png';
import ProfileIcon from '../../assets/image/profile-icon.png';
import ProfileIconFilled from '../../assets/image/profile-icon-filled.png';
import {COLOR} from  '../enum/color';
import { CommonActions } from "@react-navigation/native";

export const BottomNavigation = (props) =>{
    const bottomNavigationStyles = coreStyles.bottomNavigation;
    const {navigation, state} = props;
    const navList = state.routes.map((route, index)=> {
        const isActive = state.index === index;
        return {...route, icon: getIcon(route.name, isActive), isActive};
    });

    return (
        <View style={bottomNavigationStyles.container}>
            {navList.map((route, i)=> <NavigationItem route={route} navigation={navigation} key={i} />)}
        </View>
    );
}


const NavigationItem = (props) =>{
    const {route, navigation} = props;
    const bottomNavigationStyles = coreStyles.bottomNavigation;
    const onPress = ()=>{
        navigation.dispatch(CommonActions.reset({index:0, routes:[{name: route.name}]}));
    };
    return (
        <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple('#cedeff')}>
            <View style={bottomNavigationStyles.navItem}>
                <Image source={route.icon} style={bottomNavigationStyles.navItemIcon} tintColor={ route.isActive ? COLOR.brandColor : COLOR.onPrimaryLight} />
                <Text style={{...bottomNavigationStyles.navItemLabel, color: route.isActive ? COLOR.brandColor : COLOR.onPrimaryLight}}>{route.name}</Text>
            </View>
        </TouchableNativeFeedback>
    );
}


const getIcon = (key, isActive) =>{
    switch(key){
        case 'home':
            return isActive ? HomeIconFilled : HomeIcon ;
        case 'profile':
            return isActive ? ProfileIconFilled : ProfileIcon ;
        case 'unit':
            return isActive ? UnitIconFilled : UnitIcon;
        case 'pharmacy':
            return isActive ? PharmacyIconFilled : PharmacyIcon;
    }
}
