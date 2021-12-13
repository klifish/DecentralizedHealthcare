import axios from "axios";
import React from "react";
import { Text, TouchableOpacity, StyleSheet, TextInput, View } from "react-native";

function RegisterPage() {

    const [name, onChangeName] = React.useState();
    const [gender, onChangeGender] = React.useState();
    const [age, onChangeAge] = React.useState();
    const [email, onChangeEmail] = React.useState();
    const [institution, onChangeInstitution] = React.useState();
    const [conntry, onChangeCountry] = React.useState();
    const [password, onChangePassword] = React.useState();

    return (
        <View
            style={styles.container}
        >
            <TextInput
                style={styles.textInput}
                placeholder="Name"
                onChangeText={onChangeName}
            >
            </TextInput>
            <TextInput
                style={styles.textInput}
                placeholder="Gender"
                onChangeText={onChangeGender}
            >
            </TextInput>
            <TextInput
                style={styles.textInput}
                placeholder="Age"
                onChangeText={onChangeAge}
            >
            </TextInput>
            <TextInput
                style={styles.textInput}
                placeholder="Email"
                onChangeText={onChangeEmail}
            >
            </TextInput>
            <TextInput
                style={styles.textInput}
                placeholder="Institution"
                onChangeText={onChangeInstitution}
            >
            </TextInput>
            <TextInput
                style={styles.textInput}
                placeholder="Country"
                onChangeText={onChangeCountry}
            >
            </TextInput>

            <TextInput
                style={styles.textInput}
                placeholder="Password"
                onChangeText={onChangePassword}
            >
            </TextInput>

            <TouchableOpacity
                style={{
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
                }}
                onPress={() => {
                    axios({
                        method: "post",
                        url: "",
                        data: {

                        }
                    })
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        textAlign: "center"
                    }}
                >
                    Submit
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
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default RegisterPage;