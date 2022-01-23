import React, { Component } from 'react';

import { Text, TextInput, View } from "react-native";
import service from "../utils/request";
import styles from "../utils/style-sheet";
import { Ionicons } from '@expo/vector-icons';

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
                    {props.value["Name"]}
                </Text>
            </View>

            <Ionicons name="information-circle-outline"
                style={{
                    marginVertical: 12,
                }}

                onPress={
                    () => {
                        props.modalControl(true, props.value["Description"])
                    }
                }
            />
        </View >
    );

}

const ConsentItems = (props) => {

    var states = Object.fromEntries(
        props.values.map(
            (value) => ([value["Name"], React.useState(false)])
        )
    )

    var disabledStates = Object.fromEntries(
        props.values.map(
            (value) => ([value["Name"], React.useState(false)])
        )
    )

    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalContent, setModalContent] = React.useState("");
    const modalControl = (visible, content) => {
        setModalVisible(visible)
        setModalContent(content)
    }

    return (
        <View>
            <DHModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                message={modalContent}
            />

            <View>
                {
                    props.values.map(
                        (value) => {
                            return (
                                <ConsentItem
                                    modalControl={modalControl}
                                    key={value["Name"]}
                                    value={value}
                                    disabled={disabledStates[value["Name"]][0]}
                                    state={states[value["Name"]][0]}

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
                                        }
                                    }
                                />
                            )
                        }
                    )
                }
            </View>
        </View>

    )
}

function ProviderPage() {
    const consentStatements = require("./page_config.json").pageConfig.consentStatementItemsPro

    const [link, onChangeLink] = React.useState()
    const [consentStates, onChangeConsentStates] = React.useState({});
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalContent, setModalContent] = React.useState("");

    const retrieveToken = async () => {
        try {
            return await AsyncStorage.getItem("@token");
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

            <DHButton
                title="Upload"
                onPress={
                    () => {
                        var buff = { "link": link };
                        buff = Object.assign(buff, consentStates)

                        var token = retrieveToken();
                        service.defaults.headers.common["token"] = token;

                        service.post(
                            "/contract/dataUpload/",
                            buff
                        ).then(response => {
                            if (200 === response.error.code) {
                                setModalVisible(true)
                                setModalContent("Upload data successfully")
                            } else {
                                setModalVisible(true)
                                setModalContent(response.data.error.message)
                            }
                        }).catch(error => {
                            alert(error)
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