import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const RenderItem = ({ item }) => {

    const [flag, setFlag] = useState(true)

    if (flag === true) {
        return (
            <TouchableOpacity onPress={() => { setFlag(!flag) }}>
                <Text style={styles.listText}>{item.item.room}</Text>
            </TouchableOpacity>
        )
    }
    else {
        return (
            <TouchableOpacity onPress={() => { setFlag(!flag) }}>
                <Text style={styles.StatusText}>Check Booking Status</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    listText: {
        color: "rgb(140,140,140)",
        marginTop: 16,
        paddingVertical: 8,
        paddingLeft: 16,
        fontSize: 20,
    },
    StatusText: {
        color: "rgb(170,170,170)",
        marginTop: 16,
        fontWeight: "bold",
        paddingVertical: 8,
        paddingLeft: 16,
        fontSize: 20,
        backgroundColor: "rgb(100,100,100)"
    }
})
