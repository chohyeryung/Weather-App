import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function Loading(){
    return <View style={styles.container}>
        <Text style={styles.text}>Getting the wonderful weather</Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f8f7bd",
        justifyContent : "flex-end",
        paddingHorizontal:30,
        paddingVertical:100,
    },
    text:{
        fontSize:30,
        color:"#2c2c2c",
    }
});