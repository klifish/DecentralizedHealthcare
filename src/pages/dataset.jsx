import { TabRouter } from "@react-navigation/native";
import React from "react";

import { TouchableOpacity, View, ScrollView, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "../utils/style-sheet";
import DHButton from "../utils/dh-button";
import service from "../utils/request";

function Dataset(props) {
    const [checkState, onChangeCheckState] = React.useState(false);
    return (
        <View style={{
            flexDirection: "row",
            margin: 10,
            padding: 12,
            backgroundColor: "cornsilk",
            borderRadius: 32

        }} >
            <BouncyCheckbox
                style={{ flex: 1 }}
                onPress={
                    () => {
                        props.onSelected(!checkState);
                        onChangeCheckState(!checkState)
                    }

                }
            ></BouncyCheckbox>

            <Text
                style={{
                    // padding: 12,
                    // margin: 10,
                    // textAlign: "auto",
                    // borderWidth: 1,
                    flex: 6

                }}
            >
                {"contract id: "}
                {props.id}
                {"\n\n"}
                {"contract address: "}
                {props.contract_address}
                {"\n\n"}
                {"data description:\n"}
                {props.description}
            </Text>
        </View >
    )
}

const PageElements = (props) => {

    var multiIsSelected = Object.fromEntries(
        props.data.map(
            (value) => ([value.id, false])
        )
    )

    var selectedResult = [];

    const retrieveToken = async () => {
        try {
            return await AsyncStorage.getItem("@token");
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View>
            <ScrollView
                onPress={props.onPress}
            >
                {
                    props.data.map(
                        (value) => {
                            return (
                                <Dataset
                                    key={value.id}
                                    description={value.description}
                                    id={value.id}
                                    contract_address={value.contract_address}
                                    onSelected={
                                        (state) => {
                                            multiIsSelected[value.id] = state;

                                            if (state) {
                                                selectedResult.push(value);
                                            } else {
                                                selectedResult.splice(selectedResult.findIndex(v => v.id === value.id), 1)
                                            }
                                        }
                                    }
                                />
                            );
                        }
                    )
                }
            </ ScrollView>

            <DHButton
                title="Request"
                onPress={
                    () => {
                        if (0 === selectedResult.length) {
                            return;
                        }

                        var token = retrieveToken();
                        service.defaults.headers.common["token"] = token;

                        service.post(
                            "/contract/requestAccess",
                            selectedResult
                        ).then(response => {

                            // todo 
                        }).catch(err => {

                            alert(err);
                        })

                    }
                }
            ></DHButton>
        </View>
    );
}

function DatasetPage({ route }) {

    const paramsFromPreviousPage = route.params;

    return (
        <PageElements
            data={paramsFromPreviousPage.data}
        />
    );
}

export default DatasetPage;