import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types"; //proptypes는 전달받은 데이터 유효성을 검증하기 위해 - 타입체크
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

//각 날씨에 대한 아이콘, 배경 색
const weatherOptions = {
    Haze: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Haze",
        subtitle:"Just don't go outside."
    },
    Thunderstorm : {
        iconName:"weather-lightning",
        gradient: ["#000000", "#e74c3c"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    }, 
    Drizzle:{
        iconName:"weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain"
    }, 
    Rain:{
        iconName:"weather-rainy",
        gradient: ["#2193b0", "#6dd5ed"],
        title: "Raining like a MF",
        subtitle: "For more info look outside"
    }, 
    Snow:{
        iconName:"weather-snowy",
        gradient: ["#D3CCE3", "#E9E4F0"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no."
    }, 
    Atmosphere:{
        iconName:"weather-hail",
        gradient: ["#C9D6FF", "#E2E2E2"],
        title: "Atmosphere",
        subtitle: "Thanks a lot China 😷"
    }, 
    Clear:{
        iconName:"weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Sunny as Sunny",
        subtitle: "Go get your ass burnt"
    }, 
    Clouds:{
        iconName:"weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Clouds",
        subtitle: "I know, fucking boring"
    },
    Mist:{
        iconName:"weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist!",
    subtitle: "It's like you have no glasses on."
    },
    Dust:{
        iconName:"weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dusty",
        subtitle: "Thanks a lot China 😷"
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
        {/* 여러개의 style을 적용하기 위해 ...을 붙임 */}
        <View style={{...styles.halfContainer, ...styles.textContainer}} >
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
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
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems:"flex-start"
    }
})