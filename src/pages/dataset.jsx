import { TabRouter } from "@react-navigation/native";
import React from "react";

import { TouchableOpacity, View, ScrollView, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "../utils/style-sheet";

function Dataset(props) {

    const [checkState, onChangeCheckState] = React.useState(false);
    return (
        <View
            style={{
                flexDirection: "row",
                margin: 10,
                padding: 12,
                // borderWidth: 1,
                backgroundColor: "cornsilk",
                borderRadius: 32

            }}
        >
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
                {"id: "}
                {props.id}
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
                                    onSelected={
                                        (state) => {
                                            multiIsSelected[value.id] = state;
                                        }
                                    }
                                />
                            );
                        }
                    )
                }
            </ ScrollView>

            <CustomButton
                text="Request"
            />
        </View>

    );
}

function CustomButton(props) {
    return (
        <View>
            <TouchableOpacity
                style={[styles.touchableOpacityStyle, props.style]}
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

function DatasetPage({ route }) {

    const paramsFromPreviousPage = route.params;

    return (
        <PageElements
            data={paramsFromPreviousPage.data}
        />
    );
}

export default DatasetPage;