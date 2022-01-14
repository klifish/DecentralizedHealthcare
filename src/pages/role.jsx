import React from "react";

import {
    Text,
    TouchableOpacity,
    View
} from "react-native";

import styles from "../utils/style-sheet";

function RolePage(
    {
        navigation
    }
) {
    return (
        <View
            style={
                styles.container
            }>

            <TouchableOpacity
                style={
                    styles.touchableOpacityStyle
                }

                onPress={
                    () => {
                        navigation.navigate("Provide dataset")
                    }
                }>

                <Text
                    style={
                        {
                            color: '#fff',
                            textAlign: "center"
                        }
                    }
                >
                    Upload data
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={
                    styles.touchableOpacityStyle
                }
                onPress={
                    () => navigation.navigate("Request dataset")
                }>

                <Text
                    style={
                        {
                            color: '#fff',
                            textAlign: "center"
                        }
                    }
                >
                    Search data
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default RolePage;