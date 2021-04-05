import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

//각 날씨에 대한 아이콘, 배경 색
const weatherOptions = {
    Haze: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Thunderstorm : {
        iconName:"weather-lightning",
        gradient: ["#000000", "#e74c3c"]
    }, 
    Drizzle:{
        iconName:"weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    }, 
    Rain:{
        iconName:"weather-rainy",
        gradient: ["#2193b0", "#6dd5ed"]
    }, 
    Snow:{
        iconName:"weather-snowy",
        gradient: ["#D3CCE3", "#E9E4F0"]
    }, 
    Atmosphere:{
        iconName:"weather-hail",
        gradient: ["#C9D6FF", "#E2E2E2"]
    }, 
    Clear:{
        iconName:"weather-sunny",
        gradient: ["#FF7300", "#FEF253"]
    }, 
    Clouds:{
        iconName:"weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"]
    },
    Mist:{
        iconName:"weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Dust:{
        iconName:"weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    }
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            // Button Linear Gradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
                <StatusBar barStyle="light-content"/>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons 
                size={96} 
                name={weatherOptions[condition].iconName }
                color="white"
            />
            <Text style={styles.temp}>{temp}º</Text>
        </View>
        <View style={styles.halfContainer} >
            <Text style={styles.title}>Title</Text>
            <Text style={styles.subtitle}>SubTitle</Text>
        </View>
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
        fontSize:42,
        color:"white"  
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color:"white",
        fontSize:44,
        fontWeight:"300",
        marginBottom:10
    },
    subtitle:{
        fontWeight:"600",
        color:"white",
        fontSize:24
    }
})