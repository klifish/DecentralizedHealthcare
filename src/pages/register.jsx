import React from "react";

import {
    Text,
    TextInput,
    View
} from "react-native";

import service from "../utils/request";
import DHButton from "../utils/dh-button";
import DHModal from "../utils/DHModal";
    
class RegisterItemClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = "";
        this.textInput = React.createRef();
    }

    clear() {
        this.textInput.current.clear()
    }

    render() {
        return (
            <View
                style={{ flexDirection: "row" }}
            >
                <Text
                    style={{
                        marginHorizontal: 12,
                        marginVertical: 10,
                        flex: 1,
                    }}
                >
                    {
                        this.props.name + ":"
                    }
                </Text>

                <TextInput
                    style={
                        [{
                            flex: 2,
                            borderBottomWidth: 1,
                            marginRight: 12,
                        }]
                    }
                    ref={this.textInput}
                    secureTextEntry={this.props.hidden}
                    placeholder={this.props.name}
                    onChangeText={
                        (_text) => {
                            this.setState({ state: _text })
                            this.props.dataTracker(this.props.name, _text)
                        }
                    }
                />
            </View>
        )
    }
}

function RegisterPage({ navigation }) {
    // const items = ["tom", "jerry"]
    const items = require("./page_config.json").pageConfig.registerDetailItems

    // hooks
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalContent, setModalContent] = React.useState("");
    var registerItemRefs = Object.fromEntries(
        items.map(
            (value) => ([value, React.useRef(null)])
        )
    )


    // {"tom":"", "jerry":""}, for tracking the details of each fields
    var registerDetails = Object.fromEntries(
        items.map(
            (item) => ([item, ""])
        )
    )

    const clearContent = (registerItemRefs) => {
        for (var key in registerItemRefs) {
            registerItemRefs[key].current.clear();
        }
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

    function dataTrace(item, value) {
        registerDetails[item] = value;
    }

    const handlePress = (registerDetails) => {
        if (hasEmptyField(registerDetails)) {
            setModalVisible(true);
            setModalContent("Fields required but empty");
            clearContent(registerItemRefs)
            return
        }
        registerDetails["create_wallet"] = true
        console.log(registerDetails)

        console.log(registerDetails)

        service.post(
            "/user/register/",
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

            <View>
                {
                    items.map(
                        (value) => {
                            return (
                                <RegisterItemClass
                                    hidden={value === "Password" ? true : false}
                                    ref={registerItemRefs[value]}
                                    key={value}
                                    name={value}
                                    dataTracker={dataTrace}
                                />
                            )
                        }
                    )
                }
            </View>

            <DHButton title="Register" onPress={
                () => {
                    handlePress(registerDetails)
                }}
            />
        </View >
    )
}

export default RegisterPage;