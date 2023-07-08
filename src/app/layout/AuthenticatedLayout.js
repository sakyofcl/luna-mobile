import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {BottomNavigation} from '../../core/components/bottomNavigation';
import {AppointmentListing} from '../../modules/appointment/screens/appointmentListing.screen';
import { coreStyles } from "../../core/components/style.core";
import { HomeRoutes } from "../../modules/home/routes";
import { UnitRoutes } from "../../modules/unit/routes";
import { PharmacyRoutes } from "../../modules/pharmacy/routes";

export const AuthenticatedLayout = () =>{
    const Tab = createBottomTabNavigator();
    const authenticatedLayoutStyles = coreStyles.authenticatedLayout;
    
    return (
        <View style={authenticatedLayoutStyles.container}>
            <Tab.Navigator tabBar={(props) => <BottomNavigation {...props} />} screenOptions={{headerShown: false}}>
                <Tab.Screen name="home" component={HomeRoutes}  />
                <Tab.Screen name="unit" component={UnitRoutes} />
                <Tab.Screen name="pharmacy" component={PharmacyRoutes} />
                <Tab.Screen name="profile" component={AppointmentListing} />
            </Tab.Navigator>
        </View>
    );
};
