import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from './screens/home.screen';
import {ViewHospitalScreen} from '../hospital/screens/viewHospital.screen';

const Stack = createNativeStackNavigator();

export function HomeRoutes() {
    return (
        <Stack.Navigator initialRouteName="index" screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" component={HomeScreen} />
            <Stack.Screen name="viewHospital" component={ViewHospitalScreen} />
        </Stack.Navigator>
    );
  }