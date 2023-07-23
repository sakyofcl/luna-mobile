import React from 'react';
import  FlashMessage from "react-native-flash-message";
import {coreStyles} from './style.core';

export const NotificationBox = () => {
    const NotificationBoxStyle = coreStyles.NotificationBox;
    return (
        <FlashMessage position={"top"} style={NotificationBoxStyle.container}/>
    );
};