import React, { useContext } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, FlatList, TouchableHighlight } from "react-native"
import { RenderItem } from '../components/listRender.components'
import { Ionicons } from '@expo/vector-icons';
import { UserContext } from '../serivces/user.services';

export const HomeScreen = () => {

    const data = [
        {
            room: "T101"
        }, {
            room: "T102"
        }, {
            room: "T103"
        }, {
            room: "T104"
        }, {
            room: "T105"
        }, {
            room: "T201"
        }, {
            room: "T202"
        }, {
            room: "T203"
        }
    ]

    const { setUser } = useContext(UserContext)

    return (
        <SafeAreaView style={styles.Container}>
            <View style={{ flexDirection: "row" }}>
                <TouchableHighlight onPress={() => <></>}>
                    <Ionicons name="menu-outline" size={35} style={styles.IconStyle} />
                </TouchableHighlight>
                <Text style={styles.Title}>Room Allotment</Text>
            </View>
            <FlatList
                data={data}
                renderItem={(item) => <RenderItem item={item} />}
                keyExtractor={item => item.room}
            />
            <TouchableHighlight onPress={() => { setUser(null) }}>
                <Text style={styles.Logout}>Log Out</Text>
            </TouchableHighlight>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "black",
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    Title: {
        color: "rgb(140, 140, 140)",
        paddingTop: 16,
        paddingLeft: 16,
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 32
    },
    listText: {
        color: "rgb(140,140,140)",
        paddingTop: 32,
        paddingLeft: 16,
        fontSize: 20,
    },
    IconStyle: {
        color: "rgb(140, 140, 140)",
        paddingTop: 12,
        paddingLeft: 16

    },
    Logout: {
        textAlign: "center",
        backgroundColor: "rgb(20,20,20)",
        color: "rgb(140, 140, 140)",
        marginHorizontal: 128,
        padding: 10,
        borderRadius: 8,
        fontSize: 20,
        marginBottom: 80
    }
})