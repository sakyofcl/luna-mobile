import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { coreStyles } from "../core/components/style.core";
import {AuthenticatedLayout} from '../app/layout/AuthenticatedLayout';
import { NotificationBox } from "../core/components/notificationBox";

export const App = ()=>{
    return (
        <NavigationContainer>
            <SafeAreaView style={coreStyles.appSafeArea}>
                <AuthenticatedLayout/>
                <NotificationBox/>
            </SafeAreaView>
        </NavigationContainer>
    );
};
