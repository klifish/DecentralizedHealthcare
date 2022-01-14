import React from 'react';
import { Modal, Text, Image, TextInput, View, TouchableOpacity, SafeAreaView, Pressable } from 'react-native';

import service from '../utils/request';
import styles from '../utils/style-sheet';

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

    var msg = "Please input username AND password"
    return (
        <View style={
            [
                styles.container,
                {
                    justifyContent: 'center',
                }
            ]
        }>

            <MyModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                message={modalContent}
            />

            <View style={{
                alignItems: "center",
                margin: 12
            }}>
                <Image
                    style={{
                        width: 195,
                        height: 47,
                    }}

                    source={require('../../assets/luce.png')}
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

                        var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


                        if (0 === username.length || 0 === password.length) {
                            setModalVisible(true)
                            setModalContent("Please type username AND password")
                            return
                        }

                        if (!emailReg.test(username)) {
                            setModalVisible(true)
                            setModalContent("Please type correct username")
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
                                navigation.navigate("What do you want to do?")
                            } else {
                                alert(response.data.error.message)

                            }
                        }).catch(error => {
                            console.log("hello world")
                            console.log(error)
                            alert(error)
                        })

                        navigation.navigate("What do you want to do?")
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