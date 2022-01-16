import React from "react";

import {
    View,
    TextInput,
} from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "../utils/style-sheet";
import DHButton from "../utils/dh-button";
import DHModal from "../utils/DHModal";

import service from "../utils/request";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baaaaaaaaaaaaaaaaaaaaaaa',
        title: 'First Item',
        description: "first desfirst desfirst desfirst desfirst desfirst desfirst desfirst desfirst desfirst desfirst desfirst desfirst desfirst desfirst desfirst des"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        description: "second des"

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        description: "third des"
    },
];

function StatementItem(props) {
    const [checkState, onChangeCheckState] = React.useState(false);
    return (
        <BouncyCheckbox
            style={{
                margin: 4
            }}
            text={props.text}
            isChecked={false}
            textStyle={{
                textDecorationLine: "none"
            }}

            onPress={() => {
                props.dataTracker(props.text, !checkState)
                onChangeCheckState(!checkState)
            }}
        />
    )
}


function StatementItems(props) {
    const dataTracing = (item, value) => {
        props.data[item] = value
        console.log(props.data)
    }

    return (
        <View style={{
            margin: 12
        }}>
            {
                props.items.map(
                    (value) => {
                        return (
                            <StatementItem
                                key={value}
                                text={value}
                                dataTracker={dataTracing}
                            />
                        )
                    }
                )
            }

        </View>
    );
}

function RequesterPage({ navigation }) {

    const [searchContent, onChangeSearchContent] = React.useState("");
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalContent, setModalContent] = React.useState("");

    const purposeStatements =
        require("./page_config.json").pageConfig.purposeStatementItems;

    var purposeStatementsMap = Object.fromEntries(
        purposeStatements.map(
            (value) => ([value, false])
        )
    )

    const onPressButton = () => {

        // for debuging dataset page
        navigation.navigate("Dataset", { data: DATA });
        return

        if (0 === searchContent.length) {
            setModalVisible(true)
            setModalContent("Please type the search content")
            return
        }

        var submitData = { "search_content": searchContent };
        submitData = Object.assign(submitData, purposeStatementsMap)

        var token = retrieveToken();
        service.defaults.headers.common["token"] = token;

        service.post(
            "/contract/dataUpload/",
            submitData
        ).then(response => {
            if (200 === response.error.code) {
                navigation.navigate("Dataset", { data: DATA });
            }
        }).catch(err => {
            alert(err)
        })

    }

    const retrieveToken = async () => {
        try {
            return await AsyncStorage.getItem("@token");
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>

            <View style={{
                flexDirection: "row",
                margin: 12
            }} >

                <DHModal
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    message={modalContent}
                />

                <TextInput
                    style={[styles.textInput, { flex: 1 }]}
                    onChangeText={onChangeSearchContent}
                />

                <DHButton
                    title="Search"
                    onPress={onPressButton}
                />
            </View>

            <StatementItems
                items={purposeStatements}
                data={purposeStatementsMap}
            />
        </View >
    );
}

export default RequesterPage;