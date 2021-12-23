import React, { useState } from "react";

import { Text, View, TextInput, TouchableOpacity, FlatList, Keyboard } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "../utils/style-sheet";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);


function _renderList(status) {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    if (status) {
        return (
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />);

    }
    else
        return null;
}

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
        <View
            style={{
                margin: 12
            }}
        >
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

function CustomButton(props) {
    return (
        <View>
            <TouchableOpacity
                style={[styles.touchableOpacityStyle]}
                onPress={props.onPress}
            >
                <Text style={{
                    color: '#fff',
                    textAlign: "center"
                }}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

function RequesterPage() {

    const [hide, onChangeHide] = React.useState(false);

    const purposeStatements =
        require("./page_config.json").pageConfig.purposeStatementItems;

    var purposeStatementsMap = Object.fromEntries(
        purposeStatements.map(
            (value) => ([value, false])
        )
    )

    return (
        <View
            style={styles.container}
        >

            <View
                style={{
                    flexDirection: "row",
                    margin: 12
                }}
            >

                <TextInput
                    style={[styles.textInput, { flex: 1 }]}
                />

                <CustomButton
                    text="Search"
                    style={{ flex: 1 }}
                />

            </View>

            <StatementItems
                items={purposeStatements}
                data={purposeStatementsMap}
            />

            {
                _renderList(hide)
            }

        </View >
    );
}

export default RequesterPage;