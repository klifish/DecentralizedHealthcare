import axios from "axios";
import React from "react";

import {
    Text,
    TouchableOpacity,
    TextInput,
    View
} from "react-native";

import styles from "../utils/style-sheet";

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
            style={
                styles.container
            }
        >
            <TextInput
                style={
                    styles.textInput
                }
                placeholder="Name"
                onChangeText={onChangeName}
            />

            <TextInput
                style={styles.textInput}
                placeholder="Gender"
                onChangeText={onChangeGender}
            />

            <TextInput
                style={styles.textInput}
                placeholder="Age"
                onChangeText={onChangeAge}
            />

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
                style={
                    styles.touchableOpacityStyle
                }

                onPress={
                    () => {
                        axios(
                            {
                                method: "post",
                                url: "",
                                data: {

                                }
                            }
                        )
                    }
                }
            >
                <Text
                    style={
                        {
                            color: '#fff',
                            textAlign: "center"
                        }
                    }
                >
                    Submit
                </Text>
            </TouchableOpacity>
        </View >

    );
}

export default RegisterPage;