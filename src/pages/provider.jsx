import React, { Component } from 'react';

import { Text, TextInput, TouchableNativeFeedbackComponent, TouchableOpacity, View } from "react-native";
import service from "../utils/request";
import styles from "../utils/style-sheet";
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Checkbox from 'expo-checkbox';
import DHButton from '../utils/dh-button';
import DHModal from '../utils/DHModal';

const ConsentItem = (props) => {
    return (
        <View style={{
            flexDirection: "row"
        }}>
            <View style={{
                flexDirection: 'row',
                margin: 12
            }}>
                <Checkbox
                    value={props.state}
                    disabled={props.disabled}
                    onValueChange={props.onPress}
                />

                <Text
                    style={{ marginLeft: 12 }}
                >
                    {props.value}
                </Text>
            </View>

            <Ionicons name="information-circle-outline"
                style={{
                    marginVertical: 12,
                }}

                onPress={() => {
                    alert("you pushed me")
                }}
            />
        </View >
    );

}

const ConsentItems = (props) => {
    

    var states = Object.fromEntries(
        props.values.map(
            (value) => ([value, React.useState(false)])
        )
    )

    var disabledStates = Object.fromEntries(
        props.values.map(
            (value) => ([value, React.useState(false)])
        )
    )

    return (
        <View>
            {
                props.values.map(
                    (value) => {
                        return (
                            <ConsentItem
                                key={value}
                                value={value}
                                disabled={disabledStates[value][0]}
                                state={states[value][0]}

                                onPress={
                                    () => {
                                        var bufferStates = states;
                                        for (var s in states) {
                                            if (s != value) {
                                                bufferStates[s] = states[s][0]
                                                disabledStates[s][1](!disabledStates[s][0])
                                            }
                                            else {
                                                states[s][1](!states[s][0])

                                                bufferStates[s] = !states[s][0]
                                            }
                                        }
                                        props.onChange(bufferStates);
                                        // console.log(bufferStates)
                                    }
                                }
                            />
                        )
                    }
                )
            }
        </View>
    )
}

function ProviderPage() {
    const consentStatements = require("./page_config.json").pageConfig.consentStatementItems

    const [link, onChangeLink] = React.useState()
    const [description, onChangeDesc] = React.useState()

    const [consentStates, onChangeConsentStates] = React.useState({});
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalContent, setModalContent] = React.useState("");

    const retrieveToken = async (token) => {
        try {
            const token = await AsyncStorage.getItem("@token");
            console.log("weird==="+token)
            return token
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>
            <DHModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                message={modalContent}
            />

            <TextInput
                style={styles.textInput}
                placeholder="Please input a data link"
                onChangeText={onChangeLink}
            />

            <TextInput
                style={styles.textInput}
                placeholder="Describe your dataset"
                onChangeText={onChangeDesc}
            />

            <DHButton
                title="Upload"
                onPress={
                    () => {
                        var buff = { "link": link, "description":description};
                        buff = Object.assign(buff, consentStates)

                        retrieveToken().then((tok) => {
                            console.log(tok)
                            var token = tok
                            console.log("token:")
                            console.log(token)
                            service.defaults.headers.common["Authorization"] = "Token "+token;

                            service.post(
                                "/contract/dataUpload/",
                                buff
                            ).then(response => {
                                if (200 === response.data.error.code) {
                                    setModalVisible(true)
                                    setModalContent("Upload data successfully")
                                } else {
                                    setModalVisible(true)
                                    setModalContent(response.data.error.message)
                                }
                            }).catch(error => {
                                alert(error)
                            })
                        })
                        
                    }
                }
            ></DHButton>

            <View
                style={{ flex: 1 }}
            >
                <ConsentItems
                    values={consentStatements}
                    onChange={
                        onChangeConsentStates
                    }
                />
            </View>
        </View>
    );
}

export default ProviderPage;