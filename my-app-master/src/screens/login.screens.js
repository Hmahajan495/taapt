import React from 'react'
import { Text, View, StyleSheet, StatusBar, SafeAreaView, Platform, Image } from "react-native";
import { DropdownComponent } from '../components/dropdown.components';
import { LoginComponent } from '../components/login.components';

export const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.Wrapper}>
            <Text style={styles.TextWrapper}>Room Allotment</Text>
            <View style={styles.ImageContainer}>
                <Image style={styles.Img} source={require('../../assets/logo.jpg')} />
            </View>
            <View style={{ flexDirection: "row", marginBottom: 64 }}>
                <Text style={styles.ChooseTextWrapper}>Choose your society:   </Text>
                <DropdownComponent />
            </View>
            <LoginComponent />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Wrapper: {
        flex: 1,
        backgroundColor: "black",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    TextWrapper: {
        color: "rgb(140, 140, 140)",
        paddingTop: 16,
        paddingLeft: 16,
        fontSize: 20,
        fontWeight: "bold"
    },
    ChooseTextWrapper: {
        color: "rgb(110, 110, 110)",
        paddingTop: 16,
        paddingLeft: 32,
        fontSize: 16,
        fontWeight: "bold"
    },
    Img: {
        height: 150,
        width: 200
    },
    ImageContainer: {
        alignItems: "center",
        paddingVertical: 50
    }
})