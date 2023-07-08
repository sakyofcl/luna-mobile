import React from "react";
import { View, TouchableNativeFeedback, Image } from "react-native";
import { coreStyles } from "./style.core";
import HomeIcon from '../../assets/image/home.png';
import ProfileIcon from '../../assets/image/user.png';
import PharmacyIcon from '../../assets/image/pharmacy.png';
import UnitIcon from '../../assets/image/doctor-bag.png';


export const BottomNav = ({ state, navigation }) =>{
    const bottomNavStyle = coreStyles.bottomNav;
 
    const onPressNavItem = (route, isFocused) => {
        const event = navigation.emit({type: 'tabPress', target: route.key});
        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
    };

    const renderNavItem = (routes)=>{
        return routes.map((route, index)=>{
            const isFocused = state.index === index;
            return <NavItem icon={HomeIcon} key={index} routeName={route.name} isActive={isFocused} onPress={()=> onPressNavItem(route, isFocused)}/>;
        });
    };

    return (
        <View style={bottomNavStyle.container}>
            {renderNavItem(state.routes)}
        </View>
    );
}

const NavItem = ({isActive, routeName, onPress}) =>{
    const bottomNavStyle = coreStyles.bottomNav;
    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#cecece")} onPress={onPress}> 
            <View style={bottomNavStyle.navItem}>
                <Image source={getIcon(routeName)} style={{...bottomNavStyle.navItemIcon, ...(isActive ? bottomNavStyle.navItemActiveIcon : {})}}/>
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
            return PharmacyIcon;
    }
}
