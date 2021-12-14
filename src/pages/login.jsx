import React from 'react';
import { Text, Image, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';

import service from '../utils/request';
import styles from '../utils/style-sheet';


function LoginPage({ navigation }) {

    const [username, onChangeUsername] = React.useState();
    const [password, onChangePassword] = React.useState();
    return (
        <View
            style={
                styles.container
            }>

            <Image
                style={
                    {
                        width: 195,
                        height: 47
                    }
                }

                source={
                    require('../../assets/luce.png')
                }
            />

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

            <TouchableOpacity
                style={
                    styles.touchableOpacityStyle
                }

                onPress={
                    () => {

                        if (typeof (username) === 'undefined' || typeof (password) === 'undefined') {
                            alert("Empty username or password")
                        }

                        var loginData = {
                            "username": username,
                            "password": password
                        }

                        // navigation.navigate("Role")

                        service.post(
                            "/usr/login", {
                            loginData
                        }
                        ).then(response => {
                            console.log(response)
                        })

                        // axios({
                        //     method: "post",
                        //     url: "/user/login",
                        //     data: {
                        //         username: username,
                        //         password: password
                        //     }
                        // })
                        //     .then(res => {
                        //         navigation.navigate("Role")
                        //     })
                        //     .catch(err => { })
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

            <Text
                style={
                    {
                        textDecorationLine: "underline",
                        padding: 10
                    }
                }

                onPress={
                    () => navigation.navigate("Register")
                }
            >
                No account? register!
            </Text>
        </View >
    );
}

export default LoginPage;