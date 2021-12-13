import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function RolePage({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate("Provider")
                }}>
                <Text
                    style={{
                        color: '#fff',
                        textAlign: "center"
                    }}
                >
                    Provide data
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Requester")}>

                <Text
                    style={{
                        color: '#fff',
                        textAlign: "center"
                    }}
                >
                    Request data
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        padding: 10,
        margin: 12,
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#1E6738',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    }
})

export default RolePage;