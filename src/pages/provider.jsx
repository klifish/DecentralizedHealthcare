import React, { Component } from 'react';

import { Text, TextInput, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import service from "../utils/request";
import styles from "../utils/style-sheet";
import { Ionicons } from '@expo/vector-icons';

import Checkbox from 'expo-checkbox';

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
                ></Checkbox>

                <Text
                    style={{ marginLeft: 12 }}
                >{props.value}</Text>
            </View>

            <Ionicons name="information-circle-outline" style={{
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
                                visible={true}

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
                                            // if (s != value) {
                                            //     states[s][1](!states[s][0])
                                            //     bufferStates[s] = !states[s][0]
                                            // } else {
                                            //     bufferStates[s] = states[s][0]
                                            // }
                                        }

                                        props.onChange(bufferStates);

                                        console.log(bufferStates)
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

    const [link, onChangeLink] = React.useState()
    const [consentStates, onChangeConsentStates] = React.useState({});

    const consentStatements = require("./page_config.json").pageConfig.consentStatementItems

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.textInput}
                placeholder="Please input a data link"
                onChangeText={onChangeLink}
            />

            <TouchableOpacity
                style={styles.touchableOpacityStyle}

                onPress={
                    () => {
                        var buff = { "link": link };
                        buff = Object.assign(buff, consentStates)

                        service.post(
                            "/contract/dataUpload/",
                            buff
                        ).then(response => {

                        }).catch(error => {

                        })
                    }
                }
            >

                <Text
                    style={
                        {
                            color: '#fff',
                            textAlign: "center"
                        }
                    }
                >
                    Upload
                </Text>
            </TouchableOpacity>

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