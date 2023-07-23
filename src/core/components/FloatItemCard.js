import React from 'react';
import { View, Text, TouchableNativeFeedback, Image } from 'react-native';
import { coreStyles } from "./style.core";
import ArrowIcon from '../../assets/image/angle-small-right.png';

export const FloatItemCard = (props)=>{
    const floatItemCardStyles = coreStyles.floatItemCard;
    return (
        <TouchableNativeFeedback onPress={props.onClick} background={TouchableNativeFeedback.Ripple("#cecece")} style={floatItemCardStyles.floatCardWrapper}>
            <View style={floatItemCardStyles.floatCardItem}> 
                <View style={floatItemCardStyles.floatCardContentWrapper}>
                    <Text style={floatItemCardStyles.title} >{props.title}</Text>
                    <Text style={floatItemCardStyles.subTitle} >{props.subTitle}</Text>
                </View>
                <Image source={ArrowIcon} style={floatItemCardStyles.floatCardArrowIcon}/>
            </View>
        </TouchableNativeFeedback>
    )
};
