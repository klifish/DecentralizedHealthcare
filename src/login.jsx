import axios from 'axios';
import React from 'react';
import { Text, Image, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';


function LoginPage({ navigation }) {

    const [username, onChangeUsername] = React.useState();
    const [password, onChangePassword] = React.useState();
    return (
        <View
            style={styles.container}
        >

            <Image
                style={
                    styles.logo
                }

                source={
                    require('../assets/luce.png')
                }
            />


            <TextInput
                style={styles.textInput}
                placeholder="Username: "
                onChangeText={onChangeUsername}
            />

            <TextInput
                style={styles.textInput}
                placeholder="Password:"
                onChangeText={onChangePassword}
            />

            <TouchableOpacity style={styles.touchableOpacityStyle} onPress={() => {

                // if (typeof (username) === 'undefined' || typeof (password) === 'undefined') {
                //     alert("Empty username or password")
                // }

                navigation.navigate("Role")

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
            }}>
                <Text
                    style={{
                        color: '#fff',
                        textAlign: "center"
                    }}
                >
                    Login
                </Text>

            </TouchableOpacity>

            <Text style={styles.text} onPress={() => navigation.navigate("Register")}
            >
                No account? register!
            </Text>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        textDecorationLine: "underline",
        padding: 10
    },

    touchableOpacityStyle: {
        padding: 10,
        margin: 12,
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#1E6738',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },

    logo: {
        width: 195,
        height: 47
    }
});

export default LoginPage;