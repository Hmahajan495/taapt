import React, { useState, useContext } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from "react-native"
import { TextInput } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { UserContext } from '../serivces/user.services';

export const LoginComponent = () => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState(null)
    const { setUser } = useContext(UserContext)

    const check = (e, p) => {
        setError(null)
        if (e === "") {
            setError("Email field empty!!")
            return
        }
        if (p === "") {
            setError("Password field empty!!")
            return
        }
        setUser({ Email: e, Password: p })
    }

    return (
        <>
            <View style={{ flexDirection: "row", paddingLeft: 32 }}>
                <Ionicons name="mail" size={30} color="rgb(140,140,140)" style={{ paddingRight: 8, paddingTop: 8 }} />
                <TextInput
                    placeholder='Email'
                    style={styles.Login}
                    onChangeText={(t) => setEmail(t)}
                    theme={{
                        colors: {
                            placeholder: 'rgb(140,140,140)', text: 'rgb(140,140,140)', underlineColor: "black"
                        }
                    }}
                />
            </View>
            <View style={{ flexDirection: "row", paddingLeft: 32, paddingTop: 32 }}>
                <MaterialIcons name="lock" size={30} color="rgb(140,140,140)" style={{ paddingRight: 8, paddingTop: 8 }} />
                <TextInput
                    placeholder='Password'
                    style={styles.Login}
                    onChangeText={(t) => setPass(t)}
                    theme={{
                        colors: {
                            placeholder: 'rgb(140,140,140)', text: 'rgb(140,140,140)', underlineColor: "black"
                        }
                    }}
                />
            </View>
            <TouchableHighlight style={styles.Button} onPress={() => check(email, pass)}>
                <Text style={styles.LoginButton}>Login</Text>
            </TouchableHighlight>
            {error ?
                (
                    <Text style={styles.TextError}>{error}</Text>
                ) :
                (<></>)}
        </>
    )
}

const styles = StyleSheet.create({
    Login: {
        backgroundColor: "black",
        height: 50,
        width: 280,
        borderRadius: 8
    },
    Button: {
        paddingTop: 50
    },
    LoginButton: {
        color: 'rgb(140,140,140)',
        fontSize: 20,
        marginHorizontal: 128,
        paddingVertical: 16,
        borderRadius: 8,
        textAlign: "center",
        backgroundColor: 'rgb(20,20,20)'
    },
    TextError: {
        paddingTop: 16,
        color: "rgb(200,150,150)"
    }
})