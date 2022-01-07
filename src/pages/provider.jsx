import React, { Component } from 'react';

import { Text, TextInput, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import service from "../utils/request";
import styles from "../utils/style-sheet";
import { Ionicons } from '@expo/vector-icons';

import Checkbox from 'expo-checkbox';

const ConsentItem = (props) => {

    if (props.visible) {
        return (
            <View
                style={{
                    flexDirection: "row"
                }}
            >
                <BouncyCheckbox
                    style={{
                        marginVertical: 12,
                        marginLeft: 12,
                    }}

                    key={props.value}
                    text={props.value}

                    isChecked={false}
                    textStyle={{
                        textDecorationLine: "none"
                    }}

                    onPress={
                        props.onPress
                    }
                />

                <Ionicons name="information-circle-outline" style={{
                    marginVertical: 12,
                }}
                    onPress={() => {
                        alert("you pushed me")
                    }}
                />

                <View
                    style={{ flexDirection: 'row' }}
                >

                    <Checkbox
                        style={{
                            // borderWidth: 1
                            // marginVertical: 12
                        }}

                        // disabled={false}
                        value={true}
                    ></Checkbox>

                    <Text>test</Text>
                </View>


            </View>

        );
    } else {
        return null;
    }
}

const ConsentItems = (props) => {

    var states = Object.fromEntries(
        props.values.map(
            (value) => ([value, React.useState(true)])
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

                                visible={states[value][0]}

                                onPress={
                                    () => {

                                        var bufferStates = states;
                                        for (var s in states) {
                                            if (s != value) {
                                                states[s][1](!states[s][0])
                                                bufferStates[s] = !states[s][0]
                                            } else {
                                                bufferStates[s] = states[s][0]

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


/**
 {
                    "estimate":false,
                "description":"ds",
                "link":"http://link.com",
                "no_restrictions":false,
                "open_to_general_research_and_clinical_care":false,
                "open_to_HMB_research":false,
                "open_to_population_and_ancestry_research":false,
                "open_to_disease_specific":false
}
                */
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