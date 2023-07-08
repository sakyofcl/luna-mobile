import React from "react";
import { View, Image, TouchableNativeFeedback} from "react-native";
import { coreStyles } from "./style.core";
import HomeIcon from '../../assets/image/home-icon.png';
import UnitIcon from '../../assets/image/pulse-icon.png';
import ReceiptIcon from '../../assets/image/receipt-icon.png';
import ProfileIcon from '../../assets/image/profile-icon.png';
import {COLOR} from  '../enum/color';
import { CommonActions } from "@react-navigation/native";

export const BottomNavigation = (props) =>{
    const bottomNavigationStyles = coreStyles.bottomNavigation;
    const {navigation, state} = props;
    const navList = state.routes.map((route, index)=> ({...route, icon: getIcon(route.name), isActive: state.index === index}));

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
        <TouchableNativeFeedback onPress={onPress}>
            <View style={bottomNavigationStyles.navItem}>
                <Image source={route.icon} style={bottomNavigationStyles.navItemIcon} tintColor={ route.isActive ? COLOR.brandColor : COLOR.onPrimary} />
                {route.isActive && <View style={bottomNavigationStyles.navActiveIndicator}/>}
            </View>
        </TouchableNativeFeedback>
    );
}


const getIcon = (key) =>{
    switch(key){
        case 'home':
            return HomeIcon;
        case 'profile':
            return ProfileIcon;
        case 'unit':
            return UnitIcon;
        case 'pharmacy':
            return ReceiptIcon;
    }
}
