import react from "react";
import React from "react";

import { Text, TextInput, TouchableOpacity, View, useState } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import service from "../utils/request";
import styles from "../utils/style-sheet";

const ConsentStatements = (props) => {
    const [noRestrictions, onChangeNoRestrictions] = React.useState(false);

    return (
        <View>
            <BouncyCheckbox
                style={{
                    backgroundColor: "#fff",
                    margin: 12
                }}
                text="noRestrictions"
                isChecked={false}
                textStyle={{ textDecorationLine: "none" }}
                onPress={() => {
                    onChangeNoRestrictions(!noRestrictions)
                    props.consentTracing("noRestrictions", !noRestrictions)
                }}
            >

            </BouncyCheckbox>

            <View style={{
                backgroundColor: '#fff',
                alignItems: 'flex-start',
                justifyContent: 'center',
            }}>
                {
                    props.values.map((value) => {
                        const [checkState, onChangeCheckState] = React.useState(false);

                        if (value === "noRestrictions") {
                            // props.consentTracing(value, false)

                            return
                        }

                        if (noRestrictions) {
                            props.consentTracing(value, false)
                            return
                        }

                        return (
                            <BouncyCheckbox
                                style={{
                                    backgroundColor: "#fff",
                                    margin: 12,
                                }}
                                key={value}
                                text={value}
                                isChecked={false}
                                textStyle={{
                                    textDecorationLine: "none"
                                }}

                                onPress={() => {

                                    if (value == "noRestrictions") {

                                    }
                                    props.consentTracing(value, !checkState)
                                    // console.log(checkState)
                                    onChangeCheckState(!checkState)
                                }} />
                        );
                    })
                }
            </View>
        </View>

    );


};


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
    const consentStatements = require("./page_config.json").pageConfig.consentStatementItems
    var consentResult = Object.fromEntries(
        consentStatements.map(
            (value) => [value, false]
        )
    )

    const consentTracing = (consent, result) => {
        consentResult[consent] = result;
        console.log(consentResult)
    }

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.textInput}
                placeholder="Please input a data link"
            />

            <TouchableOpacity
                style={styles.touchableOpacityStyle}

                onPress={() => {
                    // console.log(typeof (consentResult.noRestrictions))
                    service.post(
                        "/contract/dataUpload/",
                        consentResult
                    ).then(response => {

                    }).catch(error => {

                    })
                }
                }
            >

                <Text
                    style={{
                        color: '#fff',
                        textAlign: "center"
                    }}
                >
                    Upload
                </Text>
            </TouchableOpacity>

            <ConsentStatements
                values={consentStatements}
                consentTracing={consentTracing}
            />
        </View>
    );
}

export default ProviderPage;