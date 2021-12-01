import React from 'react';
import { Text, StyleSheet, TextInput, View, Button, TouchableOpacity } from 'react-native';

function LoginView() {

    const [username, onChangeUsername] = React.useState();
    return (
        <View>
            <Text
                style={{
                    textAlign: "center"
                }}
            >
                LUCE
            </Text>
            <TextInput
                style={styles.textInput}
                placeholder="Username: "
                onChangeText={onChangeUsername}
            // value={username}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Password:"
            />

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
                    alert("hello");
                }}>
                <Text
                    style={{
                        color: '#fff',
                        textAlign: "center"
                    }}
                >
                    Login
                </Text>
            </TouchableOpacity>

            <Text
                style={{
                    textDecorationLine: "underline",
                    padding: 10
                }
                }

                onPress={() => {
                    alert("hello");
                }}
            >
                No account? register!
            </Text>
        </View >
    );
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default LoginView;