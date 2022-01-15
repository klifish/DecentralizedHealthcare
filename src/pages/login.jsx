import React from 'react';
import { Modal, Text, Image, TextInput, View, TouchableOpacity, SafeAreaView, Pressable } from 'react-native';

// import { API_URL, API_TOKEN } from "react-native-dotenv";
import AsyncStorage from '@react-native-async-storage/async-storage';

import service from '../utils/request';
import styles from '../utils/style-sheet';
import DHButton from '../utils/dh-button';

const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const TOKEN_KEY = '@token'

const saveToken = async (token) => {
    try {
        await AsyncStorage.setItem(TOKEN_KEY, token);
    } catch (e) {
        alert('Failed to save the data to the storage')
    }
}

// const retrieveToken = 

function MyModal(props) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                props.setModalVisible(!props.modalVisible);
            }}
        >

            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                }}
            >
                <View style={{
                    margin: 20,
                    backgroundColor: "white",
                    borderRadius: 20,
                    padding: 35,
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                }}>
                    <Text
                        style={{
                            marginBottom: 15,
                            textAlign: "center"
                        }}
                    >{props.message}</Text>
                    <Pressable
                        style={{
                            borderRadius: 20,
                            padding: 10,
                            elevation: 2,
                            backgroundColor: "#2196F3"
                        }}
                        onPress={() => props.setModalVisible(!props.modalVisible)}
                    >
                        <Text
                            style={{
                                fontWeight: "bold",
                                textAlign: "center"
                            }}
                        >
                            OK
                        </Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

function LoginPage({ navigation }) {

    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalContent, setModalContent] = React.useState("");
    // const [token, save]

    const saveToken = async (token) => {
        try {
            await AsyncStorage.setItem("@token", token)
        } catch (err) {
            console.log(err)
        }
    }

    const retrieveToken = async (token) => {
        try {
            return await AsyncStorage.getItem("@token");
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={[styles.container, {
            justifyContent: 'center',
        }]}>

            <MyModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                message={modalContent}
            />

            <View style={{
                alignItems: "center",
                margin: 12
            }}>
                <Image style={{
                    width: 195,
                    height: 47,
                }}
                    source={require('../../assets/luce.png')}
                />
            </View>

            <View>
                <TextInput style={
                    styles.textInput
                }

                    placeholder="Username: "

                    onChangeText={
                        onChangeUsername
                    }
                />

                <TextInput style={
                    styles.textInput
                }

                    placeholder="Password:"

                    onChangeText={
                        onChangePassword
                    }
                />
            </View>

            <DHButton title="Login"
                onPress={() => {
                    console.log(API_URL)
                    if (0 === username.length || 0 === password.length) {
                        setModalVisible(true)
                        setModalContent("Please type username AND password")
                        return
                    }

                    if (!emailReg.test(username)) {
                        setModalVisible(true)
                        setModalContent("Please type correct username (Email address)")
                        return
                    }

                    var loginData = {
                        "username": username,
                        "password": password
                    }

                    service.post(
                        "/usr/login",
                        loginData
                    ).then(response => {
                        if (200 === response.data.error.code) {
                            saveToken(response.data.token);
                            navigation.navigate("What do you want to do?")
                        } else {
                            setModalVisible(true)
                            setModalContent(response.data.error.message)
                            return
                        }
                    }).catch(error => {
                        alert(error)
                    })
                }}
            />

            <View style={{ alignItems: "flex-end" }}>
                <Text style={{
                    textDecorationLine: "underline",
                    padding: 10,
                    margin: 12
                }}
                    onPress={() => navigation.navigate("Register")}
                >
                    No account? register!
                </Text>
            </View>
        </View >
    );
}

export default LoginPage;