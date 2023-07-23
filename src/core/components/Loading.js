import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import {coreStyles} from './style.core';
import LoaderAnimation from '../../assets/image/loader-animation.gif';

export const Loading = (props) => {
    const loadingStyle = coreStyles.Loading;
    return (
        props.showLoading || true  ?
            <View style={loadingStyle.container} >
                <ImageBackground source={require('../../assets/image/loader-animation.gif')} style={loadingStyle.loaderAnimation}/> 
            </View>
        : <View/>
    );
};