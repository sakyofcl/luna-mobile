import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DrawingBoard } from "../../../core/components/drawingBoard";


export const Dummy = ()=>{
    return (
        <View style={style.container}>
            <DrawingBoard height={500} width={400}/>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF'
    }
});