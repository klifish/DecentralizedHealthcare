import React from 'react';
import { Modal, Text, Image, TextInput, View, TouchableOpacity, SafeAreaView, Pressable } from 'react-native';

import service from '../utils/request';
import styles from '../utils/style-sheet';


function MyModal(props) {
    // const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    props.setModalVisible(!props.modalVisible);
                }}
            >

                <View>

                    <Text>{props.message}</Text>
                    <Pressable
                        onPress={() => props.setModalVisible(!props.modalVisible)}
                    >

                        <Text>OK</Text>

                    </Pressable>
                </View>
            </Modal>

            <Pressable
                onPress={() => props.setModalVisible(true)}
            >
                <Text>Show Modal</Text>
            </Pressable>

        </View>
    )
}

function LoginPage({ navigation }) {

    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [modalVisible, setModalVisible] = React.useState(false);


    var msg = "hello world"
    return (
        <MyModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            message={msg}
        />
    )
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
                            alert("Please input username and password")
                            return
                        }

                        // console.log(typeof (username))

                        navigation.navigate("What do you want to do?")

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