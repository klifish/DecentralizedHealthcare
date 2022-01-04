import React from 'react';
import { Text, Image, TextInput, View, TouchableOpacity, SafeAreaView } from 'react-native';

import service from '../utils/request';
import styles from '../utils/style-sheet';


function LoginPage({ navigation }) {

    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    return (
        <View style={styles.container}>
            <View style={{
                alignItems: "center",
                margin: 12
            }}>
                <Image style={{
                    width: 195,
                    height: 47,
                }} source={require('../../assets/luce.png')}
                />
            </View>


            <View>
                <TextInput
                    style={
                        styles.textInput
                    }

                    placeholder="Username: "

                    onChangeText={
                        onChangeUsername
                    }
                />

                <TextInput
                    style={
                        styles.textInput
                    }

                    placeholder="Password:"

                    onChangeText={
                        onChangePassword
                    }
                />

            </View>

            <TouchableOpacity
                style={
                    styles.touchableOpacityStyle
                }

                onPress={
                    () => {
                        if (0 === username.length || 0 === password.length) {
                            alert("Empty username or password")
                            return
                        }

                        console.log(typeof (username))

                        // navigation.navigate("What do you want to do?")

                        // if (typeof (username) === 'undefined' || typeof (password) === 'undefined') {
                        //     alert("Empty username or password")
                        //     return
                        // }

                        // var loginData = {
                        //     "username": username,
                        //     "password": password
                        // }

                        // service.post(
                        //     "/usr/login",
                        //     loginData
                        // ).then(response => {
                        //     if (200 === response.data.error.code) {
                        //         navigation.navigate("Role")
                        //     } else {
                        //         alert(response.data.error.message)

                        //     }
                        // }).catch(error => {
                        //     console.log("hello world")
                        //     console.log(error)
                        //     alert(error)
                        // })
                    }
                }>

                <Text
                    style={
                        {
                            color: '#fff',
                            textAlign: "center"
                        }
                    }>
                    Login
                </Text>

            </TouchableOpacity>

            <View
                style={{ alignItems: "flex-end" }}
            >

                <Text
                    style={
                        {
                            textDecorationLine: "underline",
                            padding: 10,
                            margin: 12
                        }
                    }

                    onPress={
                        () => navigation.navigate("Register")
                    }
                >
                    No account? register!
                </Text>
            </View>


        </View >
    );
}

export default LoginPage;