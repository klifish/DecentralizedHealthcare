import React from "react";

import { TouchableOpacity, View, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "../utils/style-sheet";

function DatasetPage() {

    const [noRestrictions, onChangeNoRextrictions] = React.useState();

    const datasetDescription = "hello world";

    return (<View>
        <Text>
            {datasetDescription}
        </Text>
        <BouncyCheckbox
            style={
                {
                    backgroundColor: noRestrictions ? "#34eb83" : "#fff",
                }
            }
            textStyle={
                {
                    textDecorationLine: "none"
                }
            }
            text="noRestrictions"
            isChecked={noRestrictions}
            onPress={
                () => {
                    onChangeNoRextrictions(!noRestrictions)
                }
            }
        />

        <TouchableOpacity style={styles.touchableOpacityStyle} onPress={() => {

            // if (typeof (username) === 'undefined' || typeof (password) === 'undefined') {
            //     alert("Empty username or password")
            // }

            navigation.navigate("Role")

            // axios({
            //     method: "post",
            //     url: "/user/login",
            //     data: {
            //         username: username,
            //         password: password
            //     }
            // })
            //     .then(res => {
            //         navigation.navigate("Role")
            //     })
            //     .catch(err => { })
        }}>
            <Text
                style={{
                    color: '#fff',
                    textAlign: "center"
                }}
            >
                Request
            </Text>

        </TouchableOpacity>
    </View>)
}

export default DatasetPage;