import axios from "axios";
import React from "react";

import {
    Text,
    TouchableOpacity,
    TextInput,
    View
} from "react-native";

import styles from "../utils/style-sheet";
import service from "../utils/request";

const RegisterItem = (props) => {
    const [, onChangeText] = React.useState();
    return (
        <TextInput
            style={styles.textInput}
            placeholder={props.name}
            onChangeText={(_text) => {
                onChangeText(_text)
                props.dataTracker(props.name, _text)
            }}
        />
    )
}

const RegisterItems = (props) => {
    const dataTrace = (item, value) => {
        props.details[item] = value;
    }

    return (
        <View>
            {
                props.items.map(
                    (value) => {
                        return (
                            <RegisterItem
                                key={value}
                                name={value}
                                dataTracker={dataTrace}
                            />
                        )
                    }
                )
            }
        </View>
    )
}

function RegisterPage({ navigation }) {

    // const items = ["tom", "jerry"]
    const items = require("./page_config.json").pageConfig.registerDetailItems

    // {"tom":"", "jerry":""}
    var registerDetails = Object.fromEntries(
        items.map(
            (item) => ([item, ""])
        )
    )

    const notEmpty = (fields) => {
        var isEmpty = false


        for (let key in fields) {
            if (fields[key].length === 0) {
                isEmpty = true
                break
            }
        }
    }

    const handlePress = (registerDetails) => {
        if (!notEmpty(registerDetails)) {
            alert("Fields required but empty")
        }

        service.post(
            "/usr/register",
            registerDetails
        ).then(response => {
            if (200 === response.data.erroe.code) {
                navigation.navigate("Login")
            }
            else {
                alert(response.data.error.message)
            }
        }).catch(error => {
            alert(error)
        })
    }

    return (
        <View>
            <RegisterItems
                items={items}
                details={registerDetails}
            >
            </RegisterItems>

            <TouchableOpacity
                style={styles.touchableOpacityStyle}
                onPress={() => {
                    handlePress(registerDetails)
                }}
            >
                <Text
                    style={
                        {
                            color: '#fff',
                            textAlign: "center"
                        }
                    }
                >
                    Submit
                </Text>
            </TouchableOpacity>
        </View>

    )
}

export default RegisterPage;