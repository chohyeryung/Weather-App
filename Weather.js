import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

export default function Weather({ temp }) {
    return (
        <LinearGradient
            // Button Linear Gradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.container}>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons size={96} name="weather-lightning-rainy"></MaterialCommunityIcons>
            <Text style={styles.temp}>{temp}º</Text>
        </View>
        <View style={styles.halfContainer} />
        </LinearGradient>
    );
}

Weather.PropTypes = {
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        fontSize:42  
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})