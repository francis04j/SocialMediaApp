import React, {useContext} from "react";
import {View, Text} from 'react-native';
import { ThemeContext } from "./ThemeContext";

const HomeScreen = () => {
    const isDarkMode = useContext(ThemeContext);

    return (
        <View style={{backgroundColor: isDarkMode ? '#222222' : '#FFFFFF'}}>
            <Text style={{color: isDarkMode ? '#FFFFFF' : '#222222'}}>Welcome to the homescreen</Text>
        </View>
    )
}

export default HomeScreen;