import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {UnitListing} from './screens/unitListing.screen';

const Stack = createNativeStackNavigator();

export function UnitRoutes() {
    return (
        <Stack.Navigator initialRouteName='index'>
            <Stack.Screen name="index" component={UnitListing} />
        </Stack.Navigator>
    );
  }