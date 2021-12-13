import React from "react";

import { useState, View, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
    </View>)
}

export default DatasetPage;