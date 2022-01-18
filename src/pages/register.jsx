import axios from "axios";
import React from "react";

import {
    Text,
    TextInput,
    View
} from "react-native";

import styles from "../utils/style-sheet";
import service from "../utils/request";
import DHButton from "../utils/dh-button";
import DHModal from "../utils/DHModal";

const RegisterItem = (props) => {
    const [, onChangeText] = React.useState();
    return (
        <View style={{ flexDirection: "row" }}>
            <Text style={{
                marginHorizontal: 12,
                marginVertical: 10,
                // margin: 10,
                // padding: 10,
                flex: 1,

            }}
            >
                {props.name + ":"}
            </Text>

            <TextInput style={
                [
                    // styles.textInput,
                    {
                        flex: 2,
                        borderBottomWidth: 1,
                        marginRight: 12,
                        // padding: 10
                    }
                ]
            }
                placeholder={props.name}
                onChangeText={(_text) => {
                    onChangeText(_text)
                    props.dataTracker(props.name, _text)
                }}
            />
        </View>

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

    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalContent, setModalContent] = React.useState("");

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

        return isEmpty;
    }

    const hasEmptyField = (fields) => {
        var empty_field = false;

        for (let key in fields) {
            if (fields[key].length === 0) {
                empty_field = true;
                break;
            }
        }
        return empty_field;
    }

    const handlePress = (registerDetails) => {
        if (hasEmptyField(registerDetails)) {
            setModalVisible(true)
            setModalContent("Fields required but empty");
            return
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

            <DHModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                message={modalContent}
            />

            <RegisterItems
                items={items}
                details={
                    registerDetails
                }
            />

            <DHButton title="Register" onPress={() => {
                handlePress(registerDetails)
            }}
            />
        </View >
    )
}

export default RegisterPage;