import React from "react";
import { StyleSheet, TextInput, View } from "react-native";


function RegisterView() {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Name"
            >
            </TextInput>
            <TextInput
                style={styles.textInput}
                placeholder="Gender"
            >
            </TextInput>
            <TextInput
                style={styles.textInput}
                placeholder="Age"
            >
            </TextInput>
            <TextInput
                style={styles.textInput}
                placeholder="Email"
            >
            </TextInput>
            <TextInput
                style={styles.textInput}
                placeholder="Institution"
            >
            </TextInput>
            <TextInput
                style={styles.textInput}
                placeholder="Country"
            >
            </TextInput>
            <TextInput
                style={styles.textInput}
                placeholder="Password"
            >
            </TextInput>
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
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default RegisterView;