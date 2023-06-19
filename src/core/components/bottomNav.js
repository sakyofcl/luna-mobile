import React from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";
import { coreStyles } from "./style.core";

export const BottomNav = () =>{
    const bottomNavStyle = coreStyles.bottomNav;
    return (
        <View style={bottomNavStyle.container}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#cecece")}>
                <View style={bottomNavStyle.navItem}>
                    <Text>🏠</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#cecece")}>
                <View style={bottomNavStyle.navItem}>
                    <Text>🏥</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#cecece")}>
                <View style={bottomNavStyle.navItem}>
                    <Text>💊</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#cecece")}>
                <View style={bottomNavStyle.navItem}>
                    <Text>🧑</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}