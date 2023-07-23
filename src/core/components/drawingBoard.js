import React,{createRef, useState} from "react";
import Canvas from 'react-native-canvas';
import {coreStyles} from './style.core';
import { View} from "react-native";

export const DrawingBoard = ()=> {
    const [dimension, setDimension]= useState({height:0, width:0});
    const canvas = createRef();
    const drawingBoardStyle = coreStyles.drawingBoard;

    const handleCanvas = (c)=>{
      if(c != null){
        canvas.current = c.getContext('2d');
        canvas.current.canvas.height = dimension.height;
        canvas.current.canvas.width = dimension.width;
      }
    };

    const onTouchMove = (e)=>{
      canvas.current.lineTo(e.nativeEvent.locationX, e.nativeEvent.locationY);
      canvas.current.moveTo(e.nativeEvent.locationX, e.nativeEvent.locationY);
      canvas.current.stroke();
    }

    const onTouchDown = (e)=>{
      canvas.current.beginPath();
      canvas.current.moveTo(e.nativeEvent.locationX, e.nativeEvent.locationY);
    };

    const onLayout = (e)=>{
      const {height, width} = e.nativeEvent.layout;
      setDimension({height, width});
    }

    return (
      <View onLayout={onLayout} onResponderGrant={(e)=>{
        console.log('toch start');
      }} onMoveShouldSetResponder={onTouchMove} onStartShouldSetResponder={onTouchDown} style={drawingBoardStyle.container}>
        <Canvas ref={handleCanvas}/>
      </View>
    )
};